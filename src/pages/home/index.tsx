//홈 페이지 화면
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { aiAPI } from '../../api/ai';
import { useUserStore } from '../../store';
import * as S from './style';

const HomePage = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const [userName, setUserName] = useState('guest');
  const [recommendedProduct, setRecommendedProduct] = useState<{
    id: number;
    name: string;
    image: string;
    description: string;
  } | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [noRecommendMessage, setNoRecommendMessage] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const userData = JSON.parse(user);
        setUserName(userData.name || 'guest');

        if (userData.user_id) {
          aiAPI.getRecommendations(userData.user_id)
            .then(response => {
              if (response.message) {
                // 구매 내역이 없는 경우
                setNoRecommendMessage(response.message);
                setRecommendedProduct(null);
                setAnalysis(null);
              } else if (response.recommendations && response.recommendations.length > 0) {
                // 구매 내역이 있는 경우
                setNoRecommendMessage(null);
                if (response.analysis) {
                  setAnalysis(response.analysis);
                }
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
          {user?.role !== 'fisherman' && (
            <S.AuthLink onClick={() => navigate('/register')}>
              어민이세요? 인증하러 가기
            </S.AuthLink>
          )}
        </S.WelcomeSection>
        <S.ProfileIcon onClick={() => navigate('/mypage')}>
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
                <S.Bar height={(data.value / maxValue) * 150} index={index} />
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
        {noRecommendMessage ? (
          <S.NoRecommendMessage>{noRecommendMessage}</S.NoRecommendMessage>
        ) : recommendedProduct ? (
          <>
            {analysis && <S.AnalysisText>{analysis}</S.AnalysisText>}
            <S.RecommendCard onClick={() => navigate(`/detail/${recommendedProduct.id}`)}>
              <S.RecommendImage src={recommendedProduct.image} alt={recommendedProduct.name} />
              <S.RecommendName>{recommendedProduct.name}</S.RecommendName>
            </S.RecommendCard>
            <S.RecommendDescription>
              {recommendedProduct.description}
            </S.RecommendDescription>
          </>
        ) : (
          <S.NoRecommendMessage>추천 상품을 불러오는 중입니다...</S.NoRecommendMessage>
        )}
      </S.RecommendSection>
    </S.Container>
  );
};

export default HomePage;
