import React from "react"
import ReactDOM from "react-dom"
import logo from './react-logo.png'

function Header() {
    return(
    <header>
    <nav>
        <img src={logo} width="40px" alt="error"/>
    </nav>
    </header>
    )
}

function Content() {
    return(
        <div>
            <h1>Facts about React!</h1>
        <ol>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>He well 100k stars in Github</li>
            <li>Is maintained by facebook</li>
            <li>Powers thousands of enterprise apps,including mobile apps</li>
        </ol> 
        </div>
    )
}

function Footer() {
    return(
        <footer><small>© 2022 Sabari development. All rights reserved.</small></footer>
    )
}

function TemporaryName() {

    return(
    <div>
        <Header/>
        <Content/>
        <Footer/>
    </div>
    )
}

ReactDOM.render(
    <TemporaryName />,
    document.getElementById("main")
)








// learning 
// const page = (
//     <div>
//         <h1>My awesome website in react!</h1>
//         <h3>Reason I love React</h3>
//         <ol>
//             <li>It's composable.</li>
//             <li>It's Declarative.</li>
//             <li>It's hireable value.</li>
//             <li>It's actively maintained by skilled people.</li>
//         </ol>
//     </div>
// )

// ReactDOM.render(
//     page,
//     document.getElementById("main"))

 