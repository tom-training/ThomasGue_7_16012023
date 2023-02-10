import HomeCSS from '../../style/Home.module.css'


import { useState, useEffect } from 'react'

import Appart from '../../components/Appart'
import Banner from '../../components/Banner'

function Home() {

  const [appartData, setAppartData] = useState([])

  const [isDataLoading, setDataLoading] = useState(false)

  const url = './liste.json'

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

    return (
      <div>

        <Banner 
            
            avec = {true}
        
        />

        <div>
          {isDataLoading ? (
            <div> Ca load </div>
          ) : (
            <div className={HomeCSS.homeStyle}> 
              
              {
              
                appartData.map((logement) => (

                  <Appart
                    key = {logement.id}
                    id = {logement.id}
                    titre = {logement.title}
                  
                  />  
                ))
                
              }  
              
            </div>
          )}
        </div>


        

        


      
      </div>
    )
  }
  
  export default Home;