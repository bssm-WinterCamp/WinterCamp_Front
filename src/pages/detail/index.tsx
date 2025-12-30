import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { foodAPI } from '../../api/food';
import * as S from './style';

interface ProductDetail {
  id: number;
  title: string;
  category: string;
  image: string | null;
  status: string;
  fisherman: string;
  location: string;
  group: string;
  date: string;
  quantity: string;
  pricePerUnit: number;
  phone: string;
  description: string;
}

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetail = async () => {
      if (!id) return;

      try {
        setIsLoading(true);
        const detail = await foodAPI.getFoodDetail(Number(id));

        setProduct({
          id: detail.food_id,
          title: detail.name,
          category: detail.type,
          image: detail.image_url || null,
          status: `${detail.fresh}급 ${detail.type}`,
          fisherman: detail.user_name,
          location: detail.group_region,
          group: detail.group || '',
          date: new Date(detail.created_at).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }).replace(/\. /g, '.').replace(/\.$/, ''),
          quantity: `${detail.remain}개`,
          pricePerUnit: detail.price,
          phone: detail.phoneNumber || '',
          description: detail.description
        });
      } catch (error) {
        console.error('Failed to fetch product detail:', error);
        // 임시 목업 데이터 사용
        setProduct({
          id: Number(id),
          title: '싱싱한 광어 3마리 팝니다.',
          category: '물고기',
          image: null,
          status: 'S급 물고기',
          fisherman: '김어민',
          location: '부산광역시 기장군',
          group: '해피해피해피마을',
          date: '2025.08.27',
          quantity: '수량 3마리',
          pricePerUnit: 300000,
          phone: '01084148017',
          description: '신선한 수산물입니다.'
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (isLoading) {
    return (
      <S.Container>
        <S.ContentWrapper>
          <S.BackButton onClick={() => navigate('/')}>&lt;</S.BackButton>
          <S.ErrorMessage>로딩 중...</S.ErrorMessage>
        </S.ContentWrapper>
      </S.Container>
    );
  }

  if (!product) {
    return (
      <S.Container>
        <S.ContentWrapper>
          <S.BackButton onClick={() => navigate('/')}>&lt;</S.BackButton>
          <S.ErrorMessage>상품을 찾을 수 없습니다.</S.ErrorMessage>
        </S.ContentWrapper>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.BackButton onClick={() => navigate('/')}>&lt;</S.BackButton>

        <S.TitleSection>
          <S.ProductTitle>{product.title}</S.ProductTitle>
          <S.StatusBadge>{product.status}</S.StatusBadge>
        </S.TitleSection>
        <S.Divider />

        {product.image ? (
          <S.ProductImage src={product.image} alt={product.title} />
        ) : (
          <S.NoImageContainer>
            <S.NoImageText>이미지가 존재하지 않습니다</S.NoImageText>
          </S.NoImageContainer>
        )}

        {product.description && (
          <S.DescriptionSection>
            <S.DescriptionText>{product.description}</S.DescriptionText>
          </S.DescriptionSection>
        )}

        <S.PriceSection>
          <S.PriceLabel>가격</S.PriceLabel>
          <S.QuantityText>수량 {product.quantity}</S.QuantityText>
          <S.PriceRow>
            <S.UnitLabel>1마리</S.UnitLabel>
            <S.PriceValue>₩ {product.pricePerUnit.toLocaleString()}</S.PriceValue>
          </S.PriceRow>
        </S.PriceSection>

        <S.InfoSection>
          <S.InfoTitle>어민</S.InfoTitle>
          <S.InfoRow>
            <S.InfoLabel>이름</S.InfoLabel>
            <S.InfoValue>{product.fisherman}</S.InfoValue>
          </S.InfoRow>
          <S.InfoRow>
            <S.InfoLabel>기간</S.InfoLabel>
            <S.InfoValue>{product.date}</S.InfoValue>
          </S.InfoRow>
          <S.InfoRow>
            <S.InfoLabel>소속 어촌</S.InfoLabel>
            <S.InfoValue>{product.location}</S.InfoValue>
          </S.InfoRow>
          <S.InfoRow>
            <S.PhoneLabel>전화번호</S.PhoneLabel>
            <S.PhoneValue>{product.phone}</S.PhoneValue>
          </S.InfoRow>
        </S.InfoSection>

        <S.ContactButton>
          <S.ContactIcon>ⓘ</S.ContactIcon>
          <S.ContactText>거래를 원하신다면 아래 전화번호로 연락하세요!</S.ContactText>
        </S.ContactButton>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default DetailPage;
