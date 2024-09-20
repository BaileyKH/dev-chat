import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'

import { Layout } from './components/Layout'
import DashboardLayout from './components/DashboardLayout'

import { Home } from './Pages/Home'
import { Login } from './Pages/Account/Login'
import { Register } from './Pages/Account/Register'
import { Dashboard } from './Pages/Dashboard/Dashboard'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/sign-in/*', element: <Login /> },
      { path: '/register/*', element: <Register /> },
      {
        element: <DashboardLayout />,
        path: 'dashboard',
        children: [
          { path: '/dashboard', element: <Dashboard /> },
        ],
      },
    ],
  },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
