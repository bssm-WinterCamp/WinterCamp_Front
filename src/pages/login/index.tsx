import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../../api/auth';
import { useUserStore } from '../../store';
import * as S from './style';

const LoginPage = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const [formData, setFormData] = useState({
    id: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await authAPI.login({
        id: formData.id,
        pw: formData.password
      });
      
      // Zustand store에 사용자 정보 저장
      setUser({
        id: response.id,
        name: response.name,
        phoneNumber: response.phoneNumber,
        role: response.role,
        fisherman_id: response.fisherman_id
      });
      
      alert(`환영합니다, ${response.name}님!`);
      navigate('/');
    } catch (error) {
      alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.');
      console.error('Login error:', error);
    }
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
            <S.Label>아이디</S.Label>
            <S.Input
              type="text"
              name="id"
              placeholder="아이디를 입력하세요"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>비밀번호</S.Label>
            <S.Input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
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
