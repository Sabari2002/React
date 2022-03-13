import React from "react";



export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    } 
    return(
            <div className="card">
                {badgeText && <div className="badge">{badgeText}</div>}
                    <img className="img" src={props.item.coverImg} />
                    <div className="stats">
                        <img className="star" src="./images/star.png" />
                        <p className="rating">{props.item.stats.rating} </p>
                        <p className="count">({props.item.stats.reviewCount})•{props.item.location}</p>
                    </div>
                        <p className="intro">{props.item.title}</p>
                        <p className="price"><span class="bold">From ${props.item.price} </span>/ person</p>
            </div>
        )

    }
