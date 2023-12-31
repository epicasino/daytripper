import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import Map from './pages/Map.jsx';
import Login from './pages/Login.jsx';
import Trips from './pages/Trips.jsx';
import Register from './pages/Register.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: '',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/map',
        element: <Map />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/trips',
        element: <Trips />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/contact',
        element: <Contact />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
