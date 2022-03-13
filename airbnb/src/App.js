import React from "react"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import './index.css'
import data from './data'

export default function App() {
  const cards = data.map(item => <Card 
    img= {item.coverImg}
    // star = "./images/star.png"
    rating = {item.stats.rating}
    count = {item.stats.reviewCount}
    location = {item.location}
    intro = {item.title}
    bold = {item.price}
    />
)
  return(
    <div>
      <Navbar />
      <Hero />
        {cards}
    </div>
  )
}