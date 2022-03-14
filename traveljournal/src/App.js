import React from "react"
import "./index.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import data from './data'

export default function App() {
  const cards = data.map(item => <Hero
      key={item.title}
      item = {item}
      />
  )
  return(
    <div>
      <Navbar />
      {cards}
    </div>
  )
}