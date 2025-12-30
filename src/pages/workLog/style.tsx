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
  padding: 4px 6px;
  margin: 0 -6px 24px -6px;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryButton = styled.button<{ active?: boolean }>`
  font-size: 15px;
  font-weight: 700;
  padding: ${props => props.active ? '14px 26px' : '12px 24px'};
  border: ${props => props.active ? 'none' : '2px solid #E5E7EB'};
  background: ${props => props.active ? '#FF6B6B' : '#FFFFFF'};
  color: ${props => props.active ? '#FFFFFF' : '#6B7280'};
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Paperlogy', sans-serif;
  white-space: nowrap;
  flex-shrink: 0;
  min-height: auto;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
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
  border: 2px dashed #D1D5DB;
  border-radius: 12px;
`;
