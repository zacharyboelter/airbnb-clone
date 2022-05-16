import React from "react";
import Logo from "./images/airbnb-logo.png"


export default function Navbar(){
    return(<nav className="nav-wrapper">
        <img src={Logo} alt="" className="logo-img" />
    </nav>
    )
}