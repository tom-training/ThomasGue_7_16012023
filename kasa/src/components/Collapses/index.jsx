import { useState } from "react";

import Vector from '../../assets/Vector.svg'

import OpenVector from '../../assets/OpenVector.png'
import CollapsesCSS from '../../style/Collapses.module.css'

function Collapses({nom, definition}){

    const [displ, setDispl] = useState(false)


    return(

        <div className={CollapsesCSS.bulle}> 

                    <div 
                        className={CollapsesCSS.buttonBulle}
                        onClick = {()=>{

                            if(displ){

                            setDispl(false)

                            }else{

                            setDispl(true)
                            }
                        }}
                    > 
                    {nom}

                    {displ ? (<img src = {OpenVector} alt="vector icon open"/>):

                    (<img src = {Vector} alt="vector icon closed" />) 
                    }      

                    </div> 

                    {displ ? (<div> {definition} </div>):(null) 
                    }

        
        </div>
    )


}

export default Collapses