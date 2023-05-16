import React, { useEffect, useState } from 'react'
import {styled} from "styled-components";
import Dropdownlist from './Dropdownlist';

// Styled components css
const Container = styled.div`
    width: 50%;
    height: 305px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    background-color: #2ef9f9;
    flex-direction: column;
`;
const Heading = styled.h1``;
const Datadiv= styled.div`
    width: 35%;
    height: 8%;
    display: flex;
    align-items: center;
    background-color: #fdfdfd;
    padding-left: 12px;
    font-size: 21px;
    border-radius: 3px;
    margin: 4px 0px;
    padding: 15px;
    justify-content: space-between;
    margin-right: 10%;
    cursor: pointer;
`;
const Data = styled.p``;
const Select = styled.div`
        width: 45%;
    height: 25%;
    background-color: #fdfdfd;
    padding-left: 12px;
    font-size: 21px;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px;
`;


const Dropdown = () => {

    let [select , setSelect]=useState(false);//Hooks used for boolean value to hide and show for select option.
    const [value,setValue]=useState("");//Hooks used for storing the  value of  option.

    //Click handling boolean
    const handselect =()=>{ 
        setSelect(value=>!value);
        setValue(" ");
    }
    
    
    //Click handling for storing a value
    const handlevalue =(e)=>{ 
        setValue(e.target.textContent);
    }

  return (
    <Container>
        <Heading>
           <span>Should you use a dropdown? &nbsp;</span> 
           <span>{value}</span>  {/* Displaying a value */}
        </Heading>
            <Datadiv onClick={handselect}> {/* click handling for boolean value true and false */}
                <Data >Select</Data>
                <img style={{width:"10%"}} src='https://cdn-icons-png.flaticon.com/128/2722/2722987.png'/>
            </Datadiv>
            
            <Select style={{display:`${select?'flex':'none'}`}}> {/* Here hide and show boolean using */}
                <span  onClick={handlevalue} style={{cursor:"pointer"}}>Yes</span>
                <span  onClick={handlevalue} style={{cursor:"pointer"}}>Probably not</span>
            </Select>
            
            
    </Container>
  )
}

export default Dropdown
