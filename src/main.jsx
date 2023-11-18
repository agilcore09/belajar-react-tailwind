import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Login/Register';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },

  {
    path: '/register',
    element: <Register />
  },

  {
    path: '*',
    element: <h1>Telang</h1>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
