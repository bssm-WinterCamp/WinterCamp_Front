import styled from '@emotion/styled';

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
  aspect-ratio: 1;
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
  aspect-ratio: 1;
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
`;
