import React, { useState, useRef } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Typography } from "@mui/material";
function CustomCarousal(props) {
  const [hover, setHover] = useState(false);
  const [selectedIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <Carousel
      pause={false}
      defaultActiveIndex={0}
      interval={hover ? 1000 : null}
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      indicators={false}
      controls={false}
      
    >
      <Carousel.Item>
        <div className="flex-row justify-content-center w-100">
          <img src={props.items.link} width={200} height={200}/>
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <div className="flex-row justify-content-center w-100">
          <img src={props.items.data[0]}  height={200}/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="flex-row justify-content-center w-100">
          <img src={props.items.data[1]} height={200} />
        </div>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CustomCarousal;
