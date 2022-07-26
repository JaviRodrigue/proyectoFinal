import { createContext } from "react";
import { useState } from "react";
import { collectionProd } from "../../utils/firebase";

// Creo el contexto
const Contexto = createContext();

// Creo el provider
const CartProvider = ({children}) => {
    const [cartItem, setCartitem] = useState([]);

    // funcion para agregar un producto al carrito

    const agregarItem = (id, nombre, precio, quantity, imagen) =>{
        if(verificar(id)){
            let index = cartItem.findIndex((index) => (index.id === id));
            let copiaCart = [...cartItem];
            copiaCart[index].quantity += quantity;
            setCartitem(copiaCart);
        }else{
            const itemAgregados = {id, nombre, precio, quantity, imagen};
            setCartitem([...cartItem,itemAgregados])
        }
    }
    
    // funcion para verificar si el item ya se encuentra en el carrito
    const verificar = (id) =>{
        return cartItem.some((item) => (item.id === id))
    }

    // funcion para eliminar un producto
    const eliminarItem = (id) =>{
        return setCartitem(cartItem.filter((item)=> (item.id !== id)))
    }

    // funcion para limpiar el carrito
    const limpiarCarrito = () =>{
        setCartitem([]);
    }

    // funcion para obtener el numero total de producto
    const numeroTotalProd = () =>{
        let cant = 0;
        cartItem.forEach((item) =>{
            cant = cant + item.quantity;
        })
        return Number(cant)
    } 

    // obtener el subtotal de un producto
    const subtotalItem = (precio, quantity) =>{
        let subtotal = 0
        subtotal += precio * quantity;
        return Number(subtotal)
    }

    // Obtener el precio Total
    const obtenerTotal = () =>{
        let total = 0;
        cartItem.forEach((p) =>{
            total += p.precio * p.quantity;
        })
        return Number(total)
    }

    return(
        <Contexto.Provider value={{
            cartItem,
            agregarItem,
            eliminarItem,
            limpiarCarrito,
            subtotalItem,
            numeroTotalProd,
            obtenerTotal,
        }}>
            {children}
        </Contexto.Provider>
    )
}

export {CartProvider, Contexto};