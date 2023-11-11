import { ScrollToTop } from '../../components/ScrollToTop'
import { CarroComprasProvider } from '../../context/CarroComprasContext'
import { CarroCompras } from '../CarroCompras'
import { ContenedorApp } from '../ContenedorApp'

export const LayoutPrincipal = () => {
    return (
        <>
            <ScrollToTop />
            <CarroComprasProvider>
                <CarroCompras />
                <ContenedorApp />
            </CarroComprasProvider>
        </>
    )
}
