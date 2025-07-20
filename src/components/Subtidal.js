import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing image files
import gap1 from "../components/images/Subtidal/1.webp";
import gap2 from "../components/images/Subtidal/2.webp";
import gap3 from "../components/images/Subtidal/3.webp";
import gap4 from "../components/images/Subtidal/4.webp";
import gap5 from "../components/images/Subtidal/5.webp";
import gap6 from "../components/images/Subtidal/6.webp";
import gap7 from "../components/images/Subtidal/7.webp";
import gap8 from "../components/images/Subtidal/8.webp";
import gap9 from "../components/images/Subtidal/9.webp";

import gap11 from "../components/images/Subtidal/11.webp";
import gap12 from "../components/images/Subtidal/12.webp";
import gap13 from "../components/images/Subtidal/13.webp";
import gap14 from "../components/images/Subtidal/14.webp";

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
      <h2>Subtidal reef surveys</h2>
      <p>
        Since 2010 we have been conducting surveys on subtidal reefs along the
        Israeli Mediterranean coast as well as during three expeditions to other
        Mediterranean regions (Cyprus, Crete and southern Italy). In these
        surveys we learn about the current status of Levant Mediterranean reefs,
        create a quantitative baseline of reef communities for monitoring,
        describe the community variability in space and time (seasons) and study
        the impacts of overfishing and the effectiveness of marine reserves. We
        survey fish, microalgae and macro-invertebrates along transects using a
        variety of methods. Recently, we added a mini-ROV to our arsenal and it
        was already in action this year surveying our northern reefs.
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
          <div>
            <img src={gap4} style={imageStyle} />
          </div>
          <div>
            <img src={gap5} style={imageStyle} />
          </div>

          <div>
            <img src={gap6} style={imageStyle} />
          </div>
          <div>
            <img src={gap7} style={imageStyle} />
          </div>
          <div>
            <img src={gap8} style={imageStyle} />
          </div>
          <div>
            <img src={gap9} style={imageStyle} />
          </div>
        </Slider>
      </div>
      <h2>Our new mini-ROV in action </h2>

      <Slider {...settings}>
        <div>
          <img src={gap11} style={imageStyle} alt="Achiv 2 reef view" />
        </div>
        <div>
          <img src={gap12} style={imageStyle} alt="Achziv reef close-up" />
        </div>
        <div>
          <img src={gap13} style={imageStyle} alt="Bio reef biodiversity" />
        </div>
        <div>
          <img src={gap14} style={imageStyle} alt="Brachi reef organisms" />
        </div>
      </Slider>
    </div>
  );
}
