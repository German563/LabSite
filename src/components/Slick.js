import React from "react";
import Slider from "react-slick";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import algaeImage from "../components/images/algae.webp"; 
import diversImage from "../components/images/divers.webp"; 
import girlsImage from "../components/images/girls.webp"; 
import octopusImage from "../components/images/octopus.webp"; 
import snailImage from "../components/images/snail.webp"; 
import turtelsImage from "../components/images/turtels.webp"; 

export default function Slick() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 4000,
    infinite: true,
  };
  const sliderStyle = {
    margin: "-210px 0 0 0",
    height: "100vh", // Makes the slider take the full viewport height
  };

  const imageStyle = {
    display: "block",
    margin: "0 auto", // Centers the image inside its parent container
    maxWidth: "100%", // Ensures the image doesn't exceed its container size
    height: "auto", // Maintains aspect ratio
  };

  return (
    <div className="slickSection" style={sliderStyle}>
      <Slider {...settings}>
        <div>
          <img src={turtelsImage} style={imageStyle} alt="Slide 1" />
        </div>
        <div>
          <img src={diversImage} style={imageStyle} alt="Slide 1" />
        </div>
        <div>
          <img src={girlsImage} style={imageStyle} alt="Slide 1" />
        </div>
        <div>
          <img src={octopusImage} style={imageStyle} alt="Slide 1" />
        </div>
        <div>
          <img src={snailImage} style={imageStyle} alt="Slide 1" />
        </div>
        <div>
          <img src={algaeImage} style={imageStyle} alt="Slide 1" />
        </div>
      </Slider>
    </div>
  );
}
