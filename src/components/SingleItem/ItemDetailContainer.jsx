import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collectionProd } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import Loading from "../../css/loader";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState();

    const [loading, setLoading] = useState(true)

    const {id} = useParams();

    useEffect(() =>{
        setLoading(true)
        
        const ref = doc(collectionProd,id);

        getDoc(ref)
            .then((response) =>{
                setProduct({
                    id : response.id,
                    ...response.data()
                })
            })
        
        setLoading(false)
    },[id])

    return(
        <div className="itemDetailContainer">
            {loading ? <Loading/> : <ItemDetail {...product}/>}
        </div>
    )
}

export default ItemDetailContainer;