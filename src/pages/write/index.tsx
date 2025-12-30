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

const WritePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: '',
    description: ''
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        name: formData.name,
        type: '물고기',
        quantity: parseInt(formData.quantity),
        unit: '마리',
        price: parseInt(formData.price),
        description: formData.description,
        image_url: imageUrl
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
          <S.Label>수산물 종류</S.Label>
          <S.Select
            name="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
          >
            <option value="">선택하세요</option>
            {SEAFOOD_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </S.Select>
        </S.Section>

        <S.Section>
          <S.Label>수량</S.Label>
          <S.Input
            type="text"
            name="quantity"
            placeholder="예: 5마리"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </S.Section>

        <S.Section>
          <S.Label>가격 (원)</S.Label>
          <S.Input
            type="number"
            name="price"
            placeholder="예: 15000"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </S.Section>

        <S.Section>
          <S.Label>설명</S.Label>
          <S.TextArea
            name="description"
            placeholder="수산물에 대한 설명을 입력하세요"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
          />
        </S.Section>

        <S.SubmitButton type="submit">등록하기</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
};

export default WritePage;
