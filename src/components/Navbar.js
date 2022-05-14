import React from "react";
import Logo from ".../public/images/airbnb-logo.png"


export default function Navbar(){
    return(<nav className="nav-wrapper">
        <img src={Logo} alt="" className="logo-img" />
    </nav>
    )
}