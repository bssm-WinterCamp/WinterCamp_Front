import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import * as S from './style';

interface SeafoodProduct {
  id: number;
  title: string;
  category: string;
  image: string;
  status: string;
  fisherman: string;
  location: string;
  hashtag: string;
  date: string;
}

const CATEGORIES = ['물고기', '연체류', '갑각류', '해조류'];

const MOCK_PRODUCTS: SeafoodProduct[] = [
  {
    id: 1,
    title: '싱싱한 광어 30마리 팝니다.',
    category: '물고기',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400',
    status: '수량중',
    fisherman: '김어민',
    location: '부산광역시 기장군',
    hashtag: '해피해피해피마을',
    date: '2025.08.27'
  },
  {
    id: 2,
    title: '싱싱한 광어 30마리 팝니다.',
    category: '물고기',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400',
    status: '수량중',
    fisherman: '김어민',
    location: '부산광역시 기장군',
    hashtag: '해피해피해피마을',
    date: '2025.08.27'
  },
  {
    id: 3,
    title: '싱싱한 광어 30마리 팝니다.',
    category: '물고기',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400',
    status: '수량중',
    fisherman: '김어민',
    location: '부산광역시 기장군',
    hashtag: '해피해피해피마을',
    date: '2025.08.27'
  },
  {
    id: 4,
    title: '싱싱한 광어 30마리 팝니다.',
    category: '물고기',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400',
    status: '수량중',
    fisherman: '김어민',
    location: '부산광역시 기장군',
    hashtag: '해피해피해피마을',
    date: '2025.08.27'
  },
  {
    id: 5,
    title: '신선한 오징어 20마리',
    category: '연체류',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400',
    status: '수량중',
    fisherman: '이어민',
    location: '강원도 속초시',
    hashtag: '신선한바다',
    date: '2025.08.26'
  },
  {
    id: 6,
    title: '통통한 대게 판매',
    category: '갑각류',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400',
    status: '수량중',
    fisherman: '박어민',
    location: '경북 포항시',
    hashtag: '포항대게',
    date: '2025.08.25'
  }
];

const WorkLogPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('물고기');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = MOCK_PRODUCTS.filter(product =>
    product.category === selectedCategory &&
    (searchQuery === '' || product.title.includes(searchQuery))
  );

  const handleProductClick = (productId: number) => {
    navigate(`/detail/${productId}`);
  };

  return (
    <S.Container>
      <S.SearchContainer>
        <S.SearchIcon>
          <Icon icon="material-symbols:search" width="24" height="24" />
        </S.SearchIcon>
        <S.SearchInput
          placeholder="수산물을 검색해 보세요."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </S.SearchContainer>

      <S.CategoryContainer>
        {CATEGORIES.map(category => (
          <S.CategoryButton
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </S.CategoryButton>
        ))}
      </S.CategoryContainer>

      <S.ListTitle>수산물 리스트</S.ListTitle>

      <S.ProductGrid>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <S.ProductCard
              key={product.id}
              onClick={() => handleProductClick(product.id)}
            >
              <S.ProductImageWrapper>
                <S.ProductImage src={product.image} alt={product.title} />
                <S.StatusBadge>{product.status}</S.StatusBadge>
              </S.ProductImageWrapper>
              <S.ProductInfo>
                <S.ProductTitle>{product.title}</S.ProductTitle>
                <S.ProductDetail>어민 : {product.fisherman}</S.ProductDetail>
                <S.ProductDetail>{product.location}</S.ProductDetail>
                <S.ProductDetail>{product.hashtag}</S.ProductDetail>
                <S.ProductDate>{product.date}</S.ProductDate>
              </S.ProductInfo>
            </S.ProductCard>
          ))
        ) : (
          <S.EmptyMessage>
            검색 결과가 없습니다
          </S.EmptyMessage>
        )}
      </S.ProductGrid>
    </S.Container>
  );
};

export default WorkLogPage;
