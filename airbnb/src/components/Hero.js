import React from "react"
import hero from '../images/photo-grid.png'

export default function Hero() {
    return(
        <section>
        <div className="hero">
            <img className="hero-img" src={hero} alt="hero-img" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-des">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
        </section>
        )
}