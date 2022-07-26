import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collectionProd } from "../../utils/firebase";
import { getDocs, query, where } from "firebase/firestore";
import Loading from "../../css/loader";

const ItemListContainer = () =>{
    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() =>{
        setLoading(true);
        const ref = categoryId ? query(collectionProd, where("categoryId","==",categoryId)) : collectionProd;
        const consulta = getDocs(ref);

        consulta
        .then((resultado) =>{
            const productosMap = resultado.docs.map((referencia) =>{
                const aux = referencia.data();
                aux.id = referencia.id;
                return aux
            })
            setItems(productosMap);
            setLoading(false);
        })
        .catch((error) =>{
            console.log(error);
        })
    },[categoryId])

    return(
        <div className="seccionProductos">
            <div className="seccionProductosTitulo">
                <h2>Productos</h2>
                <hr />
            </div>
            <div className="seccionContenedorProductos">
                {loading ? <Loading/> : <ItemList products={items}/>}
            </div>
        </div>
    )
}

export default ItemListContainer;
