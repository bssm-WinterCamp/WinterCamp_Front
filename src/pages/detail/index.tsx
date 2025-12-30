import { useNavigate, useParams } from 'react-router-dom';
import * as S from './style';

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: '성상한 광어 30마리 팝니다.',
    category: '물고기',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800',
    status: 'S급 물고기',
    fisherman: '김어민',
    location: '부산광역시 기장군',
    hashtag: '해피해피해피마을',
    date: '2025.08.27',
    quantity: '30마리',
    pricePerUnit: 300000,
    phone: '01084148017'
  },
  {
    id: 2,
    title: '성상한 광어 30마리 팝니다.',
    category: '물고기',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800',
    status: 'S급 물고기',
    fisherman: '김어민',
    location: '부산광역시 기장군',
    hashtag: '해피해피해피마을',
    date: '2025.08.27',
    quantity: '30마리',
    pricePerUnit: 300000,
    phone: '01084148017'
  },
  {
    id: 3,
    title: '성상한 광어 30마리 팝니다.',
    category: '물고기',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800',
    status: 'S급 물고기',
    fisherman: '김어민',
    location: '부산광역시 기장군',
    hashtag: '해피해피해피마을',
    date: '2025.08.27',
    quantity: '30마리',
    pricePerUnit: 300000,
    phone: '01084148017'
  }
];

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find(p => p.id === Number(id));

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
