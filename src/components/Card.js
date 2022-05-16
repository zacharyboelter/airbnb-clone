import React from "react"
import photo from "../images/zaferes.png"
import star from "../images/star.png"




export default function Card(props) {
    return (
        <div className="card">
            <img src={props.photo} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray"> {props.country}</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}