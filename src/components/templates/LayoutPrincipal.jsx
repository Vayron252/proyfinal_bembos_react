import { Outlet } from 'react-router-dom'
import { Header } from "../Header"
import { Footer } from "../Footer"

export const LayoutPrincipal = () => {
    return (
        <>
            <Header />
            <main className="principal contenedor">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
