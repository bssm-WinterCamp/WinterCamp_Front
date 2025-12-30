import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  background: #F5F5F0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 400px;
  background: #FFFFFF;
  border-radius: 16px;
  padding: 48px 32px;
  border: 2px solid #E5E7EB;
  position: relative;
  z-index: 1;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
  color: #2C3E50;
  margin-bottom: 12px;
  font-family: 'Paperlogy', sans-serif;
  letter-spacing: -1px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #6B7280;
  font-family: 'Paperlogy', sans-serif;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: #191F28;
  font-family: 'Paperlogy', sans-serif;
  letter-spacing: -0.3px;
`;

export const Input = styled.input`
  font-size: 18px;
  font-weight: 600;
  padding: 18px 20px;
  border: 2px solid #D1D5DB;
  border-radius: 8px;
  font-family: 'Paperlogy', sans-serif;
  background: #FFFFFF;
  color: #2C3E50;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #FF6B6B;
    background: #FFFFFF;
  }

  &::placeholder {
    color: #9CA3AF;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 20px;
  font-size: 19px;
  font-weight: 800;
  border-radius: 8px;
  background: #FF6B6B;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 60px;
  font-family: 'Paperlogy', sans-serif;

  &:hover {
    background: #FF5252;
  }

  &:active {
    transform: scale(0.98);
  }

  span {
    position: relative;
    z-index: 1;
  }
`;
