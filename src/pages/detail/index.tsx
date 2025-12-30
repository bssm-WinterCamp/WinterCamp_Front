import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { foodAPI } from '../../api/food';
import * as S from './style';

interface ProductDetail {
  id: number;
  title: string;
  category: string;
  image: string;
  status: string;
  fisherman: string;
  location: string;
  hashtag: string;
  date: string;
  quantity: string;
  pricePerUnit: number;
  phone: string;
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
          image: detail.image_url || 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800',
          status: detail.status,
          fisherman: detail.fisherman_name,
          location: detail.region,
          hashtag: detail.hashtag || '',
          date: new Date(detail.created_at).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }).replace(/\. /g, '.').replace(/\.$/, ''),
          quantity: `${detail.quantity}${detail.unit}`,
          pricePerUnit: detail.price,
          phone: detail.phone_number
        });
      } catch (error) {
        console.error('Failed to fetch product detail:', error);
        setProduct(null);
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
          <S.BackButton onClick={() => navigate('/')}>뒤로가기</S.BackButton>
          <S.ErrorMessage>로딩 중...</S.ErrorMessage>
        </S.ContentWrapper>
      </S.Container>
    );
  }

  if (!product) {
    return (
      <S.Container>
        <S.ContentWrapper>
          <S.BackButton onClick={() => navigate('/')}>뒤로가기</S.BackButton>
          <S.ErrorMessage>상품을 찾을 수 없습니다.</S.ErrorMessage>
        </S.ContentWrapper>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.BackButton onClick={() => navigate('/')}>뒤로가기</S.BackButton>

        <S.TitleSection>
          <S.ProductTitle>{product.title}</S.ProductTitle>
          <S.StatusBadge>{product.status}</S.StatusBadge>
        </S.TitleSection>

        <S.ProductImage src={product.image} alt={product.title} />

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
            <S.InfoLabel>지역</S.InfoLabel>
            <S.InfoValue>{product.location}</S.InfoValue>
          </S.InfoRow>
          <S.InfoRow>
            <S.InfoLabel>소속 어촌</S.InfoLabel>
            <S.InfoValue>{product.hashtag}</S.InfoValue>
          </S.InfoRow>
          <S.InfoRow>
            <S.PhoneLabel>전화번호</S.PhoneLabel>
            <S.PhoneValue>{product.phone}</S.PhoneValue>
          </S.InfoRow>
        </S.InfoSection>

        <S.ContactButton>
          <S.ContactIcon>ⓘ</S.ContactIcon>
          <S.ContactText>기계를 원하시다면 아래 전화번호로 연락하세요!</S.ContactText>
        </S.ContactButton>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default DetailPage;
