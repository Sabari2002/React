import React from "react"
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

export default function App() {

    return(
    <div className="container">
        <Header/>
        <Content/>
        <Footer/>
    </div>
    )
}