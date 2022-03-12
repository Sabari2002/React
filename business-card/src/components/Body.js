import React from "react"
import pic from '../images/Laura Smith.jpeg'

export default function Body(){
    return (
        <div>
        <img src={pic} width="317px"/>
        <h3>Laura Smith</h3>
        <p className="role">Frontend Developer</p>
        <p className="website">laurasmith.website</p>
        <div className="contact">
            <button className="email">Email</button>
            <button className="linkedin">LinkedIn</button>
        </div>
        </div>

    )
}
