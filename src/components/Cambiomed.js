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
      <p>
        Context Rocky reefs are a hotspot of Mediterranean marine biodiversity.
        At the same time, these ecosystems are highly impacted by multiple human
        activities and global change. The Mediterranean Sea has already suffered
        from rapidly increasing overexploitation and mass mortalities due to
        heatwaves. Such biodiversity shifts have affected ecosystem functioning
        and compromised conservation efforts. Long-term data are essential for
        evaluating ecosystem responses to disturbances (including global
        changes), providing baselines to evaluate change, and assessing the
        effectiveness of management measures in securing ecosystem structure,
        function, and services provision. In CAMBioMed, we will develop an
        adaptive monitoring framework together with stakeholders, propose a
        novel toolkit for efficiently monitoring Mediterranean rocky ecosystems,
        and enable decision-makers to answer critical questions about the
        conservation of changing marine rocky ecosystems. Main objectives
        CAMBioMed aims to: 1. harmonise and improve monitoring designs,
        capitalising on the partners’ long experience in national monitoring
        programs and the use of innovative tools (e.g. eDNA metabarcoding,
        satellite remote sensing, and artificial intelligence) for monitoring
        rocky reefs across the Mediterranean Sea; 2. improve our knowledge on
        the response of Mediterranean marine ecosystems to global and local
        stressors, by conducting extensive fieldwork and integrating an
        unprecedented volume of historical and new data; 3. provide a roadmap
        and practical guidelines for adaptive monitoring that incorporates
        social perceptions and values to contribute to the effective
        conservation of rocky reef ecosystems in the Mediterranean Sea, with a
        view to help and fulfil the objectives of the Biodiversity Strategy for
        2030 and secure human wellbeing. Main activities CAMBioMed is a
        transdisciplinary project combining natural sciences (marine biology &
        ecology), technological sciences (computer sciences & engineering), and
        social sciences (social anthropology & environmental economics). The
        main activities are to develop an adaptive monitoring framework for
        Mediterranean rocky reefs and track large-scale and long-term ecosystem
        changes along environmental gradients; support upscaling of monitoring
        using innovative tools, such as drones, computer vision, and e-DNA
        metabarcoding; and promote the monitoring of biodiversity and ecosystem
        changes with citizen science and anthropological assessment of social,
        economic, and cultural contexts. CAMBioMed will co-develop the research
        activities by consulting stakeholders at different levels, from
        high-level policy stakeholders (e.g. national ministries) to case study
        stakeholders (e.g. local fishers) and the general population by means of
        interviews, focus groups and/or workshops. This engagement is built upon
        ongoing stakeholder interactions with partners in existing projects and
        citizen science initiatives that will be upscaled by CAMBioMed to design
        and develop the adaptive, relevant and useful monitoring framework.
        CAMBioMed will provide a more comprehensive assessment of ecosystem
        health, allowing for the monitoring program to evolve in response to
        changing conditions, and for decision-makers to answer critical
        questions related to biodiversity conservation in a changing
        Mediterranean Sea. Link :
        https://www.biodiversa.eu/2024/04/15/cambiomed/
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
