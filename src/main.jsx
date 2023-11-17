import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/normalize.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LayoutPrincipal } from './components/templates/LayoutPrincipal'
import { LayoutCompra } from './components/templates/LayoutCompra'
import { Index, loader as indexLoader } from './pages/Index'
import { Menu, loader as menuLoader } from './pages/Menu'
import { MenuOpciones, loader as menuOpcionesLoader } from './pages/MenuOpciones'
import { Promociones, loader as promocionesLoader } from './pages/Promociones'
import { Beneficios , loader as beneficiosLoader } from './pages/Beneficios'
import { MiCuenta } from './pages/MiCuenta'
import { Locales, loader as localesLoader } from './pages/Locales'
import { ZonasReparto } from './pages/ZonasReparto'
import { Nosotros } from './pages/Nosotros'
import { TerminosCondiciones } from './pages/TerminosCondiciones'
import { ErrorPage } from './pages/ErrorPage'
import { ProductoCompra, loader as productoCompraLoader } from './pages/ProductoCompra'
import { CarroComprasProvider } from './context/CarroComprasContext'




const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPrincipal />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: indexLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/menu/:categoria',
        element: <MenuOpciones />,
        loader: menuOpcionesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/promociones/delivery-hamburguesas',
        element: <Promociones />,
        loader: promocionesLoader,
        errorElement: <ErrorPage />
      },

      {
        path: '/beneficios/',
        element: <Beneficios/>,
        loader: beneficiosLoader, 
        errorElement: <ErrorPage />
      },
      {
        path: '/customer/account/login',
        element: <MiCuenta />,
        errorElement: <ErrorPage />
      },
      {
        path: '/locales',
        element: <Locales />,
        loader: localesLoader,
        errorElement: <ErrorPage />
      },
      {
        path: '/zonas-de-reparto',
        element: <ZonasReparto />,
        errorElement: <ErrorPage />
      },
      {
        path: '/nosotros/:ruta',
        element: <Nosotros />,
        errorElement: <ErrorPage />
      },
      {
        path: '/terminos-y-condiciones-de-promociones',
        element: <TerminosCondiciones/>,
        errorElement: <ErrorPage />
      }
    ],
  },
  {
    path: '/menu/:categoria/:producto',
    element: <LayoutCompra />,
    children: [
      {
        index: true,
        element: <ProductoCompra />,
        loader: productoCompraLoader,
        errorElement: <ErrorPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarroComprasProvider>
      <RouterProvider router={router} />
    </CarroComprasProvider>
  </React.StrictMode>,
)