import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', formData);
    // TODO: API call
    navigate('/');
  };

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.Title>로그인</S.Title>
          <S.Subtitle>어민 수산물 직거래</S.Subtitle>
        </S.Header>

        <S.Form onSubmit={handleSubmit}>
          <S.InputGroup>
            <S.Label>전화번호</S.Label>
            <S.Input
              type="tel"
              name="phone"
              placeholder="010-1234-5678"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>비밀번호</S.Label>
            <S.Input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </S.InputGroup>

          <S.SubmitButton type="submit"><span>로그인</span></S.SubmitButton>
        </S.Form>
      </S.Content>
    </S.Container>
  );
};

export default LoginPage;
