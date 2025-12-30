import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { fishermanAPI } from '../../api/fisherman';
import { fileAPI } from '../../api/file';
import { useUserStore } from '../../store';
import * as S from './style';

interface Region {
  city: string;
  districts: string[];
}

const REGIONS: Region[] = [
  {
    city: '서울',
    districts: ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구']
  },
  {
    city: '부산',
    districts: ['강서구', '금정구', '기장군', '남구', '동구', '동래구', '부산진구', '북구', '사상구', '사하구', '서구', '수영구', '연제구', '영도구', '중구', '해운대구']
  },
  {
    city: '인천',
    districts: ['계양구', '남동구', '동구', '미추홀구', '부평구', '서구', '연수구', '중구', '강화군', '옹진군']
  },
  {
    city: '대구',
    districts: ['남구', '달서구', '동구', '북구', '서구', '수성구', '중구', '달성군']
  },
  {
    city: '광주',
    districts: ['광산구', '남구', '동구', '북구', '서구']
  },
  {
    city: '대전',
    districts: ['대덕구', '동구', '서구', '유성구', '중구']
  },
  {
    city: '울산',
    districts: ['남구', '동구', '북구', '중구', '울주군']
  }
];

const VILLAGES = ['해피마을', '바다마을', '물고기마을', '갈매기마을', '조개마을'];

const RegisterPage = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    district: '',
    village: ''
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isDistrictDropdownOpen, setIsDistrictDropdownOpen] = useState(false);
  const [isVillageDropdownOpen, setIsVillageDropdownOpen] = useState(false);
  const [districts, setDistricts] = useState<string[]>([]);

  useEffect(() => {
    if (formData.city) {
      const region = REGIONS.find(r => r.city === formData.city);
      setDistricts(region?.districts || []);
      setFormData(prev => ({ ...prev, district: '' }));
    } else {
      setDistricts([]);
      setFormData(prev => ({ ...prev, district: '' }));
    }
  }, [formData.city]);

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
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageFile) {
      alert('사진을 선택해주세요!');
      return;
    }

    try {
      setIsUploading(true);

      // 이미지 먼저 업로드
      const uploadResult = await fileAPI.uploadImage(imageFile);
      
      // 어민 등록
      if (!user) {
        alert('로그인이 필요합니다.');
        navigate('/login');
        return;
      }
      
      await fishermanAPI.register({
        user_id: parseInt(user.id), // store에서 가져온 실제 user_id 사용
        group: "1", // 그룹은 1로 고정
        region: `${formData.city} ${formData.district}`,
        phoneNumber: formData.phone,
        image: uploadResult.url
      });
      
      alert('어민 등록이 완료되었습니다!');
      navigate('/login');
    } catch (error) {
      alert('등록에 실패했습니다. 다시 시도해주세요.');
      console.error('Register error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleCitySelect = (city: string) => {
    setFormData(prev => ({ ...prev, city }));
    setIsCityDropdownOpen(false);
  };

  const handleDistrictSelect = (district: string) => {
    setFormData(prev => ({ ...prev, district }));
    setIsDistrictDropdownOpen(false);
  };

  const handleVillageSelect = (village: string) => {
    setFormData(prev => ({ ...prev, village }));
    setIsVillageDropdownOpen(false);
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
          <S.DropdownWrapper>
            <S.CustomDropdown onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}>
              <S.DropdownLabel>{formData.city || '지역 선택'}</S.DropdownLabel>
              <S.DropdownArrow>
                <Icon 
                  icon="mdi:chevron-down" 
                  width="20" 
                  height="20"
                  style={{ transform: isCityDropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
                />
              </S.DropdownArrow>
            </S.CustomDropdown>
            {isCityDropdownOpen && (
              <S.DropdownList>
                {REGIONS.map((region) => (
                  <S.DropdownItem 
                    key={region.city} 
                    onClick={() => handleCitySelect(region.city)}
                    active={formData.city === region.city}
                  >
                    {region.city}
                  </S.DropdownItem>
                ))}
              </S.DropdownList>
            )}
          </S.DropdownWrapper>
        </S.InputGroup>

        <S.InputGroup>
          <S.Label>지역(군, 구)</S.Label>
          <S.DropdownWrapper>
            <S.CustomDropdown 
              onClick={() => formData.city && setIsDistrictDropdownOpen(!isDistrictDropdownOpen)}
              style={{ opacity: formData.city ? 1 : 0.6, cursor: formData.city ? 'pointer' : 'not-allowed' }}
            >
              <S.DropdownLabel>{formData.district || '지역 선택'}</S.DropdownLabel>
              <S.DropdownArrow>
                <Icon 
                  icon="mdi:chevron-down" 
                  width="20" 
                  height="20"
                  style={{ transform: isDistrictDropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
                />
              </S.DropdownArrow>
            </S.CustomDropdown>
            {isDistrictDropdownOpen && formData.city && (
              <S.DropdownList>
                {districts.map((district) => (
                  <S.DropdownItem 
                    key={district} 
                    onClick={() => handleDistrictSelect(district)}
                    active={formData.district === district}
                  >
                    {district}
                  </S.DropdownItem>
                ))}
              </S.DropdownList>
            )}
          </S.DropdownWrapper>
        </S.InputGroup>

        <S.InputGroup>
          <S.Label>소속 어촌</S.Label>
          <S.DropdownWrapper>
            <S.CustomDropdown onClick={() => setIsVillageDropdownOpen(!isVillageDropdownOpen)}>
              <S.DropdownLabel>{formData.village || '어촌 선택'}</S.DropdownLabel>
              <S.DropdownArrow>
                <Icon 
                  icon="mdi:chevron-down" 
                  width="20" 
                  height="20"
                  style={{ transform: isVillageDropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
                />
              </S.DropdownArrow>
            </S.CustomDropdown>
            {isVillageDropdownOpen && (
              <S.DropdownList>
                {VILLAGES.map((village) => (
                  <S.DropdownItem 
                    key={village} 
                    onClick={() => handleVillageSelect(village)}
                    active={formData.village === village}
                  >
                    {village}
                  </S.DropdownItem>
                ))}
              </S.DropdownList>
            )}
          </S.DropdownWrapper>
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
