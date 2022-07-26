import React, {useContext, useState} from "react";
import { Contexto } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import Form from "./Form";
import { serverTimestamp } from "firebase/firestore";
import swal from "sweetalert";

const Cart = () =>{
    const {cartItem, eliminarItem, limpiarCarrito, subtotalItem, numeroTotalProd, obtenerTotal} = useContext(Contexto);

    const [data, setData] = useState({nombre:"",email:"",tel:""})

    const [orderId, setOrderId] = useState("");

    const handleChange = (e) =>{
        const {nombre, value} = e.target;
        setData({
            ...data,
            [e.target.nombre]:e.target.value,
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const orden = {
            buyer:{
                nombre: data.nombre,
                email:data.email,
                tel:data.tel,
            },
            cartItem,
            total: obtenerTotal(),
            date: serverTimestamp(),
        };
        const ref = collection(db,"orden");
        addDoc(ref,orden).then((res)=>{
            setOrderId(res.id);
            limpiarCarrito();
        })
    };

    if(orderId !== ""){
        return(
            <div className="contenedorPostvolver">
                <h2>¡Listo! Tu Pedido Se Esta Cocinando</h2>
                <Link to={"/"} className="botonPostVolver">Volver Al inicio</Link>
            </div>
        )
    }

    if(numeroTotalProd() == 0){
        return(
            <div className="ContenedorVacio">
                <h3 className="tituloVacio">Carrito Vacio</h3>
                <Link to={"/"} className="botonVolver">Volver a Comprar</Link>
            </div>
        )
    }else{
        return(
            <>
                <div className="containerCarritoFull">
                    <div className="carrito">
                        <h2>Bienvenido Al carrito</h2>
                    </div>
                    <div className="carritoItems">
                        {cartItem.map((item)=>(
                            <div key={item.id} className="contenedorUnico">
                                <div className="containerImgCart">
                                    <img src={item.imagen} alt={item.id} />
                                </div>
                                <div className="conainerGeneral">
                                    <div className="containerNombreCart">
                                        <p>{item.nombre}</p>
                                    </div>
                                    <div className="containerPrecioCart">
                                        <p>Precio:${item.precio}</p>
                                    </div>
                                    <div className="containerCatidadCart">
                                        <p>Cantidad Pedida: {item.quantity}</p>
                                    </div>
                                    <div className="containerPorductTotal">
                                        <p>SubTotal: ${subtotalItem(item.precio, item.quantity)}</p>
                                    </div>
                                    <div className="containerButtonCart">
                                        <button className="btn btn-danger" onClick={()=> eliminarItem(item.id)}>Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="containerTotalPrecio">
                    <h3>Total a Pagar: ${obtenerTotal()}</h3>
                </div>
                <div className="vaciarCarrito">
                    <button className="btn btn-danger" onClick={limpiarCarrito}>Vaciar Carrito</button>
                </div>
                <div className="formularioPostCompra">
                    <Form
                        handleChange={handleChange}
                        data={data}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </>
        )
    }

}

export default Cart;