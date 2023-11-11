import { useCarroCompras } from "../hooks/useCarroCompras";

export const CarroCompras = () => {
    const { mostrarCarro, setMostrarCarro } = useCarroCompras();

    return (
        <div className={`contenedor__carro${mostrarCarro ? ' mostrar' : ''}`}>
            <div className={`carro__compras${mostrarCarro ? ' mostrar' : ''}`}>
                <h1>Soy el Carro</h1>
                <button onClick={() => setMostrarCarro(false)}>Cerrar Carro</button>
            </div>
        </div>
    )
}
