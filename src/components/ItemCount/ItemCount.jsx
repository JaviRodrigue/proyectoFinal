import React from "react";
import { useState } from "react";
import Swal from "sweetalert";

const ItemCount = ({stock, initial, onAdd}) =>{
    const [contador, setContador] = useState(initial);

    // funcion para aumentar
    const aumentar = () =>{
        if(contador < stock){
            setContador(contador + 1);
        }
    }

    // Funcion para disminuir
    const disminuir = () =>{
        if(contador > 0){
            setContador(contador - 1);
        }
    }

    // Funcion para confirmar compra
    const confirmar = () =>{
        if(contador === 0){
            Swal({
                title:"Advertencia",
                text:"Debe agregar un producto",
                icon:"warning"
            })
        }else{
            Swal({
                title:"succes",
                text:"Se agrego el producto",
                icon:"success"
            })
            onAdd(contador);
        }
    }

    return(
        <>
            <div className="cardContador">
                <button className="btn btn-danger btnResta" onClick={disminuir}>-</button>
                <p className="mostrarNumero">{contador}</p>
                <button className="btn btn-primary btnSuma" onClick={aumentar}>+</button>
            </div>
            <div>
                <button className="btn btn-primary btnConfirmar" onClick={confirmar}>Confirmar</button>
            </div>
        </>
    )

}

export default ItemCount;