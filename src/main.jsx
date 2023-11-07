import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/normalize.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutPrincipal } from './components/templates/LayoutPrincipal'
import { Index, loader as indexLoader } from './pages/Index'
import { Menu, loader as menuLoader } from './pages/Menu'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPrincipal />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: indexLoader
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)