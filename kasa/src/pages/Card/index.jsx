import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


import CardCSS from '../../style/Card.module.css'

import Collapsappart from '../../components/Collapsappart'

import Collapsequipt from '../../components/Collapsequipt'

function Card(){

    const appartId = useParams()
    const [appartData, setAppartData] = useState([])
    
    console.log(appartId)

    const [isDataLoading, setDataLoading] = useState(false)

    const url = '../liste.json'

    

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

                    <Collapsappart descrip = {logt.description}/>

                    <Collapsequipt equipt = {logt.equipments}/>

                  </div>
              </div>  
              ):(null)  
              

              ))}</div>)}
        </div>
        
      </div>

    )

}


export default Card