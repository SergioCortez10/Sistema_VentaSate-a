import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Estaditicas from './pages/Estaditicas';
import Factura from './pages/Factura';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Login />
  },
  {
    path:'/home',
    element: <Home />
  },
  {
    path:'/home/productos',
    element: <Productos />
  },
  {
    path:'/home/estadisticas',
    element: <Estaditicas />
  },
  {
    path:'/home/productos/factura',
    element: <Factura />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
