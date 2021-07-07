import React from "react"
import ingredienser from "./ingredienser"

const ProdStepOne=(props)=>{
    const gramSalt = () =>{
        return ingredienser[props.snus].natriumklorid.gram
    }
    const mlSalt =()=>{
        return ingredienser[props.snus].natriumklorid.ml
    }

    return(
        <>
            
        <div className="textblock">
            <ul>
                <li>Sätt ugnen på 90 grader. Kontrollera temperaturen med stektermometern</li>
                <li>Häll tobaken i en balja eller hink. Lös upp {gramSalt()} gram (~{mlSalt()} ml) salt med 1 liter varmt vatten och blanda ut det med tobaken. Använd gärna elvisp.</li>
                <li>Fördela snusblandningen i de båda plastburkarna som kom med råtobaken. Sätt på locken ordentligt och ställ in dem i ugnen.</li>
                <li>Låt burkarna stå i ugnen i 24 timmar. Kontrollera temperaturen med stektermometern.</li>
            </ul>
        </div>
        
        </>
    )
}

export default ProdStepOne;