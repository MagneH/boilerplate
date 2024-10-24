import { RouterProvider } from '@tanstack/react-router';

import { useAuth } from './hooks/useAuth.tsx';
import { router } from './router.tsx';

export const App = () => {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
};
