import { Opcion } from "./Opcion"

export const Pregunta = ({ pregunta }) => {
    return (
        <details key={pregunta.nropregunta} className="item__opciones" open>
            <summary className="item__opciones__pregunta">
                <div className="item__opciones__pregunta__contenedor">
                    <span className="item__opciones__pregunta__numeracion">{pregunta.nropregunta}</span>
                    <h3 className="item__opciones__pregunta__titulo">{pregunta.nombrepregunta}</h3>
                </div>
            </summary>
            <div className="item__opciones__respuestas">
                <p className="item__opciones__respuestas__descripcion">{pregunta.descrippregunta}</p>
                <div className="item__opciones__respuestas__contenedor">
                    {pregunta.combinaciones.map(comb => (
                        <Opcion key={comb.nrocomb} comb={comb} />
                    ))}
                </div>
            </div>
        </details>
    )
}
