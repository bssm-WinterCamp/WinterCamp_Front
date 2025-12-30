import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import * as S from './style';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: 'home', label: '홈' },
    { path: '/write', icon: 'write', label: '등록' },
    { path: '/work-log', icon: 'log', label: '조업' },
    { path: '/mypage', icon: 'user', label: '마이' }
  ];

  const renderIcon = (icon: string, active: boolean) => {
    const color = active ? '#FF6B6B' : '#CCCCCC';

    const iconMap: { [key: string]: string } = {
      home: 'material-symbols:home-outline',
      write: 'material-symbols:edit',
      log: 'material-symbols:grid-view',
      user: 'material-symbols:account-circle-outline'
    };

    return <Icon icon={iconMap[icon]} width="34" height="34" color={color} />;
  };

  return (
    <S.Container>
      {navItems.map(item => (
        <S.NavItem
          key={item.path}
          active={location.pathname === item.path}
          onClick={() => navigate(item.path)}
        >
          {renderIcon(item.icon, location.pathname === item.path)}
          <S.NavLabel active={location.pathname === item.path}>
            {item.label}
          </S.NavLabel>
        </S.NavItem>
      ))}
    </S.Container>
  );
};

export default BottomNav;
