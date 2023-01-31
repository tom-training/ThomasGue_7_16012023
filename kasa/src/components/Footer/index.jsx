import styled from 'styled-components'
import LogoFooter from '../../assets/LogoFooter.png'
import Copyright from '../../assets/copyright.png'
import FooterCSS from '../../style/Footer.module.css'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 60px;
  
  background-color: black;
  color: white;
`

function Footer() {
 
  return (

    <FooterContainer>

      <img alt="logo de kasa" src={LogoFooter} className={FooterCSS.img} />

      <img alt="all right reserved" src={Copyright} />

    </FooterContainer>

  )
}

export default Footer