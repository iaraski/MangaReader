import { createBrowserRouter } from 'react-router-dom';
import Catalog from '../../pages/catalog';
import Login from '../../pages/Login';
import Main from '../../pages/main';
import Register from '../../pages/register';
import { MainLayout } from '../Layouts/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/Catalog', element: <Catalog /> },
      { path: '/Register', element: <Register /> },
      { path: '/Login', element: <Login /> },
    ],
  },
]);
