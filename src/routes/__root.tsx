import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { IAuthContext } from '../components/Login/AuthContext.tsx';
import { Sidebar } from '../components/Sidebar/Sidebar.tsx';
import styled from 'styled-components';
import { breakpoints } from '../lib/breakpoints.ts';

interface MyRouterContext {
  // The ReturnType of your useAuth hook or the value of your AuthContext
  auth: IAuthContext | undefined;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <AppWrapper>
        <Sidebar />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </AppWrapper>
      <TanStackRouterDevtools />
    </>
  ),
});

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 100%;
`;

const ContentWrapper = styled.main`
  flex-direction: column;
  padding: 24px 24px 150px;
  width: 100%;

  @media (min-width: ${breakpoints.m}) {
    padding: 72px 72px 150px;
  }

  @media (min-width: ${breakpoints.l}) {
    margin-left: 288px;
    padding-bottom: 0;
  }
`;
