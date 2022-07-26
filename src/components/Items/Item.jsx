
import { Link } from "react-router-dom";


// Creo los items

const Item = ({id, nombre, imagen}) =>{
    return(
        <div className="card itemView">
            <h2>{nombre}</h2>
            <img src={imagen} alt={nombre} />
            <Link className="botonConfirmar" to={`/detail/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item;