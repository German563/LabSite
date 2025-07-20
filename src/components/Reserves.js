import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing image files
import gap1 from "../components/images/reserves/1.webp";
import gap2 from "../components/images/reserves/2.webp";


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
      <h2>Study of Marine Reserves:</h2>
      <h3>Marine reserves: </h3>
      <p>
        The Mediterranean Sea is exposed to multiple, cumulative, human threats
        that severely compromise the integrity of its marine ecological
        communities and biodiversity – a tough challenge for conservation
        management. The state-of-the-art tool of marine conservation management
        that has proven effective in restoring benthic marine ecosystems
        worldwide is the use of science-based marine protected areas (MPAs).
        Effective MPAs can boost not only biodiversity and act as an ecosystem
        “insurance policy”, but can potentially also serve as a source of
        renewal for depleted fisheries outside the protected area.
      </p>
      <div style={sliderStyle}>
        <Slider {...settings}>
          <div>
            <img src={gap1} style={imageStyle} />
          </div>
          <div>
            <img src={gap2} style={imageStyle} />
          </div>
        </Slider>
      </div>
    </div>
  );
}
