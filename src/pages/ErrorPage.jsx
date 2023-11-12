import { useRouteError, Link } from "react-router-dom"
import image_error from '../img/hamburguesa_404.jpg'

export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="">
            <h1>Bembos</h1>
            <img src={image_error} alt="hamburguesa error" />
            <Link className="" to={'/'}>
                Volver al inicio
            </Link>
        </div>
    )
}
