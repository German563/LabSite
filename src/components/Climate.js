import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";



import edgeachziv from "../components/images/ActNow/act1 (1).jpg";
import guys from "../components/images/ActNow/act1 (2).jpg";
import habonim3 from "../components/images/ActNow/act1 (3).jpg";
import habonim2 from "../components/images/ActNow/act1 (4).jpg";
import monitoring2 from "../components/images/ActNow/act1 (5).jpg";

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
      <h2>ACTNOW</h2>
      <h2 class="text-3xl font-bold mb-6 text-center">Vision &amp; Goals</h2>

      <p class="mb-6 text-lg leading-relaxed">
        <strong>ACTNOW</strong> is a state-of-the-art work programme that
        provides regulators and decision-makers with the knowledge and
        fit-for-purpose tools they need to combat biodiversity loss in coastal
        and marine habitats threatened by climate change (CC) interacting with
        other local and regional drivers. We are advancing and applying
        state-of-the-art tools to deliver concrete scientific support to
        regulators charged with implementing adaptation and mitigation measures,
        sustainably expand the blue economy and provide nationally determined
        contributions to the United Nations Framework Convention on Climate
        Change (UNFCCC).
      </p>

      <p class="mb-8 text-lg leading-relaxed">
        We develop and apply a systemic{" "}
        <strong>Integrated Biodiversity Assessment (IBA)</strong> framework to:
      </p>

      <ol class="list-decimal pl-6 space-y-3 text-base leading-relaxed">
        <li>
          Co-create regionalized ‘what if’ scenarios of multiple interacting
          drivers and management actions to forecast impacts on biodiversity and
          ecosystem functioning in European coastal and marine regions.
        </li>
        <li>
          Develop a systemic approach for the integrated impact assessment of
          coastal and marine ecosystem processes and services, and assessment of
          the state of ecosystem health and resilience to cumulative pressures.
        </li>
        <li>
          Understand the combined impacts of different types of pressures or
          perturbations on coastal and marine biodiversity and ecosystem
          condition.
        </li>
        <li>
          Increase understanding of the biological mechanisms determining the
          response of organisms and ecosystems to environmental changes and
          limiting their adaptation capacity, and the implications for marine
          area management.
        </li>
        <li>
          Employ state-of-the-art biologging technology and molecular methods,
          in combination with oceanographic knowledge, to understand the effects
          of agents of change on ecology and population dynamics through marine
          food webs.
        </li>
        <li>
          Rationalise and advance strategies for monitoring European populations
          of marine species at the top of food chains, which have life histories
          that make them especially susceptible to change.
        </li>
        <li>
          Integrate existing and new biodiversity data and knowledge from
          multiple origins, including other EU (Horizon 2020 and previous
          framework Programmes), international and national research projects.
        </li>
        <li>
          Develop technologies, methods and models to quantify and forecast how
          cumulative anthropogenic perturbations affect the sustainability,
          productivity and resilience of marine ecosystems.
        </li>
        <li>
          Enhance awareness and understanding of links between marine
          biodiversity, ecosystem functioning and human health through capacity
          building, public outreach and by creating decision-support tools for
          regulators to achieve or restore good environmental status.
        </li>
      </ol>
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
          <img src={habonim2} style={imageStyle} alt="Brachi reef organisms" />
        </div>
      </Slider>
    </div>
  );
}
