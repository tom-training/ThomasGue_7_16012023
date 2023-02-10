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

`



function Appart({titre, id}){

    return(

            <AppartLink to ={"/card/" + id}>
                {titre} 
            </AppartLink>        


            
    )
}

export default Appart