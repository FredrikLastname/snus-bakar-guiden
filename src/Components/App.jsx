import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Preparation from "./Content/Preparation"
const App = () =>{
    return(
    <div className="wrapper">
    <Header />

        <div className="wrapper__content">
        <div className="content">
            <Preparation/>
        </div>

        </div>
    <Footer/>
    </div>
    )
}

export default App