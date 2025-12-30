import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { recordAPI } from '../../api/record';
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

const SEAFOOD_TYPES = [
  '물고기', '연체류', '갑각류', '해조류'
];

const FRESHNESS = ['S', 'A', 'B', 'C'];

const WritePage = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isDistrictDropdownOpen, setIsDistrictDropdownOpen] = useState(false);
  const [isFreshnessDropdownOpen, setIsFreshnessDropdownOpen] = useState(false);
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

    if (!user) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    if (user.role !== 'fisherman') {
      alert('어민 등록이 필요합니다.');
      navigate('/register');
      return;
    }

    try {
      setIsSubmitting(true);
      // fisherman_id는 1로 고정
      await recordAPI.register({
        fisherman_id: "1",
        type: formData.name,
        region: `${formData.city} ${formData.district}`,
        fresh: formData.freshness,
        description: formData.description,
        amount: parseInt(formData.quantity),
        price: parseInt(formData.price),
        image_url: imageUrl
      });

      alert('수산물이 등록되었습니다!');
      navigate('/work-log');
    } catch (error) {
      alert('등록에 실패했습니다. 다시 시도해주세요.');
      console.error('Register record error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <S.Container>
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
          <S.DropdownWrapper>
            <S.CustomDropdown onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}>
              <S.DropdownLabel>{formData.name || '종류 선택'}</S.DropdownLabel>
              <S.DropdownArrow>
                <Icon 
                  icon="mdi:chevron-down" 
                  width="20" 
                  height="20"
                  style={{ transform: isTypeDropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
                />
              </S.DropdownArrow>
            </S.CustomDropdown>
            {isTypeDropdownOpen && (
              <S.DropdownList>
                {SEAFOOD_TYPES.map((type) => (
                  <S.DropdownItem 
                    key={type} 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, name: type }));
                      setIsTypeDropdownOpen(false);
                    }}
                    active={formData.name === type}
                  >
                    {type}
                  </S.DropdownItem>
                ))}
              </S.DropdownList>
            )}
          </S.DropdownWrapper>
        </S.Section>

        <S.Section>
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
                    onClick={() => {
                      setFormData(prev => ({ ...prev, city: region.city }));
                      setIsCityDropdownOpen(false);
                    }}
                    active={formData.city === region.city}
                  >
                    {region.city}
                  </S.DropdownItem>
                ))}
              </S.DropdownList>
            )}
          </S.DropdownWrapper>
        </S.Section>

        <S.Section>
          <S.Label>지역(군,구)</S.Label>
          <S.DropdownWrapper>
            <S.CustomDropdown 
              onClick={() => districts.length > 0 && setIsDistrictDropdownOpen(!isDistrictDropdownOpen)}
              disabled={districts.length === 0}
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
            {isDistrictDropdownOpen && (
              <S.DropdownList>
                {districts.map((district) => (
                  <S.DropdownItem 
                    key={district} 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, district }));
                      setIsDistrictDropdownOpen(false);
                    }}
                    active={formData.district === district}
                  >
                    {district}
                  </S.DropdownItem>
                ))}
              </S.DropdownList>
            )}
          </S.DropdownWrapper>
        </S.Section>

        <S.Section>
          <S.Label>신선도</S.Label>
          <S.DropdownWrapper>
            <S.CustomDropdown onClick={() => setIsFreshnessDropdownOpen(!isFreshnessDropdownOpen)}>
              <S.DropdownLabel>{formData.freshness || '신선도 선택'}</S.DropdownLabel>
              <S.DropdownArrow>
                <Icon 
                  icon="mdi:chevron-down" 
                  width="20" 
                  height="20"
                  style={{ transform: isFreshnessDropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
                />
              </S.DropdownArrow>
            </S.CustomDropdown>
            {isFreshnessDropdownOpen && (
              <S.DropdownList>
                {FRESHNESS.map((fresh) => (
                  <S.DropdownItem 
                    key={fresh} 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, freshness: fresh }));
                      setIsFreshnessDropdownOpen(false);
                    }}
                    active={formData.freshness === fresh}
                  >
                    {fresh}
                  </S.DropdownItem>
                ))}
              </S.DropdownList>
            )}
          </S.DropdownWrapper>
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

        <S.SubmitButton type="submit" disabled={isSubmitting || isUploading}>
          {isSubmitting ? (
            <S.ButtonContent>
              <S.ButtonSpinner />
              <span>등록 중...</span>
            </S.ButtonContent>
          ) : '등록'}
        </S.SubmitButton>
      </S.Form>
    </S.Container>
  );
};

export default WritePage;
