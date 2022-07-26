import React from "react";
import { Contexto } from "../CartContext/CartContext";
import { useContext } from "react";

const CartWidget = () =>{
    const {numeroTotalProd} = useContext(Contexto);
    return(
        <div className="contendorMenuContable">
            <span className='material-symbols-outlined'>
                shopping_cart
            </span>
            <p className="contadorCantidad">{numeroTotalProd()}</p>
        </div>
    )
}

export default CartWidget;