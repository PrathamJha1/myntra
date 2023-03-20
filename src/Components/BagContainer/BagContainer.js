import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { UserContext } from '../Context/AuthContext'
import Image from "../productImages/plain-black-t-shirt-wyo.webp";
import { Delete } from '@mui/icons-material';
export default function BagContainer({value}) {
    const {bag,setBag} = useContext(UserContext); 
    console.log(value);
    const handleEvent=()=>{
        setBag(bag.filter((ele=>{
          console.log(ele)
          if(ele!==value){
            return true;
          }
        })))
    }
  return (
    <Container fluid>
        <div style={{width:"100%",justifyContent:"space-between"}} className="d-flex align-items-center">
        <img src={value[0]} height="50px" width="50px"/>
        <span style={{width:"70%",textAlign:"center"}}>{value[1]}</span>
        <a style={{color:"red"}} onClick={()=>handleEvent()}><Delete/></a>
    </div>
    </Container>
  )
}
