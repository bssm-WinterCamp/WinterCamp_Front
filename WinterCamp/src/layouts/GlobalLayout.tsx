import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const MobileContainer = styled.div`
  width: 100vw;
  max-width: 360px;
  height: 100vh;
  aspect-ratio: 9 / 19.5;
  margin: 0 auto;
  background: #FFFFFF;
  overflow-y: auto;
  border: 1px solid #E0E0E0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 360px) {
    width: 100vw;
    max-width: 100vw;
    border: none;
    box-shadow: none;
  }
`;

const GlobalLayout = () => {
  return (
    <MobileContainer>
      <Outlet />
    </MobileContainer>
  );
};

export default GlobalLayout;
