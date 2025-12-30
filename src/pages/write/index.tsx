import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { recordAPI } from '../../api/record';
import { fileAPI } from '../../api/file';
import * as S from './style';

const SEAFOOD_TYPES = [
  '고등어', '갈치', '광어', '오징어', '참돔', '문어', '조기', '전복',
  '꽃게', '대게', '새우', '멍게', '우럭', '농어', '방어'
];

const CITIES = ['서울', '부산', '인천', '대구', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'];
const DISTRICTS = ['강남구', '서초구', '송파구', '강동구', '동작구', '관악구', '영등포구', '금천구', '구로구', '양천구', '강서구', '마포구', '서대문구', '은평구', '노원구', '도봉구', '강북구', '성북구', '중랑구', '동대문구', '광진구', '성동구', '용산구', '중구', '종로구'];
const FRESHNESS = ['S', 'A', 'B', 'C'];

const WritePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    district: '',
    freshness: '',
    description: '',
    quantity: '',
    price: ''
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // 미리보기 설정
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      // 서버에 이미지 업로드
      try {
        setIsUploading(true);
        const uploadResult = await fileAPI.uploadImage(file);
        setImageUrl(uploadResult.url);
        console.log('Image uploaded:', uploadResult.url);
      } catch (error) {
        console.error('Image upload failed:', error);
        alert('이미지 업로드에 실패했습니다. 다시 시도해주세요.');
        setImagePreview(null);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageUrl) {
      alert('사진을 등록해주세요!');
      return;
    }

    if (isUploading) {
      alert('이미지 업로드 중입니다. 잠시만 기다려주세요.');
      return;
    }

    const user = localStorage.getItem('user');
    if (!user) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    try {
      const userData = JSON.parse(user);

      await recordAPI.register({
        fisherman_id: userData.fisherman_id,
        type: formData.name,
        region: `${formData.city} ${formData.district}`,
        fresh: formData.freshness,
        description: formData.description,
        amount: parseInt(formData.quantity),
        price: parseInt(formData.price)
      });

      alert('수산물이 등록되었습니다!');
      navigate('/work-log');
    } catch (error) {
      alert('등록에 실패했습니다. 다시 시도해주세요.');
      console.error('Register record error:', error);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>수산물 등록</S.Title>
        <S.Subtitle>오늘 잡은 수산물을 등록하세요</S.Subtitle>
      </S.Header>

      <S.Form onSubmit={handleSubmit}>
        <S.Section>
          <S.Label>사진</S.Label>
          <S.ImageUploadWrapper>
            {imagePreview ? (
              <S.ImagePreview>
                <S.PreviewImage src={imagePreview} alt="미리보기" />
                <S.ChangeImageButton
                  type="button"
                  onClick={() => document.getElementById('imageInput')?.click()}
                  disabled={isUploading}
                >
                  {isUploading ? '업로드 중...' : '사진 변경'}
                </S.ChangeImageButton>
              </S.ImagePreview>
            ) : (
              <S.ImageUploadLabel htmlFor="imageInput">
                <S.UploadPlaceholder>
                  <S.UploadIcon>
                    <Icon icon="material-symbols:photo-camera-outline" width="60" height="60" />
                  </S.UploadIcon>
                  <S.UploadText>{isUploading ? '업로드 중...' : '사진을 선택해주세요'}</S.UploadText>
                </S.UploadPlaceholder>
              </S.ImageUploadLabel>
            )}
            <S.ImageInput
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              disabled={isUploading}
            />
          </S.ImageUploadWrapper>
        </S.Section>

        <S.Section>
          <S.Label>종류</S.Label>
          <S.Select
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          >
            <option value="">종류 선택</option>
            {SEAFOOD_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </S.Select>
        </S.Section>

        <S.Section>
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
        </S.Section>

        <S.Section>
          <S.Label>지역(군,구)</S.Label>
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
        </S.Section>

        <S.Section>
          <S.Label>신선도</S.Label>
          <S.Select
            name="freshness"
            value={formData.freshness}
            onChange={handleChange}
            required
          >
            <option value="">신선도 선택</option>
            {FRESHNESS.map(fresh => (
              <option key={fresh} value={fresh}>{fresh}</option>
            ))}
          </S.Select>
        </S.Section>

        <S.Section>
          <S.Label>설명</S.Label>
          <S.TextArea
            name="description"
            placeholder="신선한 광어입니다"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
          />
        </S.Section>

        <S.Section>
          <S.Label>수량</S.Label>
          <S.Input
            type="text"
            name="quantity"
            placeholder="예: 4"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </S.Section>

        <S.Section>
          <S.Label>가격</S.Label>
          <S.Input
            type="number"
            name="price"
            placeholder="예: 4000"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </S.Section>

        <S.SubmitButton type="submit">기록 등록</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
};

export default WritePage;
