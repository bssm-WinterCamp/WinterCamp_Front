import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { foodAPI } from '../../api/food';
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

const PostListPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<SeafoodProduct[]>(MOCK_PRODUCTS);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [districts, setDistricts] = useState<string[]>([]);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isDistrictDropdownOpen, setIsDistrictDropdownOpen] = useState(false);

  useEffect(() => {
    if (selectedCity) {
      const region = REGIONS.find(r => r.city === selectedCity);
      setDistricts(region?.districts || []);
      setSelectedDistrict('');
    } else {
      setDistricts([]);
      setSelectedDistrict('');
    }
  }, [selectedCity]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (selectedCity && selectedDistrict) {
        try {
          setIsLoading(true);
          const location = `${selectedCity} ${selectedDistrict}`;
          const foodList = await foodAPI.getLocalFood(location);

          const transformedProducts: SeafoodProduct[] = foodList.map(food => ({
            id: food.food_id,
            title: food.name,
            category: getCategoryFromType(food.type),
            image: food.image_url || 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400',
            status: food.status,
            fisherman: food.fisherman_name,
            location: food.region,
            hashtag: food.hashtag || '',
            date: new Date(food.created_at).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit'
            }).replace(/\. /g, '.').replace(/\.$/, '')
          }));

          setProducts(transformedProducts);
        } catch (error) {
          console.error('Failed to fetch products:', error);
          setProducts(MOCK_PRODUCTS);
        } finally {
          setIsLoading(false);
        }
      } else {
        const user = localStorage.getItem('user');
        if (user) {
          try {
            setIsLoading(true);
            const userData = JSON.parse(user);
            const region = userData.region || '부산';

            const foodList = await foodAPI.getLocalFood(region);

            const transformedProducts: SeafoodProduct[] = foodList.map(food => ({
              id: food.food_id,
              title: food.name,
              category: getCategoryFromType(food.type),
              image: food.image_url || 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400',
              status: food.status,
              fisherman: food.fisherman_name,
              location: food.region,
              hashtag: food.hashtag || '',
              date: new Date(food.created_at).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
              }).replace(/\. /g, '.').replace(/\.$/, '')
            }));

            setProducts(transformedProducts);
          } catch (error) {
            console.error('Failed to fetch products:', error);
            setProducts(MOCK_PRODUCTS);
          } finally {
            setIsLoading(false);
          }
        }
      }
    };

    fetchProducts();
  }, [selectedCity, selectedDistrict]);

  const getCategoryFromType = (type: string): string => {
    const categoryMap: { [key: string]: string } = {
      '물고기': '물고기',
      '연체류': '연체류',
      '갑각류': '갑각류',
      '해조류': '해조류'
    };
    return categoryMap[type] || '물고기';
  };

  const filteredProducts = products.filter(product =>
    (selectedCategory === '' || product.category === selectedCategory) &&
    (searchQuery === '' || product.title.includes(searchQuery))
  );

  const handleProductClick = (productId: number) => {
    navigate(`/detail/${productId}`);
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsCityDropdownOpen(false);
  };

  const handleDistrictSelect = (district: string) => {
    setSelectedDistrict(district);
    setIsDistrictDropdownOpen(false);
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

      <S.FilterSection>
        <S.DropdownWrapper>
          <S.CustomDropdown onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}>
            <S.DropdownLabel>{selectedCity || '시/도 선택'}</S.DropdownLabel>
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
              <S.DropdownItem onClick={() => handleCitySelect('')}>시/도 선택</S.DropdownItem>
              {REGIONS.map((region) => (
                <S.DropdownItem 
                  key={region.city} 
                  onClick={() => handleCitySelect(region.city)}
                  active={selectedCity === region.city}
                >
                  {region.city}
                </S.DropdownItem>
              ))}
            </S.DropdownList>
          )}
        </S.DropdownWrapper>

        <S.DropdownWrapper>
          <S.CustomDropdown 
            onClick={() => selectedCity && setIsDistrictDropdownOpen(!isDistrictDropdownOpen)}
            disabled={!selectedCity}
          >
            <S.DropdownLabel disabled={!selectedCity}>{selectedDistrict || '구/군 선택'}</S.DropdownLabel>
            <S.DropdownArrow>
              <Icon 
                icon="mdi:chevron-down" 
                width="20" 
                height="20"
                style={{ transform: isDistrictDropdownOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
              />
            </S.DropdownArrow>
          </S.CustomDropdown>
          {isDistrictDropdownOpen && selectedCity && (
            <S.DropdownList>
              <S.DropdownItem onClick={() => handleDistrictSelect('')}>구/군 선택</S.DropdownItem>
              {districts.map((district) => (
                <S.DropdownItem 
                  key={district} 
                  onClick={() => handleDistrictSelect(district)}
                  active={selectedDistrict === district}
                >
                  {district}
                </S.DropdownItem>
              ))}
            </S.DropdownList>
          )}
        </S.DropdownWrapper>
      </S.FilterSection>

      <S.ListTitle>수산물 리스트</S.ListTitle>

      <S.ProductGrid>
        {isLoading ? (
          <S.EmptyMessage>로딩 중...</S.EmptyMessage>
        ) : filteredProducts.length > 0 ? (
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

export default PostListPage;
