import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/LOGO.png'
import HeaderCSS from '../../style/Header.module.css'


const StyledLink = styled(Link)`
  text-decoration: ${(props)=>props.surlignage};
`

function Header(props) {
  
  const accueil = props.accueil
  const aprop = props.aprop
  
  return (
    <nav>

      <Link to="/">
        <img alt="logo de kasa" src={Logo} />
      </Link>

      <div>

        {accueil ?(
          
          <StyledLink to="/" className={HeaderCSS.lien} surlignage={"underline"}>Accueil</StyledLink>
        
        ):(
          
          <StyledLink to="/" className={HeaderCSS.lien} surlignage={"none"}>Accueil</StyledLink>
          
        )        
        } 

        {aprop ?(
          
          <StyledLink to="/a_propos" className={HeaderCSS.lien} surlignage={"underline"}>A propos</StyledLink>
          
        ):(
          
          <StyledLink to="/a_propos" className={HeaderCSS.lien} surlignage={"none"}>A propos</StyledLink>
          
        )        
        } 

      </div>  
        
    </nav>
  )
}

export default Header