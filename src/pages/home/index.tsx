import { useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { aiAPI } from '../../api/ai';
import fishData from '../../data/fishData.json';
import * as S from './style';

const HomePage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('guest');
  const [recommendedProduct, setRecommendedProduct] = useState({
    id: 1,
    name: '광어',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800',
    description: '싱싱한 광어 30마리가 왔어요! 싱싱도 60인! 좋은 상태로 기계 구매하려 1개로 한정되어 있으며, 기존 구매 어려워 입지하는 컬리전인 가격대로 제공되고 있어 최적의 선택입니다!'
  });

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const userData = JSON.parse(user);
        setUserName(userData.name || 'guest');

        if (userData.user_id) {
          aiAPI.getRecommendations(userData.user_id)
            .then(response => {
              if (response.recommendations && response.recommendations.length > 0) {
                const firstRecommend = response.recommendations[0];
                setRecommendedProduct({
                  id: firstRecommend.food_id,
                  name: firstRecommend.name,
                  image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800',
                  description: firstRecommend.reason
                });
              }
            })
            .catch(error => {
              console.error('Failed to fetch AI recommendations:', error);
            });
        }
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    }
  }, []);

  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  // 제철 데이터를 월 배열로 변환하는 함수
  const parseSeasonMonths = useCallback((season: string): number[] => {
    if (season === '사계절') {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    }
    
    const match = season.match(/(\d+)~(\d+)월/);
    if (!match) return [];
    
    const startMonth = parseInt(match[1]);
    const endMonth = parseInt(match[2]);
    
    const months: number[] = [];
    if (startMonth <= endMonth) {
      // 같은 연도 내: 3~5월
      for (let i = startMonth; i <= endMonth; i++) {
        months.push(i);
      }
    } else {
      // 연도가 넘어가는 경우: 9~2월
      for (let i = startMonth; i <= 12; i++) {
        months.push(i);
      }
      for (let i = 1; i <= endMonth; i++) {
        months.push(i);
      }
    }
    return months;
  }, []);

  // 특정 월에 제철인 수산물 필터링
  const getSeafoodByMonth = useCallback((month: number) => {
    return (fishData as any[]).filter(item => {
      const seasonMonths = parseSeasonMonths(item.제철);
      return seasonMonths.includes(month);
    }).sort((a, b) => b.평균단가 - a.평균단가);
  }, [parseSeasonMonths]);

  // 월별 평균 단가 합계 데이터
  const monthlyAveragePrices: { [key: number]: number } = {
    1: 121218,
    2: 121218,
    3: 94704,
    4: 60575,
    5: 60898,
    6: 71678,
    7: 74553,
    8: 63918,
    9: 95301,
    10: 73115,
    11: 108786,
    12: 119777
  };

  // 월별 평균 단가 합계 그래프 데이터
  const chartData = useMemo(() => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(month => {
      const totalPrice = monthlyAveragePrices[month] || 0;
      const priceInTenThousand = totalPrice / 10000; // 만원 단위로 변환
      return {
        month: `${month}월`,
        value: priceInTenThousand,
        monthNum: month
      };
    });
  }, []);

  const maxValue = chartData.length > 0 
    ? Math.max(...chartData.map(d => d.value)) * 1.1 
    : 1; // 최대값의 110%

  // 선택된 월의 수산물 데이터
  const selectedSeafood = useMemo(() => {
    if (selectedMonth === null) return [];
    return getSeafoodByMonth(selectedMonth);
  }, [selectedMonth, getSeafoodByMonth]);

  const handleBarClick = (monthNum: number) => {
    setSelectedMonth(selectedMonth === monthNum ? null : monthNum);
  };

  return (
    <S.Container>
      <S.Header>
        <S.WelcomeSection>
          <S.WelcomeText>{userName} 님</S.WelcomeText>
          <S.WelcomeText>어서오세요.</S.WelcomeText>
          {userName === 'guest' && (
            <S.AuthLink onClick={() => navigate('/login')}>
              어민이세요? 인증하러 가기
            </S.AuthLink>
          )}
        </S.WelcomeSection>
        <S.ProfileIcon onClick={() => navigate('/my-page')}>
          <Icon icon="material-symbols:account-circle" width="56" height="56" />
        </S.ProfileIcon>
      </S.Header>

      <S.ChartSection>
        <S.ChartTitle>수산물 평균 단가</S.ChartTitle>
        <S.ChartWrapper>
          <S.Chart>
            {chartData.map((data, index) => (
              <S.ChartBar key={index}>
                <S.BarValue>{data.value.toFixed(1)}만원</S.BarValue>
                <S.Bar 
                  height={(data.value / maxValue) * 150} 
                  index={index}
                  isSelected={selectedMonth === data.monthNum}
                  onClick={() => handleBarClick(data.monthNum)}
                />
                <S.BarLabel>{data.month}</S.BarLabel>
              </S.ChartBar>
            ))}
          </S.Chart>
          <S.ChartLegend>
            <S.LegendDot />
            <S.LegendText>평균단가 (원/kg)</S.LegendText>
          </S.ChartLegend>
        </S.ChartWrapper>
        
        {selectedMonth !== null && selectedSeafood.length > 0 && (
          <S.SeafoodTableWrapper>
            <S.TableTitle>{selectedMonth}월 제철 수산물</S.TableTitle>
            <S.SeafoodTable>
              <S.TableHeader>
                <S.TableHeaderCell>어종명</S.TableHeaderCell>
                <S.TableHeaderCell>평균단가</S.TableHeaderCell>
                <S.TableHeaderCell>제철</S.TableHeaderCell>
                <S.TableHeaderCell>주력 위판장</S.TableHeaderCell>
              </S.TableHeader>
              <S.TableBody>
                {selectedSeafood.map((item, index) => (
                  <S.TableRow key={index}>
                    <S.TableCell>{item.어종명}</S.TableCell>
                    <S.TableCell>{item.평균단가.toLocaleString()}원</S.TableCell>
                    <S.TableCell>{item.제철}</S.TableCell>
                    <S.TableCell>{item.주력위판장}</S.TableCell>
                  </S.TableRow>
                ))}
              </S.TableBody>
            </S.SeafoodTable>
          </S.SeafoodTableWrapper>
        )}
      </S.ChartSection>

      <S.RecommendSection>
        <S.RecommendTitle>오늘의 추천 상품</S.RecommendTitle>
        <S.RecommendCard onClick={() => navigate(`/detail/1`)}>
          <S.RecommendImage src={recommendedProduct.image} alt={recommendedProduct.name} />
          <S.RecommendName>{recommendedProduct.name}</S.RecommendName>
        </S.RecommendCard>
        <S.RecommendDescription>
          {recommendedProduct.description}
        </S.RecommendDescription>
      </S.RecommendSection>
    </S.Container>
  );
};

export default HomePage;
