import React from "react";
import { Carousel } from "react-responsive-carousel";



const ProductCarousel = () => {



 const renderCustomThumbs = () => {

    return [
        <img className="rounded-xl border-none"
          key="01"
          src="./images/1.jpg"
          alt="First Thumbnail"
          height="70"
        />,
        <img className="rounded-xl"
          key="02"
          src="./images/2.jpg"
          alt="Second Thumbnail"
          height="70"
        />,
        <img className="rounded-xl"
          key="03"
          src="./images/3.jpg"
          alt="Third Thumbnail"
          height="70"
        />,
        <img className="rounded-xl"
          key="03"
          src="./images/4.jpg"
          alt="Third Thumbnail"
          height="70"
        />,
        <img className="rounded-xl object-contain"
          key="03"
          src="./images/9.jpg"
          alt="Third Thumbnail"
          height="70"
        />,
        <img className="rounded-xl"
          key="03"
          src="./images/8.jpg"
          alt="Third Thumbnail"
          height="70"
        />,
        <img className="rounded-xl"
          key="03"
          src="./images/2.jpg"
          alt="Third Thumbnail"
          height="70"
        />,
        <img className="rounded-xl"
          key="03"
          src="./images/1.jpg"
          alt="Third Thumbnail"
          height="70"
        />,
    ]
  
    }
  return (
    <Carousel showArrows={false} showStatus={false} thumbWidth={80} showIndicators={false} renderThumbs={renderCustomThumbs} >
        <img
          className="object-contain"
          alt=""
          src="./images/1.jpg"
        />
        <img
          className="object-contain"
          alt=""
          src="./images/2.jpg"
        />
        <img
          className="object-contain"
          alt=""
          src="./images/3.jpg"
        />
        <img
          className="object-contain"
          alt=""
          src="./images/4.jpg"
        />
        <img
          className="object-cover"
          alt=""
          src="./images/9.jpg"
        /> 
        <img
          className="object-contain"
          alt=""
          src="./images/8.jpg"
        />
        <img
          className="object-contain"
          alt=""
          src="./images/2.jpg"
        />
        <img
          className="object-contain"
          alt=""
          src="./images/1.jpg"
        />
    </Carousel>
  );
};

export default ProductCarousel;
