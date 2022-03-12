import React from "react"
import twitter from '../images/Twitter icon.jpeg'
import facebook from '../images/Facebook icon.jpeg'
import instagram from '../images/Instagram icon.jpeg'
import github from '../images/github.jpeg'

export default function Footer() {
    return (
        <div className="footer">
            <img className="link" src={twitter} width="25px"/>
            <img className="link" src={facebook} width="25px"/>
            <img className="link" src={instagram} width="25px"/>
            <img className="link" src={github} width="25px"/>
        </div>
    )    
}