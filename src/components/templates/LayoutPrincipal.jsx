import { Outlet } from 'react-router-dom'
import { Header } from "../Header"
import { Footer } from "../Footer"
import { ScrollToTop } from '../../components/ScrollToTop'
import { CarroComprasProvider } from '../../context/carroComprasContext'

export const LayoutPrincipal = () => {
    return (
        <>
            <ScrollToTop />
            <CarroComprasProvider>
                <Header />
                <main className="principal">
                    <div className="contenedor__boton__sugerencias">
                        <button className="boton__sugerencias">
                            <i className="sugerencias__imagen fa-regular fa-face-grin-wink"></i>
                            <p className="sugerencias__texto">Sugerencias</p>
                        </button>
                    </div>
                    <Outlet />
                </main>
            </CarroComprasProvider>
            <Footer />
        </>
    )
}
