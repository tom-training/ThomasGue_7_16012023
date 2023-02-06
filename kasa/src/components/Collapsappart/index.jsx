import { useState} from 'react'

import Vector from '../../assets/Vector.svg'
import OpenVector from '../../assets/OpenVector.png'

import CollapsappartCSS from '../../style/Collapsappart.module.css'

function Collapsappart({descrip}){


    const [display, setDisplay] = useState(false)

    return(

                <div className={CollapsappartCSS.lesSousBlocs}>
                      <div className= {CollapsappartCSS.boutonPlusInfo} onClick={()=>{
                        if(display){setDisplay(false)}
                        else{setDisplay(true)}
                      }}> 
                      
                            <div className={CollapsappartCSS.descDiv}> Description </div>

                        
                            {display? (<img src = {OpenVector} alt="vector icon open" className={CollapsappartCSS.imaVector}/>):
              
                            (<img src = {Vector} alt="vector icon closed" className={CollapsappartCSS.imaVector}/>) 
                            } 
                       
                      </div>

                      {display ?
                        (<div className={CollapsappartCSS.textDisplayed}> {descrip} </div>)
                        :(null)
                      }

                </div>     
    )
}


export default Collapsappart