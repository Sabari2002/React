import React from "react"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import img1 from "./images/katie-zaferes.png"
import star from "./images/star.png"
import './index.css'

export default function App() {
  return(
    <div>
      <Navbar />
      <Hero />
      <Card 
          img= {img1}
          star = {star}
          rating = "5.0"
          count = "(6).USA"
          intro = "Life lessons with Katie Zaferes"
          bold = {136}
          />
      
    </div>
  )
}