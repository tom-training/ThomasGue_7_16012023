import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Vector from '../../assets/Vector.svg'
import OpenVector from '../../assets/OpenVector.png'

import CardCSS from '../../style/Card.module.css'

function Card(){

    const appartId = useParams()
    const [appartData, setAppartData] = useState([])
    
    console.log(appartId)

    const [isDataLoading, setDataLoading] = useState(false)

    const url = '../liste.json'

    const [display, setDisplay] = useState(false)
    const [displayDeux, setDisplayDeux] = useState(false)

    useEffect(() => {
      
      setDataLoading(true)
      fetch(url)
        .then((response) => response.json())
  
        .then((appartData) => 
          
          {
          setAppartData(appartData)
          console.log(appartData)
          setDataLoading(false)
          })
            
        .catch((error)=> console.log(error))
    }, [])
      
    return(

      <div>
        
        <div>
            {isDataLoading ?(<div> Ca charge </div>):
            
            (<div> {appartData.map((logt)=>(


              logt.id === appartId.id ?(

              <div key={logt.id} className={CardCSS.leCadre}>

                  <img src={logt.cover} alt="un appartement"className={CardCSS.coverStyle} />

                    <div className={CardCSS.blocIntermediaire}> 

                      <div className={CardCSS.titleStyle}> {logt.title} </div>

                      <div className={CardCSS.locationStyle}> {logt.location} </div>

                      <div className={CardCSS.lesTags}>
                        {logt.tags.map((tago)=>(<div key={tago} className={CardCSS.leTag}> {tago} </div>))}
                      </div>  
                    
                    </div>

                  <div className={CardCSS.lesDeuxBlocs}>

                    <div className={CardCSS.lesSousBlocs}>
                      <div className= {CardCSS.boutonPlusInfo} onClick={()=>{
                        if(display){setDisplay(false)}
                        else{setDisplay(true)}
                      }}> 
                      
                        <div className={CardCSS.descDiv}> Description </div>

                        
                          {display? (<img src = {OpenVector} alt="vector icon open" className={CardCSS.imaVector}/>):
              
                          (<img src = {Vector} alt="vector icon closed" className={CardCSS.imaVector}/>) 
                          } 
                       
                      </div>

                      {display ?(
                            <div className={CardCSS.textDisplayed}> {logt.description} </div>
                          )
                          :(null)}

                    </div>        
                    <div className={CardCSS.lesSousBlocs}>

                        <div className= {CardCSS.boutonPlusInfo} onClick={()=>{
                            if(displayDeux){setDisplayDeux(false)}
                            else{setDisplayDeux(true)}
                          }}> 
                          
                            <div className={CardCSS.descDiv}> Équipements </div>
                            
                              {displayDeux? (<img src = {OpenVector} alt="vector icon open" className={CardCSS.imaVector}/>):
                  
                              (<img src = {Vector} alt="vector icon closed" className={CardCSS.imaVector}/>) 
                              } 
                            
                        </div>

                          {displayDeux ?(
                            <div className={CardCSS.textDisplayed}> {logt.equipments.map((eqpt, id)=>(

                              <ul className={CardCSS.listDisplayed}>
                                <li key={id}>{eqpt}</li>
                              </ul>

                            ))} </div>
                          )
                          :(null)}

                    </div>      
                  </div>
              </div>  
              ):(null)  
              

              ))}</div>)}
        </div>
        
      </div>

    )

}


export default Card