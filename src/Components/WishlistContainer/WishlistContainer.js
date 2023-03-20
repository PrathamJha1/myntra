import { Delete } from '@mui/icons-material';
import React, { useContext } from 'react'
import { UserContext } from '../Context/AuthContext';

export default function WishlistContainer({value,key}) {
    console.log(value);
    const {wishlist,setWishList} = useContext(UserContext);
    const handleEvent=()=>{
      setWishList(wishlist.filter((ele=>{
        console.log(ele)
        if(ele!==value){
          return true;
        }
      })))
  }
  return (
    <div style={{width:"100%",justifyContent:"space-between"}} className="d-flex align-items-center">
        <img src={value[0]} height="50px" width="50px"/>
        <span style={{width:"70%",textAlign:"center"}}>{value[1]}</span>
        <a className='delete' style={{color:"red"}} onClick={()=>(handleEvent(value))}><Delete/></a>
    </div>
  )
}
