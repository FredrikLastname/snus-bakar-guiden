import React from "react"

const Button = (props) =>{

    const clickHandler =(e)=>{
        console.log("knapp klickad på");
    }

    return(
        <button onClick={clickHandler}>{props.buttonText}</button>
    )
}

export default Button