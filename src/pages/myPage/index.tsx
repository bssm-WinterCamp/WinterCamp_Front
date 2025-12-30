import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const REGIONS = ['서울', '부산', '인천', '제주', '여수', '통영', '목포'];

const MyPage = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data
  const [userData, setUserData] = useState({
    name: '김바다',
    phone: '010-1234-5678',
    region: '부산',
    totalSales: 15,
    totalRevenue: 1250000
  });

  const [editData, setEditData] = useState({
    name: userData.name,
    phone: userData.phone,
    region: userData.region
  });

  const handleEdit = () => {
    setEditData({
      name: userData.name,
      phone: userData.phone,
      region: userData.region
    });
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    setUserData({
      ...userData,
      ...editData
    });
    setIsEditing(false);
    alert('프로필이 수정되었습니다!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>마이페이지</S.Title>
        {!isEditing && (
          <S.EditButton onClick={handleEdit}>편집</S.EditButton>
        )}
      </S.Header>

      <S.ProfileSection>
        <S.ProfileIcon>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </S.ProfileIcon>
        <S.ProfileInfo>
          {isEditing ? (
            <>
              <S.EditInput
                name="name"
                value={editData.name}
                onChange={handleChange}
                placeholder="이름"
              />
              <S.EditInput
                name="phone"
                value={editData.phone}
                onChange={handleChange}
                placeholder="전화번호"
              />
              <S.EditSelect
                name="region"
                value={editData.region}
                onChange={handleChange}
              >
                {REGIONS.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </S.EditSelect>
            </>
          ) : (
            <>
              <S.ProfileName>{userData.name}</S.ProfileName>
              <S.ProfileDetail>{userData.phone}</S.ProfileDetail>
              <S.ProfileDetail>{userData.region}</S.ProfileDetail>
            </>
          )}
        </S.ProfileInfo>
      </S.ProfileSection>

      {isEditing && (
        <S.EditButtons>
          <S.CancelButton onClick={handleCancel}>취소</S.CancelButton>
          <S.SaveButton onClick={handleSave}>저장</S.SaveButton>
        </S.EditButtons>
      )}

      <S.StatsSection>
        <S.StatCard>
          <S.StatLabel>총 판매</S.StatLabel>
          <S.StatValue>{userData.totalSales}건</S.StatValue>
        </S.StatCard>
        <S.StatCard>
          <S.StatLabel>총 수익</S.StatLabel>
          <S.StatValue>{userData.totalRevenue.toLocaleString()}원</S.StatValue>
        </S.StatCard>
      </S.StatsSection>

      <S.MenuSection>
        <S.MenuItem onClick={() => navigate('/work-log')}>
          <S.MenuIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M9 12H15M9 16H15" stroke="#4E5968" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </S.MenuIcon>
          <S.MenuText>조업 기록</S.MenuText>
          <S.MenuArrow>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="#8B95A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </S.MenuArrow>
        </S.MenuItem>

        <S.MenuItem onClick={() => navigate('/write')}>
          <S.MenuIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="#4E5968" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="#4E5968" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </S.MenuIcon>
          <S.MenuText>수산물 등록</S.MenuText>
          <S.MenuArrow>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="#8B95A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </S.MenuArrow>
        </S.MenuItem>

        <S.MenuItem onClick={() => alert('준비중입니다')}>
          <S.MenuIcon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z" stroke="#4E5968" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#4E5968" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </S.MenuIcon>
          <S.MenuText>설정</S.MenuText>
          <S.MenuArrow>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="#8B95A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </S.MenuArrow>
        </S.MenuItem>
      </S.MenuSection>
    </S.Container>
  );
};

export default MyPage;
