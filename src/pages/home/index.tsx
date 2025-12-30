
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { aiAPI } from '../../api/ai';
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

  const chartData = [
    { month: '1월', value: 6.1 },
    { month: '2월', value: 7.0 },
    { month: '3월', value: 6.2 },
    { month: '4월', value: 6.3 },
    { month: '5월', value: 5.8 },
    { month: '6월', value: 7.5 },
    { month: '7월', value: 6.3 },
    { month: '8월', value: 6.0 },
    { month: '9월', value: 6.2 },
    { month: '10월', value: 6.1 }
  ];

  const maxValue = 8.0; // 그래프 최대값 고정

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
                <S.Bar height={(data.value / maxValue) * 150} />
                <S.BarLabel>{data.month}</S.BarLabel>
              </S.ChartBar>
            ))}
          </S.Chart>
          <S.ChartLegend>
            <S.LegendDot />
            <S.LegendText>평균단가 (원/kg)</S.LegendText>
          </S.ChartLegend>
        </S.ChartWrapper>
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
