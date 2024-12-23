import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./carouselImgData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./carousel.module.css";
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => {
          return <img key={index} src={imageItemLink} />;
        })}
      </Carousel>
      <div className={classes["hero__img--bottom"]}></div>
    </div>
  );
}

export default CarouselEffect;
