// app/layouts/MainLayout.tsx
import { Outlet } from 'react-router-dom';
import Navbar from '../../widgets/navbar/ui/navbar';

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
