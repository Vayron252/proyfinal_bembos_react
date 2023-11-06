import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/normalize.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutPrincipal } from './components/templates/LayoutPrincipal'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPrincipal />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)