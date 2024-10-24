import { StyledIcon } from '@styled-icons/styled-icon';
import { SidebarItemLi } from './SidebarItemLi.tsx';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
  title: string;
  Icon: StyledIcon;
}

export const SidebarItemButton = ({ onClick, Icon, title }: Props) => {
  return (
    <SidebarItem role="button" onClick={onClick}>
      <Icon size={24} />
      <span>{title}</span>
    </SidebarItem>
  );
};

const SidebarItem = styled(SidebarItemLi)`
  padding: 8px;
`;
