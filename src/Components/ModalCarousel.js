import React,{useState} from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { Typography } from "@mui/material";
import ftShirt from "./productImages/ftshirt.jpeg";
import fwShirt from "./productImages/fwshirt.jpeg";
import mblcakShirt from "./productImages/mblackshirt.jpeg";
import hmgoepprod from "./productImages/hmgoepprod.jpeg";
export default function ModalCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel indicators={false} activeIndex={index} onSelect={handleSelect} style={{background:"grey"}}>
      <Carousel.Item>
        <div className="flex-row justify-content-center w-100">
          <img src={ftShirt} height="700px" width="500px" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="flex-row justify-content-center">
          <img src={fwShirt} height="700px" width="500px"/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="flex-row justify-content-center w-100">
          <img src={mblcakShirt} height="700px" width="500px"/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="flex-row justify-content-center w-100">
          <img src={hmgoepprod} height="700px" width="500px"/>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
