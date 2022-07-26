import React from "react";

const Form = ({handleChange, data, handleSubmit}) =>{
    return(
        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <input
                    name="nombre"
                    type="text"
                    placeholder="Nombre"
                    onChange={handleChange}
                    // value={data.nombre}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    // value={data.email}
                />
                <input
                    name="tel"
                    type="number"
                    placeholder="Tel"
                    onChange={handleChange}
                    // value={data.tel}
                />
                <button className="btn btn-primary finalizarCompra">
                    Finalizar Compra
                </button>
            </form>
        </div>
    )
} 

export default Form;