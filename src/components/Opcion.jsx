import { useState } from 'react'

export const Opcion = ({ comb }) => {
    const [seleccionado, setSeleccionado] = useState(false);

    const handleSelectItem = () => {
        setSeleccionado(!seleccionado);
    }

    return (
        <div className={`item__opcion${seleccionado ? ' seleccionado' : ''}`} onClick={() => handleSelectItem()}>
            <img src={comb.imgcomb} alt="imagen opcion" />
            <p className="item__opcion__titulo">{comb.titulocomb}</p>
            <p className="item__opcion__precio">{comb.preccomb}</p>
        </div>
    )
}
