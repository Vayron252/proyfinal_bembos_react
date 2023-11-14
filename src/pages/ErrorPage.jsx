import { useRouteError, Link } from "react-router-dom"
import image_error from '../img/hamburguesa_404.jpg'
import "../styles/error.css"

export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="error__pagina__contenedor">
            <h1 className="error__pagina__titulo">Bembos, lamenta lo ocurrido...</h1>
            <div className="error__pagina__contenido">
                <div className="error__pagina__contenedor__imagen">
                    <img src={image_error} alt="hamburguesa error" />
                </div>
                <div className="error__pagina__mensajes">
                    <p className="error__mensajes__cabecera">Hubo un error...</p>
                    <p className="error__mensajes__detalle">{error.statusText || error.message}</p>
                </div>
            </div>
            <div className="error__pagina__opcion">
                <Link className="error__pagina__volver" to={'/'}>Ir al inicio</Link>
            </div>
        </div>
    )
}
