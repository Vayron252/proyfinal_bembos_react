import { useLoaderData } from "react-router-dom"
import { obtenerProductoxNombre } from "../data/bembosAPI"

export const loader = ({ params }) => {
  const { opcion, producto } = params;
  const productoConsultado = obtenerProductoxNombre(producto);
  return productoConsultado;
}

export const ProductoCompra = ({ }) => {
  const producto = useLoaderData();

  return (
    <div className="">
      <h1>
        {JSON.stringify(producto)}
      </h1>
    </div>
  )
}