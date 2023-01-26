import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Vector from '../../assets/Vector.svg'
import OpenVector from '../../assets/OpenVector.png'

import '../../style/Card.css'

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
            
            L'appartement a l'id suivante {appartId.id}
       
        </div>

        <div>
            {isDataLoading ?(<div> Ca charge </div>):
            
            (<div> {appartData.map((logt)=>(

              <div key={logt.id} className='leCadre'>

                  <div>{logt.id}</div>

                  <img src={logt.cover} alt="un appartement"className='coverStyle' />

                  <div className='titleStyle'> {logt.title} </div>

                  <div className='locationStyle'> {logt.location} </div>

                  <div className='lesTags'>
                    {logt.tags.map((tago)=>(<div key={tago} className='leTag'> {tago} </div>))}
                  </div>  

                  <div className="lesDeuxBlocs">

                    <div className="lesSousBlocs">
                      <div className= "boutonPlusInfo" onClick={()=>{
                        if(display){setDisplay(false)}
                        else{setDisplay(true)}
                      }}> 
                      
                        Description 
                        {display? (<img src = {OpenVector} alt="vector icon open"/>):
            
                        (<img src = {Vector} alt="vector icon closed" />) 
                        } 

                      </div>

                      {display ?(
                            <div> {logt.description} </div>
                          )
                          :(null)}

                    </div>        
                    <div className="lesSousBlocs">

                        <div className= "boutonPlusInfo" onClick={()=>{
                            if(displayDeux){setDisplayDeux(false)}
                            else{setDisplayDeux(true)}
                          }}> 
                          
                            Équipements 
                            {displayDeux? (<img src = {OpenVector} alt="vector icon open"/>):
                
                            (<img src = {Vector} alt="vector icon closed" />) 
                            } 

                        </div>

                          {displayDeux ?(
                            <div> {logt.equipments[1]} </div>
                          )
                          :(null)}

                    </div>      
                  </div>


              </div>  
                
              

              ))}</div>)}
        </div>
        
      </div>

    )

}


export default Card