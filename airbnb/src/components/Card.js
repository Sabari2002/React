import React from "react";



export default function Card(props) {
    return(
            <div className="card">
                    <div className="content">
                    <img className="img" src={props.img} />
                    <div className="aa">
                        <img className="star" src="./images/star.png" />
                        <div className="even">
                        <p className="rating">{props.rating} </p>
                        <p className="count">({props.count}).{props.location}</p>
                        </div>
                        <div className="text">
                        <p className="intro">{props.intro}</p>
                        <p className="price"><span class="bold">From ${props.bold} </span>/ person</p>
                        </div>
                    </div>
                    </div>
            </div>
        )
}