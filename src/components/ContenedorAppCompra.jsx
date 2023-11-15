import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Sugerencias } from '../components/Sugerencias'
import { Footer } from "./Footer"
import { useCarroCompras } from '../hooks/useCarroCompras'
import { useScreenSize } from '../hooks/useScreenSize'

export const ContenedorAppCompra = () => {
    const { mostrarCarro } = useCarroCompras();
    const { width } = useScreenSize();

    return (
        <div className={`${mostrarCarro ? ' fijar__carro' : ''}`}>
            {width < 992 ? <></> : <Header />}
            <main className={`principal${width < 992 ? ' compra' : ''}`}>
                <Sugerencias />
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}