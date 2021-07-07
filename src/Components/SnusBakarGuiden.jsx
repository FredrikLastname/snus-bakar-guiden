import React from "react"

import PrepText from "./Content/PrepText"
import PrepMaterialTobak from "./Content/PrepMaterialTobak"
import PrepMaterialResten from "./Content/PrepMaterialResten"
import PrepIngredienser from "./Content/PrepIngredienser"
import ProdStepOne from "./Content/ProdStepOne"
import ProdStepTwo from "./Content/ProdStepTwo"
import ProdStepThree from "./Content/ProdStepThree"
import Done from "./Content/Done"
import MtrButton from "./MtrButton";

class SnusBakarGuiden extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            page:0,
            snus:""
        }

        this.buttonActionForward = this.buttonActionForward.bind(this)
        this.buttonActionBack = this.buttonActionBack.bind(this)
        this.tobaksval = this.tobaksval.bind(this)
        
    }


    tobaksval =(val)=>{
        this.setState(()=>{
            return {snus:val}
        })
    }

    pageToRender =(page)=>{
        switch(page){
            case 0:
                return <PrepText />
            case 1:
                return <PrepMaterialTobak  
                    snussatsVald={this.tobaksval}
                />
            case 2:
                return <PrepMaterialResten />
            case 3:
                return <PrepIngredienser 
                    snus = {this.state.snus}
                />
            case 4:
                return <ProdStepOne 
                    snus = {this.state.snus}
                />
            case 5:
                return <ProdStepTwo 
                    snus = {this.state.snus}
                />
            case 6:
                return <ProdStepThree 
                    snus = {this.state.snus}
                />
            case 7:
                return <Done />
            default:
                return <PrepText />
        }
    }

    buttonActionForward =()=>{
        
        this.setState(prevState =>{
            if(prevState.page < 7){
                return {page: prevState.page+1}
            }

            if(prevState.page >= 7){
                return {page: 0, snus:""}
            }
        })
    }

    buttonActionBack =()=>{

        this.state.page -1 >= 0 && 
        this.setState(prevState =>{
            return {page: prevState.page-1} 
        })
    }

    render(){

        
        return(
            <>
                
                
                <div className="text-rubrik">
                    {(this.state.page !==0 && this.state.page <=3) && `Förberedelser ${this.state.page}`}
                    {(this.state.page >3 && this.state.page < 7) && `Produktion ${this.state.page % 4 +1}`}
                    {(this.state.page === 7) && `Färdig!`}
                </div>

                {this.pageToRender(this.state.page)}

                <div className="buttonRow">
                    <div className="knapp">
                        <MtrButton 
                            disabled ={this.state.page === 0? true : false}
                            btnText="Tillbaka" 
                            btnClick ={this.buttonActionBack}
                        />
                    </div>

                    <div className="knapp">
                        <MtrButton 
                            disabled ={this.state.page > 0 && !this.state.snus ? true : false}
                            btnText={this.state.page < 7 ? "Nästa" : "Till första sidan"} 
                            btnClick ={this.buttonActionForward}
                        />
                    </div>
                </div>

            </>
        )
    }


}

export default SnusBakarGuiden;