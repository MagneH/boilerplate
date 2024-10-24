import { createFileRoute, redirect } from '@tanstack/react-router';
import { Dashboard } from '../pages/Dashboard.tsx';

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
  beforeLoad: ({ context, location }) => {
    if (!context.auth?.user) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
});
