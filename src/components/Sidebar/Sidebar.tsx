import { useRef, useState } from 'react';
import styled from 'styled-components';
import { LayoutTextWindowReverse } from '@styled-icons/bootstrap/LayoutTextWindowReverse';
import { Settings } from '@styled-icons/material/Settings';
import { Login } from '@styled-icons/material-outlined/Login';
import { Logout } from '@styled-icons/material-outlined/Logout';
import { House } from '@styled-icons/material/House';
import { useOnClickOutside } from 'usehooks-ts';
import { SidebarItemLink } from './SidebarItemLink.tsx';
import { useAuth } from '../../hooks/useAuth.tsx';
import { SidebarItemButton } from './SidebarItemButton.tsx';
import { breakpoints } from '../../lib/breakpoints.ts';
import { AnimatedBurger } from '../AnimatedBurger.tsx';

export const Sidebar = () => {
  const auth = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);

  const handleLogout = () => {
    auth?.logout();
    handleClose();
  };

  const handleClose = () => {
    // Your custom logic here
    setIsOpen(false);
  };
  useOnClickOutside(ref, handleClose);

  if (auth?.user) {
    return (
      <div ref={ref}>
        <ToggleMenuButton onClick={() => setIsOpen(!isOpen)}>
          <AnimatedBurger isOpen={isOpen} />
        </ToggleMenuButton>
        <Nav $isOpen={isOpen}>
          <NavbarItems>
            <SidebarItemLink
              title="Dashboard"
              Icon={LayoutTextWindowReverse}
              path="/dashboard"
              closeMenu={handleClose}
            />
            <SidebarItemLink title="Settings" Icon={Settings} path="/settings" closeMenu={handleClose} />
            <SidebarItemButton title="Log out" Icon={Logout} onClick={handleLogout} />
          </NavbarItems>
        </Nav>
      </div>
    );
  }

  return (
    <>
      <ToggleMenuButton onClick={() => setIsOpen(!isOpen)}>
        <AnimatedBurger isOpen={isOpen} />
      </ToggleMenuButton>
      <Nav $isOpen={isOpen}>
        <NavbarItems>
          <SidebarItemLink title="Home" Icon={House} path="/" closeMenu={handleClose} />
          <SidebarItemLink title="Log In" Icon={Login} path="/login" closeMenu={handleClose} />
        </NavbarItems>
      </Nav>
    </>
  );
};

const ToggleMenuButton = styled.div`
  display: flex;
  flex-shrink: 0;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: red;
  color: white;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.l}) {
    margin-left: 0;
    position: inherit;
    display: none;
  }
`;

const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 288px;
  border-right: 1px solid #d1d1d1;
  background-color: #fff;
  transition: margin-left 200ms;
  margin-left: ${({ $isOpen }) => ($isOpen ? 0 : '-288px')};
  position: fixed;
  top: 0;

  @media (min-width: ${breakpoints.l}) {
    margin-left: 0;
    position: fixed;
  }
`;

const NavbarItems = styled.ul`
  list-style-type: none;
  height: 100vh;
  padding: 16px;
  margin: 80px 0 0;
`;
