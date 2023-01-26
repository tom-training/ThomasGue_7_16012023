import '../../style/Home.css'


import { useState, useEffect } from 'react'

import Appart from '../../components/Appart'

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

        {isDataLoading ? (
          <div> Ca load </div>
        ) : (
          <div className='homeStyle'> 
            
            {
            
              appartData.map((logement) => (

                <Appart

                  id = {logement.id}
                  titre = {logement.title}
                
                />  
              ))
              
            }  
            
          </div>
        )}
      
      </div>
    )
  }
  
  export default Home;