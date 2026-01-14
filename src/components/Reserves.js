import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing image files
import gap1 from "../components/images/reserves/2 (1).jpg";
import gap2 from "../components/images/reserves/2 (2).jpg";
import gap3 from "../components/images/reserves/2 (3).jpg";
import gap4 from "../components/images/reserves/2 (4).jpg";
import gap5 from "../components/images/reserves/2 (5).jpg";
import gap6 from "../components/images/reserves/2 (6).jpg";
import gap7 from "../components/images/reserves/2 (7).jpg";
import gap8 from "../components/images/reserves/2 (8).jpg";
import gap9 from "../components/images/reserves/2 (9).jpg";



export default function Slick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
      <h2>European Reef Fish Monitoring Pilot:</h2>
      <h3>Context</h3>

      <p>
        Several marine policies and biodiversity management frameworks require
        the monitoring and assessment of the ecological status of European reef
        fish. These include the Marine Strategy Framework Directive (MSFD),
        Regional Seas Conventions (RSC) such as OSPAR, HELCOM, and the Barcelona
        Convention, as well as requirements for Marine Protected Areas (MPAs),
        Other Effective Conservation Measures (OECMs), and Offshore Wind Farms
        (OWFs). However, current observational methods across Europe are highly
        heterogeneous, and many traditional techniques (e.g., nets and pots) are
        invasive—causing fish mortality and damaging sensitive habitats. This
        creates an urgent need for non-invasive, standardised, and interoperable
        monitoring methods. Additionally, European reef fish experts are not
        well integrated into a coordinated network, making it challenging to
        harmonise monitoring protocols and data analyses needed to compute Good
        Environmental Status (GES) indicators and Essential Biodiversity
        Variables (EBVs) at the pan-European scale.
      </p>

      <h3>Main Objectives</h3>
      <p>
        The main objectives of this pilot are to develop and test homogenised
        protocols for two traditional methods—Underwater Visual Census (UVC) and
        Baited Remote Underwater Video (BRUV)—together with a novel
        complementary approach: metabarcoding of environmental DNA (eDNA). The
        pilot aims to validate an integrated methodological framework, optimise
        and harmonise sampling designs across methods and partners, and produce
        a comprehensive methodological guideline for reef fish monitoring under
        public policy frameworks such as the MSFD, RSC, and MPAs.
      </p>

      <h3>Main Activities</h3>
      <p>
        The main activities carried out during this pilot include developing
        widely accepted protocols for monitoring fish assemblages using UVC,
        BRUV, and eDNA; performing fieldwork to test the protocols and collect
        new data; and, based on statistical power analyses and expert feedback,
        proposing improved sampling designs and long-term monitoring strategies
        for rocky reef fish in European and adjacent seas.
      </p>

      <div style={sliderStyle}>
        <Slider {...settings}>
          <div>
            <img src={gap1} style={imageStyle} alt="Reef Fish Monitoring 1" />
          </div>
          <div>
            <img src={gap2} style={imageStyle} alt="Reef Fish Monitoring 2" />
          </div>
          <div>
            <img src={gap3} style={imageStyle} alt="Reef Fish Monitoring 2" />
          </div>
          <div>
            <img src={gap4} style={imageStyle} alt="Reef Fish Monitoring 2" />
          </div>
          <div>
            <img src={gap5} style={imageStyle} alt="Reef Fish Monitoring 2" />
          </div>
          <div>
            <img src={gap6} style={imageStyle} alt="Reef Fish Monitoring 2" />
          </div>
          <div>
            <img src={gap7} style={imageStyle} alt="Reef Fish Monitoring 2" />
          </div>
          <div>
            <img src={gap8} style={imageStyle} alt="Reef Fish Monitoring 2" />
          </div>
          <div>
            <img src={gap9} style={imageStyle} alt="Reef Fish Monitoring 2" />
          </div>
        </Slider>
      </div>
    </div>
  );

}
