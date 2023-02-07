import AproposCSS from '../../style/Apropos.module.css'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'

import { propList } from '../../data/propList'

function Apropos() {

  



    return (

      <div>

        <Banner 
            
            avec = {false}
        
        />

        <div className={AproposCSS.sectionCollapses}>

              {propList.map((propri)=>(


                  <div className={AproposCSS.lesBlocs}>
                    <Collapse key={propri.id} 
                    
                        nom = {propri.nom}
                        descrip = {propri.definition}
                    
                    />
                  </div>   
              ))}
        </div>

      </div>
    );
  }
  
  export default Apropos;