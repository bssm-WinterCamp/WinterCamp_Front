import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  background: #FFFFFF;
  padding-bottom: 140px;
`;

export const ContentWrapper = styled.div`
  padding: 24px 20px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #FF6B6B;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Paperlogy', sans-serif;
  padding: 0;
  margin-bottom: 20px;
  min-height: auto;
  display: block;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #E5E7EB;
`;

export const ProductTitle = styled.h2`
  font-size: 24px;
  font-weight: 800;
  color: #2C3E50;
  font-family: 'Paperlogy', sans-serif;
  flex: 1;
`;

export const StatusBadge = styled.div`
  background: #FF6B6B;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 8px;
  font-family: 'Paperlogy', sans-serif;
  white-space: nowrap;
  margin-left: 12px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 32px;
  object-fit: cover;
`;

export const PriceSection = styled.div`
  margin-bottom: 40px;
`;

export const PriceLabel = styled.h3`
  font-size: 26px;
  font-weight: 800;
  color: #2C3E50;
  margin-bottom: 12px;
  font-family: 'Paperlogy', sans-serif;
`;

export const QuantityText = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #FF6B6B;
  margin-bottom: 12px;
  font-family: 'Paperlogy', sans-serif;
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UnitLabel = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #6B7280;
  font-family: 'Paperlogy', sans-serif;
`;

export const PriceValue = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: #2C3E50;
  font-family: 'Paperlogy', sans-serif;
`;

export const InfoSection = styled.div`
  border-left: 4px solid #FF6B6B;
  padding-left: 20px;
  margin-left: 4px;
  margin-bottom: 40px;
`;

export const InfoTitle = styled.h3`
  font-size: 26px;
  font-weight: 800;
  color: #2C3E50;
  margin-bottom: 24px;
  font-family: 'Paperlogy', sans-serif;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const InfoLabel = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #6B7280;
  font-family: 'Paperlogy', sans-serif;
`;

export const InfoValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #2C3E50;
  font-family: 'Paperlogy', sans-serif;
`;

export const PhoneLabel = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #FF6B6B;
  font-family: 'Paperlogy', sans-serif;
`;

export const PhoneValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #2C3E50;
  font-family: 'Paperlogy', sans-serif;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 24px;
  color: #6B7280;
  font-family: 'Paperlogy', sans-serif;
  font-weight: 700;
`;

export const ContactButton = styled.div`
  width: 100%;
  background: #FFB5B5;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
`;

export const ContactIcon = styled.div`
  font-size: 32px;
  color: #FFFFFF;
  font-weight: 700;
`;

export const ContactText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #FFFFFF;
  text-align: center;
  font-family: 'Paperlogy', sans-serif;
`;
