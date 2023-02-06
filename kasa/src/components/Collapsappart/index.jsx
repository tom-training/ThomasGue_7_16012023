import { useState} from 'react'

import Vector from '../../assets/Vector.svg'
import OpenVector from '../../assets/OpenVector.png'

import CollapsappequiptCSS from '../../style/Collapsappequipt.module.css'

function Collapsappart({descrip}){


    const [display, setDisplay] = useState(false)

    return(

                <div className={`${CollapsappequiptCSS.lesSousBlocs} ${CollapsappequiptCSS.leSousBlocDesc}`}>
                      <div className= {CollapsappequiptCSS.boutonPlusInfo} onClick={()=>{
                        if(display){setDisplay(false)}
                        else{setDisplay(true)}
                      }}> 
                      
                            <div className={CollapsappequiptCSS.descDiv}> Description </div>

                        
                            {display? (<img src = {OpenVector} alt="vector icon open" className={CollapsappequiptCSS.imaVector}/>):
              
                            (<img src = {Vector} alt="vector icon closed" className={CollapsappequiptCSS.imaVector}/>) 
                            } 
                       
                      </div>

                      {display ?
                        (<div className={CollapsappequiptCSS.textDisplayed}> 
                          <div className={CollapsappequiptCSS.lineText}>
                            {descrip} 
                          </div>
                        </div>)
                        :(null)
                      }

                </div>     
    )
}


export default Collapsappart