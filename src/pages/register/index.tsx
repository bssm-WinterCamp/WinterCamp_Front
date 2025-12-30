import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fishermanAPI } from '../../api/fisherman';
import * as S from './style';

const REGIONS = ['서울', '부산', '인천', '제주', '여수', '통영', '목포'];

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }

    try {
      await fishermanAPI.register({
        name: formData.name,
        phone_number: formData.phone,
        region: formData.region,
        password: formData.password
      });
      alert('어민 등록이 완료되었습니다!');
      navigate('/login');
    } catch (error) {
      alert('등록에 실패했습니다. 다시 시도해주세요.');
      console.error('Register error:', error);
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onClick={() => navigate('/login')}>← 뒤로</S.BackButton>
        <S.Title>어민 등록</S.Title>
        <S.Subtitle>어민 정보를 입력해주세요</S.Subtitle>
      </S.Header>

      <S.Form onSubmit={handleSubmit}>
        <S.InputGroup>
          <S.Label>이름</S.Label>
          <S.Input
            type="text"
            name="name"
            placeholder="홍길동"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </S.InputGroup>

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
          <S.Label>지역</S.Label>
          <S.Select
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
          >
            <option value="">지역을 선택하세요</option>
            {REGIONS.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </S.Select>
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

        <S.InputGroup>
          <S.Label>비밀번호 확인</S.Label>
          <S.Input
            type="password"
            name="confirmPassword"
            placeholder="비밀번호를 다시 입력하세요"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </S.InputGroup>

        <S.SubmitButton type="submit">등록하기</S.SubmitButton>
      </S.Form>
    </S.Container>
  );
};

export default RegisterPage;
