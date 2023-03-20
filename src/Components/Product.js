import { Container } from "react-bootstrap";
import React, { useContext, useState } from "react";
import blackShirt from "./productImages/mblackshirt.jpeg";
import blueShirt from "./productImages/blueshirt.jpeg";
import fpShirt from "./productImages/fpshirt.jpeg";
import ftShirt from "./productImages/ftshirt.jpeg";
import fwShirt from "./productImages/fwshirt.jpeg";
import mblcakShirt from "./productImages/mblackshirt.jpeg";
import hmgoepprod from "./productImages/hmgoepprod.jpeg";
import "../App.css";
import Filters from "./Filters";
import CustomCard from "./CustomCard";
import { UserContext } from "./Context/AuthContext";

var dataSet = [
    {
      id:1,
      link: blackShirt,
      title: "men Tshirt",
      price: 1800,
      brand: "Parx",
      data: [fpShirt, ftShirt],
      rating: 4.2,
      strikedOff: 1999,
      discount: 10,
      description: "Printed RoundNeck Pure Cotton",
      filt: ["RoundNeck", "Parx", "Men"],
      size: "M",
    },
    {
      id:2,
      link: blackShirt,
      title: "men Tshirt",
      price: 2500,
      data: [blueShirt, ftShirt],
      brand: "RoadStar",
      rating: 4.4,
      strikedOff: 2999,
      discount: 17,
      description: "Men Solid Oversized",
      filt: ["Collar", "Men", "Men"],
      size: "XL",
    },
    {
      id:3,
      link: ftShirt,
      data: [fpShirt, fwShirt],
      title: "men Tshirt",
      price: 1500,
      brand: "RoadStar",
      rating: 3.8,
      strikedOff: 1650,
      discount: 10,
      description: "Typography Printed Tshirt",
      filt: ["Collar", "Women", "RoadStar"],
      size: "S",
    },
    {
      id:4,
      link: fpShirt,
      data: [hmgoepprod, mblcakShirt],
      title: "",
      price: 2500,
      brand: "Parx",
      rating: 3.9,
      strikedOff: 2999,
      discount: 17,
      description: "Some Random stuff",
      filt: ["RoundNeck", "Women", "Parx"],
      size: "S",
    },
    {
      id:5,
      link: fpShirt,
      data: [hmgoepprod, mblcakShirt],
      title: "",
      price: 2500,
      brand: "RoadStar",
      rating: 4.9,
      strikedOff: 2999,
      discount: 17,
      description: "Some Random stuff",
      filt: ["RoundNeck", "Women", "RoadStar"],
      size: "S",
    },
  ];
  let originalDataset =dataSet;



const Product = ({ search}) => {
  const [itemHovered, setItemHovered] = useState(false);
  const {fil,setFil} = useContext(UserContext);
  const [sorter,setSorter] = useState("");
const handler = (e) =>{
   setSorter(e.target.value)
   console.log(e.target.value);
   if(e.target.value === "Price: High To Low"){
      dataSet.sort(function(a,b){
         return a.price - b.price;
      }).reverse()
   }
   if(e.target.value === "Price: Low To High"){
      dataSet.sort(function(a,b){
         return a.price - b.price;
      })
   }
   if(e.target.value === "Rating: High To Low"){
      dataSet.sort(function(a,b){
         return a.rating - b.rating;
      }).reverse()
      
   }
   if(e.target.value === "Rating: Low To High"){
      dataSet.sort(function(a,b){
         return a.rating - b.rating;
      })
     

   }
   if(e.target.value === "Recommended"){
      dataSet=originalDataset
      dataSet.sort();
   }
}
// console.log(Object.values(fil));
  return (
    <>
      <div
        style={{
          marginLeft: "78.5%",
          marginBottom: "1%",
          fontSize: "16px",
        }}
      >
         <span>Sort By:</span>
        <select
          //    onChange={handleSort}
          className="sortBy"
          style={{
            marginRight: "4px",
            background: "white",
            padding: "1%",
            width: "60%",
          }}
          onChange={(e)=>{handler(e)}}
        >
          <option name="" >
            <span style={{ fontSize: "12px", fontWeight: "bold" }}>Recommended</span>
          </option>
          <option name="high2low">
            
            <span style={{ fontSize: "12px", fontWeight: "800" }}>
              Price: High To Low
            </span>
          </option>
          <option name="low2high">
            <span style={{ fontSize: "12px", fontWeight: "800" }}>
              Price: Low To High
            </span>
          </option>
          <option>
            
            <span style={{ fontSize: "12px", fontWeight: "800" }}>
              Rating: High To Low
            </span>
          </option>
          <option>
            
            <span style={{ fontSize: "12px", fontWeight: "800" }}>
              Rating: Low To High
            </span>
          </option>
        </select>
      </div>

      <Container fluid style={{ display: "flex" }}>
        {/* Left Sidebar */}

        <>
          {/* <Filtering /> */}

          <Filters />
          {/* Right side container */}

          <div className="productContainer">
            {dataSet.map((e) => {

               var f=false;
               let count = Object.values(fil).length;
               Object.values(fil).map(ele=>{
                if(e.filt.includes(ele)){
                  f=true;
                  count--;
                }
               })
                if(count === 0)f=true;
            
               if((search === "" || e.brand.includes(search) || e.description.includes(search )) &&  (f || Object.values(fil).length === 0)){
                  
                  return <CustomCard e={e} name="custom"/>;
               }
            })}
          </div>
        </>
      </Container>
    </>
  );
};

export default Product;
