import { useState } from "react";

import Vector from '../../assets/Vector.svg'

import OpenVector from '../../assets/OpenVector.png'

import AproposCSS from '../../style/Apropos.module.css'

import Fiabilite from '../../components/Collapses/Fiabilite'
import Respect from '../../components/Collapses/Respect'
import Securite from '../../components/Collapses/Securite'
import Service from '../../components/Collapses/Service'

import Banner from '../../components/Banner'

function Apropos() {

  const [displun, setDisplun] = useState(false)
  const [displdeux, setDispldeux] = useState(false)
  const [displtrois, setDispltrois] = useState(false)
  const [displquatre, setDisplquatre] = useState(false)

    return (

      <div>

        <Banner 
            
            avec = {false}
        
        />

        <div className={AproposCSS.sectionCollapses}>

          <div className={AproposCSS.bulle}> 

            <div className={AproposCSS.buttonBulle} onClick = {()=>{
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

          <div className={AproposCSS.bulle}> 

            <div className={AproposCSS.buttonBulle} onClick = {()=>{
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

          <div className={AproposCSS.bulle}> 

            <div className={AproposCSS.buttonBulle} onClick = {()=>{
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

          <div className={AproposCSS.bulle}> 

            <div className={AproposCSS.buttonBulle} onClick = {()=>{
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

      </div>
    );
  }
  
  export default Apropos;