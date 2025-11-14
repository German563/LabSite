import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing image files
import pureefyIMG from "../components/images/Pureefy/2025-10-22_14-04-49.png";
import gap1 from "../components/images/Pureefy/1 (5).jpg";
import gap2 from "../components/images/Pureefy/1 (1).jpg";
import gap3 from "../components/images/Pureefy/1 (2).jpg";
import gap4 from "../components/images/Pureefy/1 (3).jpg";
import gap5 from "../components/images/Pureefy/1 (4).jpg";


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
      <h2>Overall Concept</h2>
      <p>
        Over the last century and more so in recent decades, the Eastern
        Mediterranean and Middle East region have warmed significantly faster
        than most other inhabited regions. In the marine environment, marine
        heatwaves are known to severely affect marine ecosystems.
        Simultaneously, the Eastern Mediterranean is a global hotspot of marine
        bioinvasions that rapidly transform the biodiversity of coastal regions.
        Research in the last decade has shown evidence of dramatic loss of
        native species in several important groups such as molluscs and
        echinoderms, driven by ocean warming. Marine pollutants, like heavy
        metals and litter, are additional stressors which can be transported
        from sediment/water column and bio-accumulate in food webs with direct
        impact on aquatic organisms and humans. Marine litter, especially
        microplastics, can be ingested by marine organisms resulting in physical
        damage, transfer through the food webs or death to individuals.
        Effective management and policy are therefore required for the
        conservation of regional biota and its ecological functioning and
        services. Hence, good knowledge of the environment and the levels of
        threats and risks is required, which is an area in which Cyprus
        currently lacks skills, capacities, and knowledge. It is also defined as
        an important horizontal sector in the recently updated Smart
        Specialisation Strategy for Cyprus. In response to the above needs,
        PUREEF-Y is proposed as a transformational Coordination and Support
        action capable of enhancing the science and innovation capacity of CMMI,
        Cyprus and Europe in the sectors of chemical oceanography and marine
        ecology, focusing on Climate Change and other anthropogenic stressors.
        It will contribute to closing the gap between actors from the EU
        Widening Area and strong innovators of the EU through knowledge transfer
        and exchange of best practices between research institutions, thus
        transforming CMMI into a leading institution in marine ecology and
        oceanography at the international level.
      </p>
      <img src={pureefyIMG} />

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

        </Slider>
      </div>
    </div>
  );
}
