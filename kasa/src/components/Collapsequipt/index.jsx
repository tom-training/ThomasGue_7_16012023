import { useState} from 'react'

import Vector from '../../assets/Vector.svg'
import OpenVector from '../../assets/OpenVector.png'

import CollapsappartCSS from '../../style/Collapsappart.module.css'

function Collapsequipt(props){

    //ici on récupère le logement qui correspond on le récupère avec le id

    // ensuite on fait un find sur le bon logement et une fois isolé on fait un map sur sa 
    // propriété equipt
    const equipt = props.equipt
    
    

    const [display, setDisplay] = useState(false)

    return(
        <div className={CollapsappartCSS.lesSousBlocs}>

            <div className= {CollapsappartCSS.boutonPlusInfo} onClick={()=>{
                if(display){setDisplay(false)}
                else{setDisplay(true)}
            }}> 
          
                <div className={CollapsappartCSS.descDiv}> Équipements </div>
            
                {display? 
                (<img src = {OpenVector} alt="vector icon open" className={CollapsappartCSS.imaVector}/>)
                :
                (<img src = {Vector} alt="vector icon closed" className={CollapsappartCSS.imaVector}/>) 
                } 
            
            </div>

            {display ?
            (
                <div className={CollapsappartCSS.textDisplayed}> 
                    
                    {equipt.map((eqpt, index)=>(
                        <ul className={CollapsappartCSS.listDisplayed}>
                            <li key={index}> {eqpt} </li>
                        </ul>
                            
                        
                    ))
                    }

                </div>
            )
            :(null)}

        </div>      
  
                 
    )

    

}


export default Collapsequipt