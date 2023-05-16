import React, { useEffect, useState } from 'react'
import {styled} from "styled-components";
import Dropdownlist from './Dropdownlist';

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
    let [select , setSelect]=useState(false);
    const [value,setValue]=useState("");
    const handselect =()=>{
        setSelect(value=>!value);
        setValue(" ");
    }
    
    

    const handlevalue =(e)=>{
        setValue(e.target.textContent);
    }
  return (
    <Container>
        <Heading>
           <span>Should you use a dropdown? &nbsp;</span> 
           <span>{value}</span> 
        </Heading>
            <Datadiv onClick={handselect}>
                <Data >Select</Data>
                <img style={{width:"10%"}} src='https://cdn-icons-png.flaticon.com/128/2722/2722987.png'/>
            </Datadiv>
            <Select style={{display:`${select?'flex':'none'}`}}>
                <span  onClick={handlevalue} style={{cursor:"pointer"}}>Yes</span>
                <span  onClick={handlevalue} style={{cursor:"pointer"}}>Probably not</span>
            </Select>
            
            
    </Container>
  )
}

export default Dropdown
