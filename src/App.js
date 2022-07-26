import { CartProvider } from "./components/CartContext/CartContext"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom"



const App = () =>{
    return(
        <div className="app">
            <BrowserRouter>
                <CartProvider>
                    <Header/>
                    <Main/>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;