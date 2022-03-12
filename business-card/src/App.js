import React from "react"
import Body from './components/Body'
import About from './components/About'
import Interests from "./components/Intersets"
import Footer from "./components/Footer"
import './index.css'

export default function App(){
    return (
        <div className="container">
       <Body />
       <About />
       <Interests />
       <Footer />
       </div>
    )
}