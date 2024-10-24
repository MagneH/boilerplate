import { StyledIcon } from '@styled-icons/styled-icon';
import { LinkWrapper } from './LinkWrapper.tsx';
import { SidebarItemLi } from './SidebarItemLi.tsx';
import { useLocation } from '@tanstack/react-router';

interface Props {
  path: string;
  title: string;
  Icon: StyledIcon;
  closeMenu: () => void;
}

export const SidebarItemLink = ({ path, Icon, title, closeMenu }: Props) => {
  const location = useLocation();
  return (
    <SidebarItemLi $isActive={location.pathname.includes(path)}>
      <LinkWrapper to={path} onClick={closeMenu}>
        <Icon size={24} />
        <span>{title}</span>
      </LinkWrapper>
    </SidebarItemLi>
  );
};
