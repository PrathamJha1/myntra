import React, { useContext, useState } from "react";
import "./ParticularProduct.css";
import fwShirt from "./Components/productImages/header_t-shirts2.avif";
import Image from "./Components/productImages/plain-black-t-shirt-wyo.webp";
import CustomModal from "./Components/CustomModal";
import { UserContext } from "./Components/Context/AuthContext";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ZoomIn } from "@mui/icons-material";
import { ZoomOut } from "@mui/icons-material";
import { Zoom } from "@mui/material";
export default function ParticularProduct(props) {
  const [show, setShow] = useState(false);
  const [size, setSize] = useState(null);
  const { bag, wishlist, setBag, setWishList } = useContext(UserContext);
  const handler = () => {
    if (size) {
      let data = [Image, size];
      setBag((current) => [...current, data]);
    } else {
      alert("Please select a size");
    }
  };

  return (
    <div className="pdp-details common-clearfix">
      {/* <CustomModal show={show} setShow={setShow}/> */}
      <div className="image-grid-container common clearfix">
        <div
          className="image-grid-col50"
          onClick={() => {
            setShow(true);
          }}
        >
          <div className="image-grid-imageContainer">
            <div className="image-grid-image">
              <TransformWrapper
                initialScale={1}
                initialPositionX={200}
                initialPositionY={100}
              >
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                  <React.Fragment>
                    {/* <div className="tools">
                      <button onClick={() => zoomIn()}><ZoomIn/></button>
                      <button onClick={() => zoomOut()}><ZoomOut/></button>
                      
                    </div> */}
                    <TransformComponent>
                      <img src={Image} alt="test" height="100%" width="100%" className="zoomable-image"/>
                      
                    </TransformComponent>
                  </React.Fragment>
                )}
              </TransformWrapper>
        
            </div>
            <div className="image-grid-skeletonLoader"></div>
          </div>
        </div>
        <div
          className="image-grid-col50"
          onClick={() => {
            setShow(true);
          }}
        >
          <div className="image-grid-imageContainer">
            <div className="image-grid-image">
              <img
                src={fwShirt}
                height="100%"
                width="100%"
                className="zoomable-image"
              />
            </div>
            <div className="image-grid-skeletonLoader"></div>
          </div>
        </div>
      </div>
      <div className="pdp-description-container">
        <div className="pdp-price-info">
          <h1 className="pdp-title">Dennis Lingo</h1>
          <h1 className="pdp-name">Men Pink Slim Fit Casual Shirt</h1>
          <div>
            <div className="index-overallRatingContainer">
              <div className="index-overallRating">
                <div>4.1 ⭐️</div>
                <span className="myntraweb-sprite index-starIcon index-productRatingsExcellentIcon sprites-productRatingsExcellentIcon"></span>
                <div className="index-separator">|</div>
                <div className="index-ratingsCount">17.4 Ratings</div>
              </div>
            </div>
            <p className="pdp-discount-container">
              <span className="pdp-price" tabIndex="0">
                <strong>₹599</strong>
              </span>
              <span style={{ fontSize: "20px", marginTop: "-4px" }}>MRP </span>
              <span
                className="pdp-mrp"
                style={{ textDecoration: "line-through" }}
              >
                {" "}
                &nbsp;₹1799
              </span>
              <span className="pdp-discount" style={{ marginTop: "-4px" }}>
                (Rs. 1250 OFF)
              </span>
            </p>
            <p className="pdp-selling-price">
              <span className="pdp-vatInfo">inclusive of all taxes</span>
            </p>
          </div>
        </div>
        <div className="sizes">
          <h4>Select Size</h4>
          <div
            className="size-buttons-buttonContainer d-flex align-items-center justify-content-start p-4"
            style={{ columnGap: "5%" }}
          >
            <button
              className=" size-buttons-size-button size-buttons-size-button-default"
              onClick={() => {
                setSize("36");
              }}
            >
              <p className="size-buttons-unified-size">36</p>
            </button>
            <button
              className=" size-buttons-size-button size-buttons-size-button-default"
              onClick={() => {
                setSize("38");
              }}
            >
              <p className="size-buttons-unified-size">38</p>
            </button>
            <button
              className=" size-buttons-size-button size-buttons-size-button-default"
              onClick={() => {
                setSize("40");
              }}
            >
              <p className="size-buttons-unified-size">40</p>
            </button>
            <button
              className=" size-buttons-size-button size-buttons-size-button-default"
              onClick={() => {
                setSize("42");
              }}
            >
              <p className="size-buttons-unified-size">42</p>
            </button>
            <button
              className=" size-buttons-size-button size-buttons-size-button-default"
              onClick={() => {
                setSize("44");
              }}
            >
              <p className="size-buttons-unified-size">44</p>
            </button>
          </div>
        </div>
        <div className="">
          <div
            className="pdp-action-container d-flex align-items-center justify-content-center"
            style={{ columnGap: "5%" }}
          >
            <div>
              <button
                className="btn btn-lg"
                style={{
                  width: "15rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  background: "crimson",
                }}
                onClick={() => {
                  handler();
                }}
              >
                <img
                  style={{ marginRight: "3%" }}
                  src="https://img.icons8.com/material-outlined/24/000000/shopping-bag--v1.png"
                  alt="icon"
                />
                ADD TO BAG
              </button>
            </div>
            <div className="pdp-add-to-wishlist pdp-button pdp-add-to-wishlist pdp-button pdp-flex pdp-center">
              <button
                className="btn btn-lg hov"
                style={{
                  width: "12rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid grey",
                }}
                onClick={() => {
                  setWishList(
                    Object.values(wishlist).filter((ele) => {
                      return ele !== Image;
                    })
                  );
                  setWishList((current) => [
                    ...current,
                    [Image, "Description"],
                  ]);
                }}
              >
                <img
                  style={{ marginLeft: "5%" }}
                  src="https://img.icons8.com/material-outlined/24/000000/like--v1.png"
                  alt=""
                />{" "}
                WISHLIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
