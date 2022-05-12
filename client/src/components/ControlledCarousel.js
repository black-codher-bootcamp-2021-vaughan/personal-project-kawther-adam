import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}
   >
      <Carousel.Item>
 
        <img
          className="d-block w-100"
          src="/images/Banner1.png"
          alt="First slide"
          padding="10px"
         
          marginTop="50px"
          objectFit= "contain"
          maxWidth= "100%"
          maxHeight= "100%"
          height= "500px"
                 />
     
      </Carousel.Item>
      <Carousel.Item>
      
        <img
          className="d-block w-100"
          src="/images/Banner4.png"
          alt="Second slide"
         
          padding="10px"
         
          marginTop="50px"
          objectFit= "contain"
          maxWidth= "100%"
          maxHeight= "100%"
          height= "500px"
         
          // objectFit="cover"
          // objectPosition="50% 50%"
      
        />
        
      </Carousel.Item>
      <Carousel.Item>
   
        <img
          className="d-block w-100"
          src="/images/Banner3.png"
          alt="Third slide"
          padding="10px"
         
          marginTop="50px"
          objectFit= "contain"
          maxWidth= "100%"
          maxHeight= "100%"
          height= "500px"
        
     />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
