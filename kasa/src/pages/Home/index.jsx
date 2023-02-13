import HomeCSS from '../../style/Home.module.css'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
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
      <div className={HomeCSS.homeCadre}>

        <Header accueil={true} aprop={false}/>

        <Banner 
            
            avec = {true}
        
        />

        <div>
          {isDataLoading ? (
            <Loader/>
          ) : (
            <div className={HomeCSS.homeStyle}> 
              
              {
              
                appartData.map((logement) => (

                  <Appart
                    key = {logement.id}
                    id = {logement.id}
                    titre = {logement.title}
                    cover = {logement.cover}
                  
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