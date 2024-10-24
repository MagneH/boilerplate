import { useLocalStorage } from '../../hooks/useLocalStorage.tsx';
import { ReactNode, useMemo } from 'react';
import { AuthContext } from './AuthContext.tsx';
import { router } from '../../router.tsx';

interface Props {
  children: ReactNode | ReactNode[];
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useLocalStorage('user', null);

  // call this function when you want to authenticate the user
  const login = useMemo(
    () => async (data: unknown) => {
      setUser(data);
      const { searchParams } = new URL(window.location.href);
      router.history.push((searchParams as unknown as { redirect?: string }).redirect || '/dashboard');
    },
    [setUser],
  );

  // call this function to sign out logged in user
  const logout = useMemo(
    () => () => {
      setUser(null);
      router.history.push('/');
    },
    [setUser],
  );

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
