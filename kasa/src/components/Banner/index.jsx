import BannerImgSlogan from '../../assets/BannerSlogan.png'
import BannerImg from '../../assets/Banner.png'

import PropTypes from 'prop-types'

function Banner(props){

    const avec = props.avec

    return(

            <div>

                <div>{avec && <img src={BannerImgSlogan} alt="Chez vous partout et ailleurs!" />}</div> 
        
            
                <div>{avec === false && <img src={BannerImg} alt="Chez vous partout et ailleurs!" />}</div> 


            </div>
               
            
        
        


    )
}

Banner.propTypes = {

    avec: PropTypes.bool
}

export default Banner