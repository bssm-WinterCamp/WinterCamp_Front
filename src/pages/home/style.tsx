import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  background: #FFFFFF;
  padding: 32px 20px 140px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`;

export const WelcomeSection = styled.div`
  flex: 1;
`;

export const WelcomeText = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #2C3E50;
  font-family: 'Paperlogy', sans-serif;
  line-height: 1.3;
`;

export const AuthLink = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #FF6B6B;
  font-family: 'Paperlogy', sans-serif;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9CA3AF;
  cursor: pointer;

  &:hover {
    color: #FF6B6B;
  }
`;

export const ChartSection = styled.div`
  margin-bottom: 40px;
`;

export const ChartTitle = styled.h2`
  font-size: 22px;
  font-weight: 800;
  color: #2C3E50;
  font-family: 'Paperlogy', sans-serif;
  margin-bottom: 20px;
`;

export const ChartWrapper = styled.div`
  background: #FFFFFF;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #E5E7EB;
`;

export const Chart = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 200px;
  margin-bottom: 16px;
  gap: 4px;
`;

export const ChartBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 4px;
  height: 100%;
  justify-content: flex-end;
`;

export const BarValue = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: #6B7280;
  font-family: 'Paperlogy', sans-serif;
  white-space: nowrap;
  height: 20px;
`;

export const Bar = styled.div<{ height: number }>`
  width: 100%;
  height: ${props => props.height}px;
  background: #FF6B6B;
  border-radius: 4px 4px 0 0;
`;

export const BarLabel = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: #9CA3AF;
  font-family: 'Paperlogy', sans-serif;
  margin-top: 4px;
`;

export const ChartLegend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
`;

export const LegendDot = styled.div`
  width: 12px;
  height: 12px;
  background: #FF6B6B;
  border-radius: 2px;
`;

export const LegendText = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #6B7280;
  font-family: 'Paperlogy', sans-serif;
`;

export const RecommendSection = styled.div`
  margin-bottom: 24px;
`;

export const RecommendTitle = styled.h2`
  font-size: 22px;
  font-weight: 800;
  color: #2C3E50;
  font-family: 'Paperlogy', sans-serif;
  margin-bottom: 16px;
`;

export const RecommendCard = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #E5E7EB;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #FF6B6B;
    transform: translateY(-2px);
  }
`;

export const RecommendImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const RecommendName = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #2C3E50;
  font-family: 'Paperlogy', sans-serif;
  padding: 16px;
`;

export const RecommendDescription = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #6B7280;
  font-family: 'Paperlogy', sans-serif;
  line-height: 1.6;
`;
