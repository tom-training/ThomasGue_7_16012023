import styled from 'styled-components'




const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  border: 3px dotted blue;
`

function Footer() {
 
  return (
    <FooterContainer>
      Salut C'est le FOOTER
    </FooterContainer>
  )
}

export default Footer