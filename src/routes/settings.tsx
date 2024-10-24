import { createFileRoute, redirect } from '@tanstack/react-router';
import { Settings } from '../pages/Settings.tsx';

export const Route = createFileRoute('/settings')({
  component: Settings,
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
