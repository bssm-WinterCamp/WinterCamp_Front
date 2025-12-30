import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: 100vh;
  background: #FFFFFF;
  padding: 24px 20px 140px;
`;

export const Header = styled.div`
  margin-bottom: 24px;
  text-align: center;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #2C5F7E;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Paperlogy', sans-serif;
  padding: 12px 0;
  margin-bottom: 16px;
  min-height: auto;
  box-shadow: none;

  &:hover {
    background: none;
  }

  &:active {
    transform: none;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #2C3E50;
  margin-bottom: 0;
  font-family: 'Paperlogy', sans-serif;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #6B7280;
  font-family: 'Paperlogy', sans-serif;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: #374151;
  font-family: 'Paperlogy', sans-serif;
`;

export const Input = styled.input`
  font-size: 18px;
  font-weight: 500;
  padding: 18px 20px;
  border: 2px solid #D1D5DB;
  border-radius: 8px;
  font-family: 'Paperlogy', sans-serif;
  background: #FFFFFF;
  color: #2C3E50;
  transition: all 0.2s ease;
  min-height: 56px;

  &:focus {
    outline: none;
    border-color: #2C5F7E;
  }

  &::placeholder {
    color: #9CA3AF;
  }
`;

export const Select = styled.select`
  font-size: 18px;
  font-weight: 600;
  padding: 18px 20px;
  border: 2px solid #D1D5DB;
  border-radius: 8px;
  font-family: 'Paperlogy', sans-serif;
  background: #FFFFFF;
  color: #2C3E50;
  transition: all 0.2s ease;
  cursor: pointer;
  min-height: 56px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L8 8.5L15 1.5' stroke='%232C3E50' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 20px center;
  padding-right: 50px;

  &:focus {
    outline: none;
    border-color: #2C5F7E;
  }

  option {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 16px;
  padding: 20px;
  font-size: 20px;
  font-weight: 800;
  border-radius: 12px;
  min-height: 60px;
  background: #FF6B6B;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  font-family: 'Paperlogy', sans-serif;

  &:hover {
    background: #FF5252;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ImageUploadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleImageUploadLabel = styled.label`
  display: block;
  cursor: pointer;
`;

export const CircleUploadPlaceholder = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid #E5E7EB;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const CircleUploadText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #9CA3AF;
  font-family: 'Paperlogy', sans-serif;
  text-align: center;
`;

export const CircleImagePreview = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid #E5E7EB;
`;

export const CirclePreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageInput = styled.input`
  display: none;
`;
