import { PageHeading } from '../components/PageHeading.tsx';
import { House } from '@styled-icons/material/House';
import { createFileRoute } from '@tanstack/react-router';

export const Index = () => {
  return (
    <>
      <PageHeading Icon={House} title="Home" />
    </>
  );
};

export const Route = createFileRoute('/')({
  component: Index,
});
