import { ScrollToTop } from '../../components/ScrollToTop'
import { CarroComprasProvider } from '../../context/CarroComprasContext'
import { CarroCompras } from '../CarroCompras'
import { ContenedorAppCompra } from '../ContenedorAppCompra'

export const LayoutCompra = () => {
    return (
        <>
            <ScrollToTop />
            <CarroCompras />
            <ContenedorAppCompra />
        </>
    )
}