import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing image files
import Achiv2 from "../components/images/rocky/Achiv2.webp";
import achziv from "../components/images/rocky/achziv.webp";
import bio from "../components/images/rocky/bio.webp";
import brachi from "../components/images/rocky/brachi.webp";
import habonim from "../components/images/rocky/center-habonim.webp";
import dendropoma from "../components/images/rocky/dendropoma.webp";

import edgeachziv from "../components/images/rocky/edge-achziv.webp";
import guys from "../components/images/rocky/guys.webp";
import habonim3 from "../components/images/rocky/habonim.webp";
import habonim2 from "../components/images/rocky/habonim2.webp";
import monitoring3 from "../components/images/rocky/monitoring-3.webp";
import monitoring2 from "../components/images/rocky/monitoring-2.webp";

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
      <h2>Rocky shore monitoring</h2>
      <p>
        What are vermetid reefs? The Israeli Mediterranean coast hosts a unique
        rocky intertidal habitat: the biogenically-built rocky reefs known as
        "vermetid reefs". These reefs are horizontal, eolianite (calcareous
        cemented Pleistocene dune) or limestone platforms with a characteristic
        biogenic rim at their seaward edge that is formed by gregarious,
        sedentary vermetid gastropods, Dendropoma petraeum, cemented together by
        calcareous red algae, and by a crust on the flat made of shells of
        another vermetid, Vermetus triqueter. The soft rocks themselves are
        easily abraded by waves and weather at the back of the reef, and the
        vermetid shells are thought to reduce the erosion at the level where
        they live, i.e., mostly at mean sea level, and thus protect the rocky
        platforms from further abrasion (hence their other name – “abrasion
        platforms”). This leads to the formation of broad horizontal flats at
        about mid-sea level, and the vermetids are therefore the controlling
        factor in the development of these platforms; These vermetid reefs are
        typical only to warm temperate or subtropical seas such as the Levant
        basin and Bermuda.
      </p>
      <div style={sliderStyle}>
        <Slider {...settings}>
          <div>
            <img src={Achiv2} style={imageStyle} alt="Achiv 2 reef view" />
          </div>
          <div>
            <img src={achziv} style={imageStyle} alt="Achziv reef close-up" />
          </div>
          <div>
            <img src={bio} style={imageStyle} alt="Bio reef biodiversity" />
          </div>
          <div>
            <img src={brachi} style={imageStyle} alt="Brachi reef organisms" />
          </div>
          <div>
            <img
              src={habonim}
              style={imageStyle}
              alt="Center Habonim reef overview"
            />
          </div>
          <div>
            <img
              src={dendropoma}
              style={imageStyle}
              alt="Dendropoma reef gastropods"
            />
          </div>
        </Slider>
      </div>
      <h2>Biodiversity and community dynamics:</h2>
      <p>
        As part of IOLR's National Monitoring Program, since 2009 we have been
        monitoring the interannual dynamics of community structure on vermetid
        reefs at 11 sites along the Israeli shore. In four core sites we also
        monitor the seasonal dynamics. We do that along transects that run
        parallel to the shoreline at several zones from the edge of the reef to
        the back of the reef. Along each transect we assess the percent cover or
        number of organisms inside quadrats. We use multivariate analysis to
        look for biogeographic, site and season effects on the structure of the
        community. This monitoring program has been supported by the Ministry of
        Environmental Protection since 2013.
      </p>
      <Slider {...settings}>
        <div>
          <img src={edgeachziv} style={imageStyle} alt="Achiv 2 reef view" />
        </div>
        <div>
          <img src={guys} style={imageStyle} alt="Achziv reef close-up" />
        </div>
        <div>
          <img src={habonim3} style={imageStyle} alt="Bio reef biodiversity" />
        </div>
        <div>
          <img
            src={monitoring2}
            style={imageStyle}
            alt="Brachi reef organisms"
          />
        </div>
        <div>
          <img
            src={monitoring3}
            style={imageStyle}
            alt="Brachi reef organisms"
          />
        </div>
        <div>
          <img src={habonim2} style={imageStyle} alt="Brachi reef organisms" />
        </div>
        <div>
          <img
            src={habonim}
            style={imageStyle}
            alt="Center Habonim reef overview"
          />
        </div>
      </Slider>
      <div style={{ marginTop: "30px" }}>
        <a
          href="https://www.ocean.org.il/the-national-institute-of-oceanography-in-haifa-center/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >
          National Institute of Oceanography – Haifa Center
        </a>

        <br />

        <a
          href="https://www.ocean.org.il/wp-content/uploads/2025/01/NMP-Biodiversity-report-for-2023_%D7%9E%D7%95%D7%A9%D7%92.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >
          NMP Biodiversity Report 2023 (PDF)
        </a>
      </div>
    </div>
  );
}
