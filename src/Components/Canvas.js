import React, { useContext, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import blackShirt from "./productImages/mblackshirt.jpeg";
import blueShirt from "./productImages/blueshirt.jpeg";
import fpShirt from "./productImages/fpshirt.jpeg";
import ftShirt from "./productImages/ftshirt.jpeg";
import CustomCard from "./CustomCard";
import "../App.css";
import BagContainer from "./BagContainer/BagContainer";
import { UserContext } from "./Context/AuthContext";
import WishlistContainer from "./WishlistContainer/WishlistContainer";
var dataSet = [
  {
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
];

export default function Canvas({ setShow, show ,property}) {
  const handleClose = () => setShow(false);
  const {bag,setBag,wishlist} = useContext(UserContext);
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end" scroll={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{property === "similar" ? "Similar Products" : property === "bag" ?"Bag":"Wishlist"}</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {property === "similar" && (
            <div className="similarContainer">
              {dataSet.map((e) => {
                return <CustomCard e={e} name="similar" />;
              })}
            </div>
          )}
          {property === "wishlist" && 
            wishlist.map((value,i)=>{
              return(
                <WishlistContainer key={i} value={value}/>
              );
            })
          }
          {property === "bag" && <div>
            {bag.map((value,i)=>{
              return (
              <BagContainer key={i} value={value}/>);
            })}
            
            </div>}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
