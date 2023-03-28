import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './features/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Page404 from './features/page404/PageNotFound';
import ShoppingCart from './features/ShoppingCart';
import Profile from './features/Profile';

const routers = createBrowserRouter([
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
  {
    path: '/shoppingCart',
    element: <ShoppingCart />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
     <RouterProvider router={routers} />
  </React.StrictMode>,
);
