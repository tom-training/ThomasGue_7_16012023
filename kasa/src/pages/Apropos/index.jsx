import { useState } from "react";

import Vector from '../../assets/Vector.svg'

import OpenVector from '../../assets/OpenVector.png'

import '../../style/Apropos.css'

import Fiabilite from '../../components/Collapses/Fiabilite'
import Respect from '../../components/Collapses/Respect'
import Securite from '../../components/Collapses/Securite'
import Service from '../../components/Collapses/Service'

function Apropos() {

  const [displun, setDisplun] = useState(false)
  const [displdeux, setDispldeux] = useState(false)
  const [displtrois, setDispltrois] = useState(false)
  const [displquatre, setDisplquatre] = useState(false)

    return (

      <div className="sectionCollapses">

        <div className="bulle"> 

          <div className="button-Bulle" onClick = {()=>{
                    if(displun){
                        
                        setDisplun(false)
                       
                    }else{
                        
                        setDisplun(true)
                    }
                }}> 
            Fiabilité

            {displun ? (<img src = {OpenVector} alt="vector icon open"/>):
            
            (<img src = {Vector} alt="vector icon closed" />) 
            }      

          </div> 

          {displun ? (<Fiabilite />):(null) 
          }

        </div>

        <div className="bulle"> 

          <div className="button-Bulle" onClick = {()=>{
                    if(displdeux){
                        
                        setDispldeux(false)
                       
                    }else{
                        
                        setDispldeux(true)
                    }
                }}> 
            Respect

            {displdeux ? (<img src = {OpenVector} alt="vector icon open"/>):
            
            (<img src = {Vector} alt="vector icon closed" />) 
            }

          </div>

          {displdeux ? (<Respect />):(null) 
          }

        </div>

        <div className="bulle"> 

          <div className="button-Bulle" onClick = {()=>{
                    if(displtrois){
                        
                        setDispltrois(false)
                       
                    }else{
                        
                        setDispltrois(true)
                    }
                }}>
            Service

            {displtrois ? (<img src = {OpenVector} alt="vector icon open"/>):
            
            (<img src = {Vector} alt="vector icon closed" />) 
            }        
          </div>

          {displtrois ? (<Service />):(null) 
          }

        </div>

        <div className="bulle"> 

          <div className="button-Bulle" onClick = {()=>{
                    if(displquatre){
                        
                        setDisplquatre(false)
                       
                    }else{
                        
                        setDisplquatre(true)
                    }
                }}>
            Sécurité

            {displquatre ? (<img src = {OpenVector} alt="vector icon open"/>):
            
            (<img src = {Vector} alt="vector icon closed" />) 
            }        
          </div>

          {displquatre ? (<Securite />):(null) 
          }

        </div>

      </div>
    );
  }
  
  export default Apropos;