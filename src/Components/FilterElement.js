import React ,{useContext, useState} from 'react'
import { UserContext } from './Context/AuthContext';
export default function FilterElement({value,i}) {
    const [isCheck, setIsChecked] = useState(true);
    const {fil,setFil} = useContext(UserContext);
    const handleFilter = (value) =>{
        if(isCheck){
            let data  = Object.values(fil);
            setFil(Object.values(fil).filter(arr=>{
              return (arr !== value);
            }))
            setFil(current=>[...current,value])
          }
          else{
            setFil(Object.values(fil).filter(arr=>{
              return (arr !== value);
            }))
          }
        setIsChecked(!isCheck);
    }   
  return (
    <>
          <div
            key={i}
            >
            <button
                  
              style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  columnGap: "5px",
                  width: "6rem",
                  background:"white",
                  border:"none"
                }}
               
              key={i}
            >
              <input id={value} type="checkbox" value={value}  key={i}  onClick={()=>handleFilter(value)}/>
              <label className="cat" style={{ marginTop: "-2px" }} for={value}>{value}</label>
            </button>
          </div>
    </>

  )
}
