import { useParams } from "react-router-dom"

export const ProductoCompra = ({ }) => {
    const param = useParams(); 
    console.log(param);

  return (
    <div className="">
        <h1>
            soy e l loproducto
        </h1>
    </div>
  )
}