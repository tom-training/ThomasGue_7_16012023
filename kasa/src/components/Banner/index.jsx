import BannerImgSlogan from '../../assets/BannerSloganMob.svg'
import BannerImg from '../../assets/Banner.png'
import BannerCSS from '../../style/Banner.module.css'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledImg = styled.img`
  filter: ${(props)=>props.opacite};
`

function Banner(props){

    const avec = props.avec

    return(

            <div className = {BannerCSS.cadreBanner}>
                    
                {avec && 
                
                <div className={BannerCSS.ssCadreBanner}>
                    <StyledImg src={BannerImgSlogan} opacite={"brightness(60%)"} alt="Chez vous partout et ailleurs!" className={BannerCSS.imgBanner} />
                    
                    <p className={BannerCSS.imgTexte}>Chez vous, partout et ailleurs</p>
                </div>    
                }
                            
                {avec === false && 
                    <StyledImg src={BannerImg} opacite={"brightness(90%)"} alt="Chez vous partout et ailleurs!" className={BannerCSS.imgBanner} />
                } 

            </div>
    )
}

Banner.propTypes = {

    avec: PropTypes.bool
}

export default Banner