import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Contexto } from "../CartContext/CartContext"

const ItemDetail = ({nombre, id, descripcion, stock, precio, imagen}) =>{
    const [eliminar, setEliminar] = useState(false);

    const {agregarItem} = useContext(Contexto);

    const onAdd = (quantity) =>{
        agregarItem(id, nombre, precio, quantity, imagen);
        setEliminar(true);
    }

    return(
        <div className="contenedorItem">
            <div className="contenedorImagen">
                <h3>{nombre}</h3>
                <img src={imagen} alt={id} />
            </div>
            <div className="contenedorCol2">
                <div className="contenedorDetalle">
                    <div className="contenedorDescripcionDetail">
                        <p>{descripcion}</p>
                    </div>
                    <span>Precio:${precio}</span>
                    <span>Stock:{stock}</span>
                    <div className="confirmarContainer">
                        {eliminar ? <Link to={"/cart"} className="botonPostConfirmar">Confirmar Compra</Link> : <ItemCount stock={stock} initial={1} onAdd={onAdd} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;