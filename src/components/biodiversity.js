import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing image files
import gap1 from "../components/images/biodiversity/1.jpg";
import gap2 from "../components/images/biodiversity/2.jpg";
import gap3 from "../components/images/biodiversity/3.jpg";


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
      <h2>BioBoost+</h2>
      <h3>Context</h3>
      <p>
        Developing rapid, informative, and robust biodiversity assessments is
        crucial to evaluate progress in evidence-based conservation and
        management strategies of marine biodiversity. BioBoost+ is designed to
        improve non-invasive, cost-effective, and high-frequency sampling and
        identification of marine biota through state-of-the-art AI technology
        using digital imagery. This includes real-time monitoring via camera
        networks and engagement with citizen science groups. These methods are
        applied across diverse taxa—from habitat-forming species (seagrass
        meadows, shellfish beds, macroalgal canopies) to ecological indicator
        species (coastal fish, lobsters, shorebirds), invasive species, and
        understudied groups such as microscopic plankton and rare fish.
        BioBoost+ strengthens biodiversity monitoring across European regional
        seas, from the Mediterranean to the North and Norwegian Seas, supporting
        restoration initiatives and Marine Protected Areas (MPAs).
      </p>

      <h3>Main Objectives</h3>
      <ol>
        <li>
          Harness biodiversity imaging to create end-to-end automated data
          streams, from image acquisition to indicator updates for conservation,
          restoration, and management.
        </li>
        <li>
          Scale up digital biodiversity data collection by engaging citizen
          science and diverse stakeholder communities, enabling
          multi-disciplinary monitoring at broader spatial scales.
        </li>
        <li>
          Automate seabed habitat analyses (e.g., seagrasses, shellfish beds,
          macroalgal forests) and enhance the use of drone and satellite images
          to map human pressures and evaluate restoration and MPA effectiveness.
        </li>
        <li>
          Use high-frequency time series data and systematic habitat analysis to
          improve biodiversity metrics under current and future climate
          scenarios, supporting adaptation and mitigation strategies.
        </li>
      </ol>

      <h3>Main Activities</h3>
      <p>
        BioBoost+ applies AI to identify and count species from photographs and
        videos. Demonstration areas will integrate: (a) satellite imagery to
        extract large-scale biodiversity drivers such as habitat
        characteristics, oceanographic features, and human pressures (e.g., fish
        farms, boat tracks, windfarms, marinas); and (b) in-water and aerial
        imagery to accelerate semi-automated species identification in
        zooplankton, seabed fauna, and fish. Continuous collaboration with
        stakeholders—including policy makers, scientists, and industry—is
        embedded in all project stages to co-design automated biodiversity
        observation systems. Knowledge and technological outputs are
        disseminated through workshops, conferences, online tools, and
        interactive platforms (e.g., Shiny Apps), enabling users to explore
        biodiversity trends. Enhanced monitoring will improve understanding of
        large-scale ecological processes such as regime shifts, thresholds, and
        species invasions, and strengthen indicators of marine ecosystem health.
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
