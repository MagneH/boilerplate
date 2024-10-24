import { createContext } from 'react';

export interface IAuthContext {
  user: unknown;
  login: (data: unknown) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);
