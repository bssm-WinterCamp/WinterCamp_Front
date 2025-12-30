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
  padding: 32px 18px 140px;
  position: relative;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9CA3AF;
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  padding: 18px 20px 18px 60px;
  border: none;
  border-radius: 12px;
  font-family: 'Paperlogy', sans-serif;
  background: #F3F4F6;
  color: #2C3E50;

  &:focus {
    outline: none;
    background: #E5E7EB;
  }

  &::placeholder {
    color: #9CA3AF;
    font-weight: 500;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  overflow-x: auto;
  padding: 4px 0;
  margin: 0 0 24px 0;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryButton = styled.button<{ active?: boolean }>`
  font-size: 15px;
  font-weight: 700;
  padding: ${props => props.active ? '14px 0' : '12px 0'};
  border: ${props => props.active ? 'none' : '2px solid #E5E7EB'};
  background: ${props => props.active ? '#FF6B6B' : '#FFFFFF'};
  color: ${props => props.active ? '#FFFFFF' : '#6B7280'};
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Paperlogy', sans-serif;
  white-space: nowrap;
  flex: 1;
  min-height: auto;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  outline: none;
  
  &:focus {
    outline: none;
  }
`;

export const FilterSection = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

export const DropdownWrapper = styled.div`
  flex: 1;
  min-width: 150px;
  position: relative;
`;

export const CustomDropdown = styled.div<{ disabled?: boolean }>`
  width: 100%;
  padding: 14px 16px;
  font-size: 15px;
  font-weight: 600;
  border: 2px solid #E5E7EB;
  border-radius: 12px;
  background-color: ${props => props.disabled ? '#F3F4F6' : '#FFFFFF'};
  color: ${props => props.disabled ? '#9CA3AF' : '#2C3E50'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s;
  font-family: 'Paperlogy', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  outline: none;

  &:hover {
    border-color: ${props => props.disabled ? '#E5E7EB' : '#FF6B6B'};
  }
  
  &:focus {
    outline: none;
  }
`;

export const DropdownLabel = styled.span<{ disabled?: boolean }>`
  color: ${props => props.disabled ? '#9CA3AF' : '#2C3E50'};
  font-weight: 600;
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
  animation: ${keyframes`
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `} 0.2s ease-out;

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
  padding: 14px 16px;
  font-size: 15px;
  font-weight: 600;
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

  &:first-of-type {
    color: #9CA3AF;
    font-weight: 500;

    &:hover {
      color: #6B7280;
      background: #F9FAFB;
    }
  }
`;

export const ListTitle = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: #2C3E50;
  margin-bottom: 20px;
  font-family: 'Paperlogy', sans-serif;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const ProductCard = styled.div`
  background: #FFFFFF;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid #E5E7EB;
  display: flex;
  flex-direction: column;
`;

export const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NoImageText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F3F4F6;
  color: #9CA3AF;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Paperlogy', sans-serif;
  text-align: center;
  padding: 20px;
`;

export const StatusBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: #FF6B6B;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 8px;
  font-family: 'Paperlogy', sans-serif;
`;

export const ProductInfo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 4px;
  font-family: 'Paperlogy', sans-serif;
`;

export const ProductDetail = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #9CA3AF;
  font-family: 'Paperlogy', sans-serif;
`;

export const ProductDate = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #9CA3AF;
  text-align: right;
  margin-top: 4px;
  font-family: 'Paperlogy', sans-serif;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 22px;
  color: #6B7280;
  font-family: 'Paperlogy', sans-serif;
  font-weight: 600;
  background: #FFFFFF;
  border-radius: 12px;
  grid-column: 1 / -1;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  grid-column: 1 / -1;
  gap: 20px;
`;

export const Spinner = styled.div`
  width: 56px;
  height: 56px;
  border: 5px solid #F3F4F6;
  border-top: 5px solid #FF6B6B;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const LoadingText = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #6B7280;
  font-family: 'Paperlogy', sans-serif;
`;