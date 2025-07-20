import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing image files
import gap1 from "../components/images/biodiversity/1.webp";
import gap2 from "../components/images/biodiversity/2.webp";
import gap3 from "../components/images/biodiversity/3.webp";


export default function Slick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const sliderStyle = {
    margin: "10px 0 0 0",
    height: "100vh", // Full viewport height for the slider
  };

  const imageStyle = {
    display: "block",
    margin: "0 auto", // Centers the image inside its container
    maxWidth: "100%", // Ensures the image doesn't exceed container size
    height: "auto", // Maintains aspect ratio
  };

  return (
    <div className="SectionWrapperProject">
      <h2>
        FutureMARES Climate change impacts on marine biodiversity and ecosystem
        services – seeking nature-based solutions
      </h2>
      <p>
        Our lab, in the framework of the EU HORIZON2020 FutureMARES project, is
        examining the relations between climate change, marine biodiversity and
        ecosystem functions and services. Our activities are designed around two
        Nature-based Solutions (NBS): · Effective Conservation (NBS2) ·
        Sustainable Harvesting of Marine Resources (NBS3) ​ FutureMARES is a
        consortium of 32 research institutions with over 30 storylines across
        European Seas including the southeastern Mediterranean on the Israeli
        coast. Our goal is to provide science-based policy advice on how best to
        use NBS to protect biodiversity and ecosystem services in a future
        climate and under increasing bioinvasions.
      </p>
      <div style={sliderStyle}>
        <Slider {...settings}>
          <div>
            <img src={gap1} style={imageStyle} />
          </div>
          <div>
            <img src={gap2} style={imageStyle} />
          </div>
          <div>
            <img src={gap3} style={imageStyle} />
          </div>
        </Slider>
      </div>
    </div>
  );
}
