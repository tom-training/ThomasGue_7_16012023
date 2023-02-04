import AproposCSS from '../../style/Apropos.module.css'
import Banner from '../../components/Banner'
import Collapses from '../../components/Collapses'

import { propList } from '../../data/propList'

function Apropos() {

  



    return (

      <div>

        <Banner 
            
            avec = {false}
        
        />

        <div className={AproposCSS.sectionCollapses}>

              {propList.map((propri)=>(

                    <Collapses key={propri.id} 
                    
                        nom = {propri.nom}
                        definition = {propri.definition}
                    
                    /> 
              ))}
        </div>

      </div>
    );
  }
  
  export default Apropos;