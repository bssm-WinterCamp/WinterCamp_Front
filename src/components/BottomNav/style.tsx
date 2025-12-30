import styled from '@emotion/styled';

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 480px;
  margin: 0 auto;
  background: #FFFFFF;
  border-top: 2px solid #F0F0F0;
  display: flex;
  justify-content: space-around;
  padding: 14px 16px 24px;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
`;

export const NavItem = styled.button<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 10px;
  flex: 1;
  min-height: auto;
`;

export const NavLabel = styled.div<{ active?: boolean }>`
  font-size: 13px;
  font-weight: ${props => props.active ? '700' : '500'};
  color: ${props => props.active ? '#FF6B6B' : '#CCCCCC'};
  font-family: 'Paperlogy', sans-serif;
  margin-top: 2px;
`;
