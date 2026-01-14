import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing image files
import gap1 from "../components/images/Cambiomed/DSC00964.JPG";
import gap2 from "../components/images/Cambiomed/DSC01020.JPG";
import gap3 from "../components/images/Cambiomed/DSC01037.JPG";
import gap4 from "../components/images/Cambiomed/DSC03021.JPG";


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
      <h2>CAMBioMed:</h2>

      <h3>Context</h3>
      <p>
        Rocky reefs are a hotspot of Mediterranean marine biodiversity. At the
        same time, these ecosystems are highly impacted by multiple human
        activities and global change. The Mediterranean Sea has already suffered
        from rapidly increasing overexploitation and mass mortalities due to
        heatwaves. Such biodiversity shifts have affected ecosystem functioning
        and compromised conservation efforts. Long-term data are essential for
        evaluating ecosystem responses to disturbances — including global
        changes — providing baselines to assess change and evaluate the
        effectiveness of management measures in securing ecosystem structure,
        function, and ecosystem services. In CAMBioMed, we will develop an
        adaptive monitoring framework together with stakeholders, propose a
        novel toolkit for efficiently monitoring Mediterranean rocky ecosystems,
        and enable decision-makers to address critical questions about the
        conservation of changing marine rocky ecosystems.
      </p>

      <h3>Main Objectives</h3>
      <ol>
        <li>
          Harmonise and improve monitoring designs by capitalising on partners’
          extensive experience in national monitoring programs and the use of
          innovative tools (e.g., eDNA metabarcoding, satellite remote sensing,
          and artificial intelligence) for monitoring rocky reefs across the
          Mediterranean Sea.
        </li>
        <li>
          Improve knowledge of Mediterranean marine ecosystem responses to
          global and local stressors through extensive fieldwork and integration
          of both historical and newly collected data at an unprecedented scale.
        </li>
        <li>
          Provide a roadmap and practical guidelines for adaptive monitoring
          that incorporates social perceptions and values, contributing to
          effective conservation of rocky reef ecosystems in the Mediterranean
          Sea and supporting the objectives of the EU Biodiversity Strategy for
          2030.
        </li>
      </ol>

      <h3>Main Activities</h3>
      <p>
        CAMBioMed is a transdisciplinary project integrating natural sciences
        (marine biology and ecology), technological sciences (computer science
        and engineering), and social sciences (anthropology and environmental
        economics). The project will develop an adaptive monitoring framework
        for Mediterranean rocky reefs and track large-scale and long-term
        ecosystem changes along environmental gradients. CAMBioMed will also
        support the upscaling of monitoring using innovative tools, such as
        drones, computer vision, and eDNA metabarcoding, while promoting
        biodiversity monitoring through citizen science and anthropological
        assessment of social, economic, and cultural contexts.
      </p>
      <p>
        The research activities will be co-developed through stakeholder
        engagement at multiple levels — from national policy authorities to
        local case-study groups (e.g., fishers) and the general public through
        interviews, focus groups, and workshops. This approach builds on
        existing stakeholder interactions and citizen science initiatives, which
        CAMBioMed will upscale to design an adaptive, relevant, and useful
        monitoring framework. Ultimately, CAMBioMed will provide a more
        comprehensive assessment of ecosystem health, enabling monitoring
        programs to evolve with changing conditions and assisting
        decision-makers in addressing critical questions related to biodiversity
        conservation in a changing Mediterranean Sea.
      </p>

      <p>
        <strong>More information:</strong>{" "}
        <a
          href="https://www.biodiversa.eu/2024/04/15/cambiomed/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >
          CAMBioMed Project Page
        </a>
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
        </Slider>
      </div>
    </div>
  );
}
