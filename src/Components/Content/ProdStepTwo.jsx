import React from "react"
import ingredienser from "./ingredienser"


const ProdStepTwo=(props)=>{
    
    const gramSoda = () =>{
        return ingredienser[props.snus].natriumkarbonat.gram
    }
    const mlSoda =()=>{
        return ingredienser[props.snus].natriumkarbonat.ml
    }

    return(
        <>


        <div className="textblock">
            <div className="attention">
                Följande steg bör utföras i ett ventilerat utrymme eller under fläkt. Starka ångor kan utsöndras från blandningen. Andningsmask och skyddsglasögon rekomenderas. Exponering för ångorna kan irritera ögon och luftrör! Undvik att ha ansiktet direkt över behållaren med den varma tobaken.
            </div>
            <div>
                Efter 24 timmar i ugnen...
            </div>
            <br/>
            <ul>
                <li>Häll tobaken i en balja eller hink. Lös upp {gramSoda()} gram (~{mlSoda()} ml) natriumkarbonat (hushållssoda) med 0,5 liter varmt vatten och blanda ut det med tobaken. Använd gärna elvisp.</li>
                <li>Fördela snusblandningen i de båda plastburkarna som följde med råtobaken. Sätt på locken ordentligt och ställ in dem i ugnen.</li>
                <li>Låt burkarna stå i ugnen i 12 timmar. Kontrollera temperaturen med stektermometern.</li>
            </ul>
        </div>


        </>
    )
}

export default ProdStepTwo;