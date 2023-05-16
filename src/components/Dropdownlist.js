import React, { useState } from 'react'
import { styled } from 'styled-components';

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
const Dropdownlist = () => {
    const [value,setValue]=useState("");

    const handlevalue =(data)=>{
        setValue(data);
    }
  return (
    <>
      <Select>
        <span onClick={(e)=>handlevalue("Yes")}  style={{cursor:"pointer"}}>Yes</span>
        <span onClick={(e)=>handlevalue("Probably not")}  style={{cursor:"pointer"}}>Probably not</span>
      </Select>
      <p>{value}</p>
    </>
    
  )
}

export default Dropdownlist
