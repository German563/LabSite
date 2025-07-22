import React from "react";
import gilAvatar from "./images/people/gil.avif";

function AboutUs() {
  return (
    <div className="SectionWrapper">
      <div class="aboutUsWrapper">
        <div className="aboutUsTextWrapper">
          <h2>Welcome</h2>
          <p>
            I am a marine biologist and my research seeks to apply marine
            community ecology to the conservation and restoration of
            Mediterranean marine ecosystems. Examples include incorporating an
            understanding of biodiversity patterns, species interactions,
            habitat-species linkages and quantifying the cumulative impacts of
            multiple stressors on marine ecosystems
          </p>
          <p>
            Through this website I would like to show my work. Here you will
            find information about my research projects, publications and
            conferences.
          </p>
          <p>Prof. Gil Rilov.</p>
          <p>Senior Researcher</p>
          <p>Israel Oceanographic & Limnological Research</p>
          <p> Associate Professor in the University of Haifa</p>
          <p>199 Aba Khoushy Ave., Mt. Carmel</p>
          <p>Haifa, Israel</p>
          <p>
            E-mail:{" "}
            <a href="mailto:rilovg@ocean.org.il">
              <span>rilovg@ocean.org.il</span>
            </a>
          </p>
          <p>
            Research interests: Marine Biology, Biodiversity, Global Change,
            Invasive species, Conservation Biology, Benthic marine communities
          </p>
        </div>
        <div class="gilImage">
          <img src={gilAvatar} alt="Prof. Gil Rilov" />
        </div>
      </div>
      <h2 className="h2"> About Us </h2>
      <p className="h2">
        Marine Community Ecology Lab(the Rilov Lab): As part of the Marine
        Biology Department at IOLR in Haifa, Israel, our lab studies diverse
        aspects of marine community ecology and conservation.Our focal study
        systems are coastal benthic communities, mostly rocky shores and
        subtidal rocky reefs, but we are also involved in research on seagrass
        ecology, as well as sea turtle and shark population ecology and
        conservation.We study the patterns and dynamics of biodiversity on rocky
        reefs, and the processes that shape them, including recruitment, species
        interactions, bioinvasions and climate change.We also study the impacts
        of overfishing and conversely, marine reserves, on benthic communities,
        and attempt to assess the ecosystem services the marine systems provide
        along the Israeli Mediterranean and Red Sea shores.We do our
        investigations by a combination of field surveys and monitoring, and
        field and lab experiments.One of our biggest challenges is to describe
        and understand the understudied, fast - changing, benthic communities on
        reefs of the Levant shores, and specifically its unique intertidal
        vermetid reefs.{" "}
      </p>{" "}
    </div>
  );
}

export default AboutUs;
