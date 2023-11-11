import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Sugerencias } from '../components/Sugerencias'
import { Footer } from "./Footer"
import { useCarroCompras } from '../hooks/useCarroCompras'

export const ContenedorApp = () => {
    const { mostrarCarro } = useCarroCompras();

    return (
        <div className={`${mostrarCarro ? ' fijar__carro' : ''}`}>
            <Header />
            <main className="principal">
                <Sugerencias />
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
