import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/LOGO.png'

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  color: #FF6060;
`

const NavLink = styled(Link)`
color: #FF6060;
margin-left: 10px;

`

function Header() {
  return (
    <NavContainer>

      <Link to="/">
        <img alt="logo de kasa" src={Logo} />
      </Link>

      <div>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a_propos"> A propos </NavLink> 
      </div>
    </NavContainer>
  )
}

export default Header