import { Link } from 'react-router-dom';
import styled from 'styled-components'

const AppartLink = styled(Link)`

      
    border-radius: 10px;
    height: 340px;
    width: 340px;
    text-decoration: none;
    font-family: 'Monserrat';
    color: #FFFFFF;

    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    margin: 10px;
    padding: 10px;
    
    background: linear-gradient(180deg, #FF6060 0%, #000000 100%);

    position: relative;

`

const StyledImg = styled.img`

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
    padding: 0;
    border-radius: 10px;
`

const Styledp = styled.p`
    color: white;
    z-index: 1;

`



function Appart({titre, id, cover}){

    return(

            <AppartLink to ={"/card/" + id}>
                <Styledp >{titre}</Styledp>

                <StyledImg src={cover} alt="première vue sur l'appartement" />    
            </AppartLink>        
            
    )
}

export default Appart