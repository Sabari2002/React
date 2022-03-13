import React from "react";


export default function Card(props) {
    return(
            <div>
                    <div className="content">
                    <img className="img" src={props.img} />
                    <div className="aa">
                        <img className="star" src={props.star} />
                        <div className="even">
                        <p className="rating">{props.rating} </p>
                        <p className="count">{props.count}</p>
                        </div>
                        <p className="intro">{props.intro} </p>
                        <p className="price"><span class="bold">From ${props.bold} </span>/ person</p>
                    </div>
                    </div>
            </div>
        )
}