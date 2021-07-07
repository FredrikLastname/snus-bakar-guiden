import React from "react"
import ingredienser from "./ingredienser"

const ProdStepThree=(props)=>{
    
    const gramGlycerol = () =>{
        return ingredienser[props.snus].glycerol.gram
    }
    const mlGlycerol =()=>{
        return ingredienser[props.snus].glycerol.ml
    }

    return(
        <>
            <div className="textblock">
            </div>
            <div className="textblock">
                <p>Efter totalt 36 timmar i ugnen...</p>
                <br/>
                <ul>
                    <li>Tag ut tobaken ur ugnen och låt det svalna.</li>
                    <li>Häll tobaken i baljan hinken och tillsätt {gramGlycerol()} gram glycerol (~{mlGlycerol()} ml). Använd med fördel elvisp för att noggrant blanda tobaken.</li>
                    <li>Om så önskas, är det nu dags att smaksätta snuset. Olika aromer finns att beställas från till exempel <a href="https://www.snusbolaget.se/" target="_blank" rel="noreferrer">Snusbolaget.se</a></li>
                    <li>För att snuset ska få en fastare konsistens kan <em>Gummi Arabicum</em> blandas ner i snuset. Rekommenderad dosering är ca 2 tsk/kg snus.</li>
                    <li>Snuset är nu klart. Ställ in det i kylskåpet och låt det vila i 5 - 7 dagar för att det ska "mogna". </li>
                </ul>
                
                
                
                
            </div>
        


        </>
    )
}

export default ProdStepThree;