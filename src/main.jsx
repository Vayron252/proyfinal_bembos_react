import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/normalize.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutPrincipal } from './components/templates/LayoutPrincipal'
import { Index, loader as indexLoader } from './pages/Index'
import { Menu, loader as menuLoader } from './pages/Menu'
import { MenuOpciones, loader as menuOpcionesLoader } from './pages/MenuOpciones'
import { Promociones } from './pages/Promociones'
import { Beneficios } from './pages/Beneficios'
import { MiCuenta } from './pages/MiCuenta'
import { Locales } from './pages/Locales'
import { ZonasReparto } from './pages/ZonasReparto'
import { Nosotros } from './pages/Nosotros'
import { TerminosCondiciones } from './pages/TerminosCondiciones'

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
      },
      {
        path: '/menu/:opcion',
        element: <MenuOpciones />,
        loader: menuOpcionesLoader
      },
      {
        path: '/promociones/delivery-hamburguesas',
        element: <Promociones />
      },
      {
        path: '/beneficios',
        element: <Beneficios />
      },
      {
        path: '/customer/account/login',
        element: <MiCuenta />
      },
      {
        path: '/locales',
        element: <Locales />
      },
      {
        path: '/zonas-de-reparto',
        element: <ZonasReparto />
      },
      {
        path: '/nosotros/como-nacio-bembos',
        element: <Nosotros />
      },

      {
        path: '/nosotros/que-ofrecemos',
        element: <Nosotros />
      },

      {
        path: '/nosotros/creacion-hamburguesas-bembos',
        element: <Nosotros />
      },

      {
        path: '/nosotros/en-la-actualidad',
        element: <Nosotros />
      },

      {
        path: '/terminos-y-condiciones-de-promociones',
        element: <TerminosCondiciones/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)