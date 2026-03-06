import { createBrowserRouter } from 'react-router-dom';
import Catalog from '../../pages/catalog';
import Login from '../../pages/Login';
import Main from '../../pages/main';
import Publish from '../../pages/Publish';
import { MainLayout } from '../Layouts/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Main /> },
      { path: '/Catalog', element: <Catalog /> },
      { path: '/Login', element: <Login /> },
      { path: '/Publish', element: <Publish /> },
    ],
  },
]);
