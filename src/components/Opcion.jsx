import { useState } from 'react'
import { formatoDosDecimales } from '../utils/utilitarios'

export const Opcion = ({ comb, pregunta, combinaciones, setCombinaciones }) => {
    const [seleccionado, setSeleccionado] = useState(false);
    const [cantidad, setCantidad] = useState(1);
    const [subTotalOpcion, setSubTotalOpcion] = useState(comb.preccomb);

    const handleSelectItem = () => {
        if (!seleccionado) {
            addCombination();
            setSeleccionado(true);
        }
        if (seleccionado) {
            removeCombination();
            setSeleccionado(false);
        }
    }

    const addCombination = () => {
        const combination = {
            nropregunta: pregunta.nropregunta, 
            nrocomb: comb.nrocomb, 
            cant: cantidad, 
            precio: comb.preccomb, 
            subtotcomb: Number.parseFloat(formatoDosDecimales(subTotalOpcion))
        }
        setCombinaciones([...combinaciones, combination])
    }

    const removeCombination = () => {
        const newCombinations = combinaciones.filter(combinat => {
            return combinat.nropregunta != pregunta.nropregunta || combinat.nrocomb != comb.nrocomb
        });
        setCombinaciones(newCombinations);
    }

    const modifyQuantityCombination = (quantity, subtotal) => {
        const newCombinations = combinaciones.map(combinat => {
            if (combinat.nropregunta == pregunta.nropregunta && combinat.nrocomb == comb.nrocomb) {
                combinat.cant = quantity;
                combinat.precio = comb.preccomb;
                combinat.subtotcomb = subtotal;
                return combinat;
            } else {
                return combinat;
            }
        })
        setCombinaciones(newCombinations);
    }

    const handleIncrementQuantity = (quantity) => {
        const newQuantity = cantidad + quantity;
        if (newQuantity <= 0) {
            return;
        }
        setCantidad(newQuantity);
        setSubTotalOpcion(Number.parseFloat(formatoDosDecimales(newQuantity * comb.preccomb)));
        if (seleccionado) {
            modifyQuantityCombination(newQuantity, Number.parseFloat(formatoDosDecimales(newQuantity * comb.preccomb)));
        }
    }

    return (
        <div className={`item__opcion${seleccionado ? ' seleccionado' : ''}`}>
            <div className="item__opcion__contenedor__imagen" onClick={() => handleSelectItem()}>
                <img className="item__opcion__imagen" src={comb.imgcomb} alt="imagen opcion" />
            </div>
            <p className="item__opcion__titulo">{comb.titulocomb}</p>
            <p className="item__opcion__precio">{`S/. ${formatoDosDecimales(subTotalOpcion)}`}</p>
            {comb.titulocomb !== '' ? (
                comb.preccomb !== 0 ? (
                    <div className="item__opcion__operaciones">
                        <button className="item__opcion__decrementar" onClick={() => handleIncrementQuantity(-1)}>-</button>
                        <p className="item__opcion__cantidades">{cantidad}</p>
                        <button className="item__opcion__incrementar" onClick={() => handleIncrementQuantity(1)}>+</button>
                    </div>
                ) : (<></>)
            ) : (<></>)}
        </div>
    )
}
