import React from "react";
import Logo from "../images/airbnb-1.png"


export default function Navbar(){
    return(<div className="nav-wrapper">
        <img src={Logo} alt="" className="logo-img" />
    </div>
    )
}