import React from "react"
import logo from '../images/react-logo.png'
export default function Header() {
    return(
    <nav>
        <img className="nav-icon" src={logo} alt="error"/>
        <h3 className="nav-text">ReactFacts</h3>
        <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
    )
}
