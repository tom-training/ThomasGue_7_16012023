import { useState} from 'react'

import Vector from '../../assets/Vector.svg'
import OpenVector from '../../assets/OpenVector.png'

import CollapsappequiptCSS from '../../style/Collapsappequipt.module.css'

function Collapsequipt(props){

    //ici on récupère le logement qui correspond on le récupère avec le id
    // ensuite on fait un find sur le bon logement et une fois isolé on fait un map sur sa 
    // propriété equipt

    const equipt = props.equipt
    
    

    const [display, setDisplay] = useState(false)

    return(
        <div className={`${CollapsappequiptCSS.lesSousBlocs} ${CollapsappequiptCSS.leSousBlocEquipt}`}>

            <div className= {CollapsappequiptCSS.boutonPlusInfo} onClick={()=>{
                if(display){setDisplay(false)}
                else{setDisplay(true)}
            }}> 
          
                <div className={CollapsappequiptCSS.descDiv}> Équipements </div>
            
                {display? 
                (<img src = {OpenVector} alt="vector icon open" className={CollapsappequiptCSS.imaVector}/>)
                :
                (<img src = {Vector} alt="vector icon closed" className={CollapsappequiptCSS.imaVector}/>) 
                } 
            
            </div>

            {display ?
            (
                <div className={CollapsappequiptCSS.textDisplayed}> 
                    
                    {equipt.map((eqpt, index)=>(
                        <ul className={CollapsappequiptCSS.listDisplayed}>
                            <li key={index} className={CollapsappequiptCSS.listItem}> {eqpt} </li>
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