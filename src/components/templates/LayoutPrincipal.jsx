import { Outlet } from 'react-router-dom'
import { Header } from "../Header"
import { Footer } from "../Footer"
import {HomePromoSocial} from "../HomePromoSocial"

export const LayoutPrincipal = () => {
    return (
        <>
            <Header />
            <main className="principal">
                <Outlet />
                <HomePromoSocial/>
            </main>
            <Footer />
        </>
    )
}
