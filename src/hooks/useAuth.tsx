import { useContext } from 'react';
import { AuthContext } from '../components/Login/AuthContext';

export const useAuth = () => {
  return useContext(AuthContext);
};
