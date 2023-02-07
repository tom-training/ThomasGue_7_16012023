import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import Arrowfd from '../../assets/arrowfd.svg'

import Arrowbck from '../../assets/arrowbck.svg'

import CardCSS from '../../style/Card.module.css'

import Collapse from '../../components/Collapse'

function Card(){

    const appartId = useParams()
    const [appartData, setAppartData] = useState([])
    console.log(appartId)

    const [isDataLoading, setDataLoading] = useState(false)

    const url = '../liste.json'

    const [pos, setPos] = useState(0);

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

    console.log(appartData)
    
      
    return(

      <div>
        
        <div>
            {isDataLoading ?(<div> Ca charge </div>):
            
            (<div> {appartData.map((logt)=>(


              logt.id === appartId.id ?(

              <div key={logt.id} className={CardCSS.leCadre}>

                  <img src={Arrowbck} alt="previous flat" className={CardCSS.arrowStyle} 

                      onClick = {()=>{

                        (pos === 0)?(setPos(logt.pictures.length - 1)):
                        setPos(pos-1)
                      }}
                  />

                  <img src={logt.pictures[pos]} alt="montre l'appart" className={CardCSS.coverStyle} />

                  <img src={Arrowfd} alt="next flat" className={CardCSS.arrowStyle} 
                  
                      onClick = {()=>{

                        (pos === logt.pictures.length - 1)?(setPos(0)):
                        setPos(pos+1)
                      }}
                  
                  />

                  <div className={CardCSS.blocIntermediaire}> 

                    <div className={CardCSS.titleStyle}> {logt.title} </div>

                    <div className={CardCSS.locationStyle}> {logt.location} </div>

                    <div className={CardCSS.lesTags}>
                      {logt.tags.map((tago)=>(<div key={tago} className={CardCSS.leTag}> {tago} </div>))}
                    </div>  
                  
                  </div>

                  <div className={CardCSS.lesDeuxBlocs}>
                    
                      <Collapse nom = "Description" descrip = {logt.description}/>
                    

                    
                      <Collapse nom = "Équipements" descrip = {logt.equipments.map((eqt)=>(

                        <p> {eqt} </p>
                      ))}/>
                    
                  </div>
              </div>  
              ):(<p> 404</p>)  
              

              ))}</div>)}
        </div>
        
      </div>

    )

}


export default Card