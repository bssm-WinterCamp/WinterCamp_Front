import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { fishermanAPI } from '../../api/fisherman';
import { fileAPI } from '../../api/file';
import * as S from './style';

const CITIES = ['서울', '부산', '인천', '대구', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'];
const DISTRICTS = ['강남구', '서초구', '송파구', '강동구', '동작구', '관악구', '영등포구', '금천구', '구로구', '양천구', '강서구', '마포구', '서대문구', '은평구', '노원구', '도봉구', '강북구', '성북구', '중랑구', '동대문구', '광진구', '성동구', '용산구', '중구', '종로구'];
const VILLAGES = ['해피마을', '바다마을', '물고기마을', '갈매기마을', '조개마을'];

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    district: '',
    village: ''
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      try {
        setIsUploading(true);
        const uploadResult = await fileAPI.uploadImage(file);
        setImageUrl(uploadResult.url);
      } catch (error) {
        console.error('Image upload failed:', error);
        alert('이미지 업로드에 실패했습니다.');
        setImagePreview(null);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageUrl) {
      alert('사진을 선택해주세요!');
      return;
    }

    try {
      await fishermanAPI.register({
        name: formData.name,
        phone_number: formData.phone,
        region: `${formData.city} ${formData.district}`,
        password: 'default123' // 임시 비밀번호
      });
      alert('어민 등록이 완료되었습니다!');
      navigate('/login');
    } catch (error) {
      alert('등록에 실패했습니다. 다시 시도해주세요.');
      console.error('Register error:', error);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>어민 등록 페이지</S.Title>
      </S.Header>

      <S.Form onSubmit={handleSubmit}>
        <S.InputGroup>
          <S.Label>사진 선택</S.Label>
          <S.ImageUploadWrapper>
            {imagePreview ? (
              <S.CircleImagePreview onClick={() => document.getElementById('registerImageInput')?.click()}>
                <S.CirclePreviewImage src={imagePreview} alt="프로필" />
              </S.CircleImagePreview>
            ) : (
              <S.CircleImageUploadLabel htmlFor="registerImageInput">
                <S.CircleUploadPlaceholder>
                  <Icon icon="material-symbols:photo-camera-outline" width="40" height="40" color="#CCCCCC" />
                  <S.CircleUploadText>박스를 눌러 사진을 고르세요</S.CircleUploadText>
                </S.CircleUploadPlaceholder>
              </S.CircleImageUploadLabel>
            )}
            <S.ImageInput
              id="registerImageInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              disabled={isUploading}
            />
          </S.ImageUploadWrapper>
        </S.InputGroup>

        <S.InputGroup>
          <S.Label>지역(시)</S.Label>
          <S.Select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          >
            <option value="">지역 선택</option>
            {CITIES.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </S.Select>
        </S.InputGroup>

        <S.InputGroup>
          <S.Label>지역(군, 구)</S.Label>
          <S.Select
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          >
            <option value="">지역 선택</option>
            {DISTRICTS.map(district => (
              <option key={district} value={district}>{district}</option>
            ))}
          </S.Select>
        </S.InputGroup>

        <S.InputGroup>
          <S.Label>소속 어촌</S.Label>
          <S.Select
            name="village"
            value={formData.village}
            onChange={handleChange}
            required
          >
            <option value="">어촌 선택</option>
            {VILLAGES.map(village => (
              <option key={village} value={village}>{village}</option>
            ))}
          </S.Select>
        </S.InputGroup>

        <S.InputGroup>
          <S.Label>이름</S.Label>
          <S.Input
            type="text"
            name="name"
            placeholder="김어민"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </S.InputGroup>

        <S.InputGroup>
          <S.Label>전화번호</S.Label>
          <S.Input
            type="tel"
            name="phone"
            placeholder="010-1234-1111"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </S.InputGroup>

        <S.SubmitButton type="submit">기록 등록</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
};

export default RegisterPage;
