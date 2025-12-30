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
  padding: 15px 15px 10px 15px;
  border-radius: 12px;
  border: 1px solid #E5E7EB;
`;

export const Chart = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  height: 200px;
  margin-bottom: 8px;
  gap: 4px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #F3F4F6;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #D1D5DB;
    border-radius: 3px;

    &:hover {
      background: #9CA3AF;
    }
  }
`;

export const ChartBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
  min-width: 40px;
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

export const Bar = styled.div<{ height: number; index: number; isSelected?: boolean }>`
  width: 100%;
  height: ${props => props.height}px;
  background: ${props => props.isSelected ? '#E03E3E' : '#FF6B6B'};
  border-radius: 4px 4px 0 0;
  animation: slideUp 0.6s ease-out forwards;
  animation-delay: ${props => props.index * 0.05}s;
  transform-origin: bottom;
  opacity: 0;
  transform: scaleY(0);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #E03E3E;
  }

  @keyframes slideUp {
    to {
      opacity: 1;
      transform: scaleY(1);
    }
  }
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
  margin-top: 5px;
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

export const SeafoodTableWrapper = styled.div`
  margin-top: 20px;
  background: #FFFFFF;
  border-radius: 12px;
  border: 1px solid #E5E7EB;
  padding: 20px;
  animation: fadeIn 0.3s ease-in;
  overflow-x: auto;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const TableTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #2C3E50;
  font-family: 'Paperlogy', sans-serif;
  margin-bottom: 16px;
`;

export const SeafoodTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Paperlogy', sans-serif;
  min-width: 500px;
`;

export const TableHeader = styled.thead`
  background-color: #F9FAFB;
`;

export const TableHeaderCell = styled.th`
  padding: 12px 8px;
  text-align: left;
  font-size: 12px;
  font-weight: 700;
  color: #374151;
  border-bottom: 2px solid #E5E7EB;
  white-space: nowrap;

  &:first-of-type {
    padding-left: 0;
    min-width: 80px;
  }

  &:nth-of-type(2) {
    min-width: 90px;
  }

  &:nth-of-type(3) {
    min-width: 70px;
  }

  &:last-of-type {
    padding-right: 0;
    min-width: 140px;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #F3F4F6;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #F9FAFB;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  padding: 12px 8px;
  font-size: 12px;
  font-weight: 500;
  color: #6B7280;
  white-space: nowrap;

  &:first-of-type {
    padding-left: 0;
    font-weight: 600;
    color: #2C3E50;
  }

  &:last-of-type {
    padding-right: 0;
  }
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

export const NoRecommendMessage = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #FF6B6B;
  font-family: 'Paperlogy', sans-serif;
  text-align: center;
  padding: 40px 20px;
  background: #FEF2F2;
  border-radius: 12px;
  border: 2px solid #FEE2E2;
`;

export const AnalysisText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #059669;
  font-family: 'Paperlogy', sans-serif;
  padding: 12px 16px;
  background: #ECFDF5;
  border-radius: 8px;
  border: 1px solid #D1FAE5;
  margin-bottom: 16px;
  line-height: 1.5;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #E5E7EB;
  border-top-color: #FF6B6B;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
