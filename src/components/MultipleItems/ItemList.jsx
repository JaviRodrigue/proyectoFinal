
import Item from "../Items/Item";

const ItemList = ({products}) =>{
    return(
        products.map(prod =>
            <Item
                key={prod.id}
                {...prod}
            />    
        )
    )
}

export default ItemList;