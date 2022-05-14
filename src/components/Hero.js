import React from "react";
import Hero_img from ".../public/images/photo-grid.png"

export default function Hero() {
    return (
        <>
            <div className="hero-wrapper">
                <img src={Hero_img} alt="" className="hero-img" />
                <div className="hero-body">
                    <h1 className="hero-title">Online Experiences</h1>
                    <p className="hero-copy">Join unique interactive activities led by <br /> one-of-a-kind hosts—all without leaving <br /> home.
                    </p>
                </div>
            </div>
        </>
    )
}