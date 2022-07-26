import React from "react";
import {Link} from "react-router-dom";
import CartWidget from "./CartWidjet";


const NavBar = (inHeader) =>{
    return(
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
                    <div className="navTitulo">
                        <h1><span>B</span>log<span>B</span>urger</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ">
                            <li className="nav-item"><Link to={'/'} >Home</Link></li>
                            <li className="nav-item"><Link to={'/category/uno'} className="glyphicon glyphicon-user">De Carne</Link></li>
                            <li className="nav-item"><Link to={'/category/dos'}>De Pollo</Link></li>
                            <li className="nav-item"><Link to={'/category/tres'}>Vegana</Link></li>
                            <li className="nav-item"><Link to={"/cart"}>carrito</Link></li>
                        </ul>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar;