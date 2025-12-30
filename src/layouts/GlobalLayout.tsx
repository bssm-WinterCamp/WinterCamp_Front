import { Outlet, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import BottomNav from '../components/BottomNav';

const MobileContainer = styled.div`
  width: 100%;
  max-width: 480px;
  min-height: 100vh;
  margin: 0 auto;
  background: #FFFFFF;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 480px) {
    width: 100vw;
    max-width: 100vw;
    box-shadow: none;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 0;
`;

const GlobalLayout = () => {
  const location = useLocation();
  const hideNavPaths = ['/detail', '/login'];
  const shouldHideNav = hideNavPaths.some(path => location.pathname.startsWith(path));

  return (
    <MobileContainer>
      <ContentArea>
        <Outlet />
      </ContentArea>
      {!shouldHideNav && <BottomNav />}
    </MobileContainer>
  );
};

export default GlobalLayout;
