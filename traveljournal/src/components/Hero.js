import React from "react"

export default function Hero(props) {
    return(
        <section>
            <div className="content">
                <img className="hero-img" src={props.item.imageUrl} />
                <div>
                <div className="hero-place">
                <img className="hero-location" src="images/location-pin.png" />
                <p className="place">{props.item.location}</p>
                <a className="google" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <p className="title">{props.item.title}</p>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="des">{props.item.description}</p>
                </div>
            </div>
        </section>
        
        )
}