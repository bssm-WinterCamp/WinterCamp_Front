import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  background: #FFFFFF;
  padding: 20px 20px 160px;
`;

export const Header = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
  color: #2C3E50;
  margin-bottom: 12px;
  font-family: 'Paperlogy', sans-serif;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  color: #6B7280;
  font-family: 'Paperlogy', sans-serif;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ImageUploadWrapper = styled.div`
  width: 100%;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const ImageUploadLabel = styled.label`
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  border: 2px dashed #E5E7EB;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;

  &:hover {
    border-color: #FF6B6B;
    background: #FFF5F5;
  }
`;

export const UploadPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const UploadIcon = styled.div`
  font-size: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9CA3AF;
`;

export const UploadText = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #9CA3AF;
  font-family: 'Paperlogy', sans-serif;
`;

export const ImagePreview = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid #E5E7EB;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ChangeImageButton = styled.button`
  position: absolute;
  bottom: 16px;
  right: 16px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.95);
  color: #FF6B6B;
  border: 2px solid #FF6B6B;
  cursor: pointer;
  font-family: 'Paperlogy', sans-serif;
  transition: all 0.2s ease;

  &:hover {
    background: #FF6B6B;
    color: #FFFFFF;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
  color: #2C3E50;
  font-family: 'Paperlogy', sans-serif;
`;

export const Input = styled.input`
  font-size: 20px;
  font-weight: 500;
  padding: 20px 22px;
  border: 2px solid #E5E7EB;
  border-radius: 12px;
  font-family: 'Paperlogy', sans-serif;
  background: #F3F4F6;
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

export const Select = styled.select`
  font-size: 20px;
  font-weight: 500;
  padding: 20px 22px;
  border: 2px solid #E5E7EB;
  border-radius: 12px;
  font-family: 'Paperlogy', sans-serif;
  background: #F3F4F6;
  color: #2C3E50;
  transition: all 0.2s ease;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236B7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 22px center;
  padding-right: 50px;

  &:focus {
    outline: none;
    border-color: #FF6B6B;
    background-color: #FFFFFF;
  }

  option {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const TextArea = styled.textarea`
  font-size: 20px;
  font-weight: 500;
  padding: 20px 22px;
  border: 2px solid #E5E7EB;
  border-radius: 12px;
  font-family: 'Paperlogy', sans-serif;
  background: #F3F4F6;
  color: #2C3E50;
  transition: all 0.2s ease;
  resize: vertical;
  min-height: 120px;
  line-height: 1.6;

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
  margin-top: 12px;
  padding: 22px;
  font-size: 24px;
  font-weight: 800;
  border-radius: 12px;
  background: #FF6B6B;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Paperlogy', sans-serif;

  &:hover {
    background: #FF5252;
  }

  &:active {
    transform: scale(0.98);
  }
  
  &:disabled {
    background: #D1D5DB;
    cursor: not-allowed;
    
    &:hover {
      background: #D1D5DB;
    }
    
    &:active {
      transform: none;
    }
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const ButtonSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #FFFFFF;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const CustomDropdown = styled.div<{ disabled?: boolean }>`
  width: 100%;
  padding: 18px 20px;
  font-size: 20px;
  font-weight: 600;
  border: 2px solid #E5E7EB;
  border-radius: 12px;
  background-color: ${props => props.disabled ? '#F9FAFB' : '#F3F4F6'};
  color: ${props => props.disabled ? '#9CA3AF' : '#2C3E50'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s;
  font-family: 'Paperlogy', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  outline: none;
  min-height: 60px;

  &:hover {
    border-color: ${props => props.disabled ? '#E5E7EB' : '#FF6B6B'};
    background: ${props => props.disabled ? '#F9FAFB' : '#FFFFFF'};
  }
  
  &:focus {
    outline: none;
  }
`;

export const DropdownLabel = styled.span`
  color: #2C3E50;
  font-weight: 500;
`;

export const DropdownArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6B7280;
`;

export const DropdownList = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: #FFFFFF;
  border: 2px solid #E5E7EB;
  border-radius: 12px;
  max-height: 280px;
  overflow-y: auto;
  z-index: 100;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  animation: ${fadeIn} 0.2s ease-out;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #F3F4F6;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #D1D5DB;
    border-radius: 10px;

    &:hover {
      background: #9CA3AF;
    }
  }
`;

export const DropdownItem = styled.div<{ active?: boolean }>`
  padding: 18px 20px;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Paperlogy', sans-serif;
  color: ${props => props.active ? '#FF6B6B' : '#2C3E50'};
  background: ${props => props.active ? '#FFF5F5' : '#FFFFFF'};
  cursor: pointer;
  transition: all 0.15s;
  border-bottom: 1px solid #F3F4F6;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #FFF5F5;
    color: #FF6B6B;
  }
`;
