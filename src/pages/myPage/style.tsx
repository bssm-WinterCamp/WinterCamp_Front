import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  background: #FFFFFF;
  padding: 20px 20px 160px;
`;

export const Header = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
  color: #2C3E50;
  font-family: 'Paperlogy', sans-serif;
`;

export const EditButton = styled.button`
  padding: 14px 28px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 12px;
  background: #FFFFFF;
  color: #FF6B6B;
  border: 2px solid #FF6B6B;
  cursor: pointer;
  font-family: 'Paperlogy', sans-serif;
`;

export const ProfileSection = styled.div`
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%);
  border-radius: 16px;
  padding: 24px 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ProfileIcon = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileInfo = styled.div`
  flex: 1;
`;

export const ProfileName = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 12px;
  font-family: 'Paperlogy', sans-serif;
`;

export const ProfileDetail = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 6px;
  font-family: 'Paperlogy', sans-serif;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const EditInput = styled.input`
  font-size: 20px;
  font-weight: 600;
  padding: 16px 20px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  font-family: 'Paperlogy', sans-serif;
  background: rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  margin-bottom: 10px;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #FFFFFF;
    background: rgba(255, 255, 255, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const EditSelect = styled.select`
  font-size: 20px;
  font-weight: 600;
  padding: 16px 20px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  font-family: 'Paperlogy', sans-serif;
  background: rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 18px center;
  padding-right: 50px;

  &:focus {
    outline: none;
    border-color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0.3);
  }

  option {
    background: #FF6B6B;
    color: #FFFFFF;
  }
`;

export const EditButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: 18px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 12px;
  background: #F3F4F6;
  color: #6B7280;
  border: none;
  cursor: pointer;
  font-family: 'Paperlogy', sans-serif;
`;

export const SaveButton = styled.button`
  flex: 1;
  padding: 18px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 12px;
  background: #FF6B6B;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  font-family: 'Paperlogy', sans-serif;
`;

export const StatsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 24px;
`;

export const StatCard = styled.div`
  background: #F9FAFB;
  border: 2px solid #E5E7EB;
  border-radius: 16px;
  padding: 24px 20px;
  text-align: center;
`;

export const StatLabel = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #6B7280;
  margin-bottom: 10px;
  font-family: 'Paperlogy', sans-serif;
`;

export const StatValue = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: #FF6B6B;
  font-family: 'Paperlogy', sans-serif;
`;

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MenuItem = styled.button`
  background: #F9FAFB;
  border: 2px solid #E5E7EB;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  text-align: left;
`;

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const MenuText = styled.div`
  flex: 1;
  font-size: 22px;
  font-weight: 700;
  color: #2C3E50;
  font-family: 'Paperlogy', sans-serif;
`;

export const MenuArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const LoginPrompt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
`;

export const LoginIcon = styled.div`
  font-size: 80px;
  margin-bottom: 24px;
`;

export const LoginText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #6B7280;
  margin-bottom: 32px;
  font-family: 'Paperlogy', sans-serif;
`;

export const LoginButton = styled.button`
  padding: 18px 40px;
  font-size: 18px;
  font-weight: 800;
  border-radius: 12px;
  min-height: 56px;
`;
