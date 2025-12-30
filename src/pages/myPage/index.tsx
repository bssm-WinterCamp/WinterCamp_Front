import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { fishermanAPI } from '../../api/fisherman';
import { useUserStore } from '../../store';
import * as S from './style';

const MyPage = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const [profileData, setProfileData] = useState({
    group: '',
    region: '',
    name: '',
    phoneNumber: ''
  });
  const [editData, setEditData] = useState({
    group: '',
    region: '',
    name: '',
    phoneNumber: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        try {
          setIsLoading(true);
          const profile = await fishermanAPI.getProfile("1");
          setProfileData({
            group: profile.group,
            region: profile.region,
            name: profile.name,
            phoneNumber: profile.phoneNumber
          });
        } catch (error) {
          console.error('Failed to fetch profile:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchProfile();
  }, [user]);

  const handleEdit = () => {
    setEditData({
      group: profileData.group,
      region: profileData.region,
      name: profileData.name,
      phoneNumber: profileData.phoneNumber
    });
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = async () => {
    try {
      await fishermanAPI.updateProfile("1", {
        ...editData,
        image: "" // 이미지는 일단 비워두기
      });
      
      setProfileData(editData);
      setIsEditing(false);
      alert('프로필이 수정되었습니다!');
    } catch (error) {
      alert('프로필 수정에 실패했습니다.');
      console.error('Failed to update profile:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!user) {
    return (
      <S.Container>
        <S.LoginPrompt>
          <S.LoginIcon>
            <Icon icon="material-symbols:account-circle" width="120" height="120" color="#9CA3AF" />
          </S.LoginIcon>
          <S.LoginText>로그인이 필요한 서비스입니다</S.LoginText>
          <S.LoginButton onClick={() => navigate('/login')}>
            로그인하기
          </S.LoginButton>
        </S.LoginPrompt>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title></S.Title>
        {!isEditing && !isLoading && (
          <S.EditButton onClick={handleEdit}>편집</S.EditButton>
        )}
      </S.Header>

      {isLoading ? (
        <S.LoadingContainer>
          <S.Spinner />
        </S.LoadingContainer>
      ) : (
        <>
          <S.ProfileSection>
            <S.ProfileIcon>
              <Icon icon="material-symbols:account-circle" width="64" height="64" color="#FFFFFF" />
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
                    name="phoneNumber"
                    value={editData.phoneNumber}
                    onChange={handleChange}
                    placeholder="전화번호"
                  />
                </>
              ) : (
                <>
                  <S.ProfileName>{profileData.name || user.name}님</S.ProfileName>
                  <S.ProfileDetail>{profileData.phoneNumber}</S.ProfileDetail>
                </>
              )}
            </S.ProfileInfo>
          </S.ProfileSection>

          <S.InfoSection>
            <S.InfoRow>
              <S.InfoLabel>소속 어촌</S.InfoLabel>
              {isEditing ? (
                <S.InfoInput
                  name="group"
                  value={editData.group}
                  onChange={handleChange}
                  placeholder="소속 어촌"
                />
              ) : (
                <S.InfoValue>{profileData.group || '-'}</S.InfoValue>
              )}
            </S.InfoRow>
            <S.InfoRow>
              <S.InfoLabel>지역</S.InfoLabel>
              {isEditing ? (
                <S.InfoInput
                  name="region"
                  value={editData.region}
                  onChange={handleChange}
                  placeholder="지역"
                />
              ) : (
                <S.InfoValue>{profileData.region || '-'}</S.InfoValue>
              )}
            </S.InfoRow>
          </S.InfoSection>

          {isEditing && (
            <S.EditButtons>
              <S.CancelButton onClick={handleCancel}>취소</S.CancelButton>
              <S.SaveButton onClick={handleSave}>저장</S.SaveButton>
            </S.EditButtons>
          )}

          <S.MenuSection>
            <S.MenuButton onClick={() => navigate('/write')}>
              <S.MenuIcon>
                <Icon icon="material-symbols:add-circle-outline" width="24" height="24" />
              </S.MenuIcon>
              <S.MenuText>수산물 등록하러 가기</S.MenuText>
              <S.MenuArrow>
                <Icon icon="mdi:chevron-right" width="24" height="24" />
              </S.MenuArrow>
            </S.MenuButton>

            <S.MenuButton onClick={() => navigate('/')}>
              <S.MenuIcon>
                <Icon icon="material-symbols:trending-up" width="24" height="24" />
              </S.MenuIcon>
              <S.MenuText>수산물 평균 가격 보러 가기</S.MenuText>
              <S.MenuArrow>
                <Icon icon="mdi:chevron-right" width="24" height="24" />
              </S.MenuArrow>
            </S.MenuButton>

            <S.MenuButton onClick={() => navigate('/')}>
              <S.MenuIcon>
                <Icon icon="material-symbols:recommend-outline" width="24" height="24" />
              </S.MenuIcon>
              <S.MenuText>추천 상품 보러가기</S.MenuText>
              <S.MenuArrow>
                <Icon icon="mdi:chevron-right" width="24" height="24" />
              </S.MenuArrow>
            </S.MenuButton>
          </S.MenuSection>
        </>
      )}
    </S.Container>
  );
};

export default MyPage;
