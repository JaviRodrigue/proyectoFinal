import ItemListContainer from "../MultipleItems/ItemListContainer";
import ItemDetailContainer from "../SingleItem/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import Cart from "../Cart/Cart";

const Main = () =>{
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
                <Route path='/detail/:id' element={<ItemDetailContainer/>}></Route>
                <Route path='cart' element={<Cart/>}></Route>
            </Routes>
        </main>
    )
}

export default Main;