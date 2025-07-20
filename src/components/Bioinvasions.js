import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing image files
import gap1 from "../components/images/bioinvasion/1.jpg";
import gap2 from "../components/images/bioinvasion/2.jpg";
import gap3 from "../components/images/bioinvasion/3.jpg";
import gap4 from "../components/images/bioinvasion/4.jpg";
import gap5 from "../components/images/bioinvasion/5.jpg";
import gap6 from "../components/images/bioinvasion/6.jpg";

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
      <h2>Impacts of Marine Bioinvasions</h2>
      <p>
        Biological invasions are considered to be a major threat to
        biodiversity. While many species are dwindling due to overfishing and
        habitat destruction, others invade new regions using anthropogenic
        vectors. These changes are rooted in human activities more than a
        millennium old, but have accelerated dramatically in the past few
        decades due to new technology and increased connectivity among regions.
        Also, apart from range extension of native species due to climate
        change, increasing temperatures at medium and high latitudes have the
        potential to facilitate the establishment of species invading from
        warmer waters, thus affecting community structure and potentially
        function. The invasion of non-native species has increased exponentially
        in the past 200 years, and does not show signs of slowing down or
        leveling off. In the Mediterranean, one of the most invaded regions in
        the world, a new invader is being discovered every week. But what are
        the ecological consequences of these invasions to both community
        structure and ecosystem functions. This is not a trivial question, and
        it is one that has been seldom experimentally-tested on the Israeli
        coast. The Mediterranean is unique in its rates of invasions mainly
        because it has a unique vector, the Suez Canal, which created a new
        direct link to the Red Sea (and the Indian Ocean). This invasion was
        named Lessepsian migration after the name of the Canal’s engineer,
        Ferdinand Lesseps. Many claims have been made about the impact of
        Lessepsian invaders on Mediterranean biodiversity (as well as human
        wellbeing), but very rarely this impact was experimentally tested. We
        normally think of the impact as negative, such as in the case of the
        invasive siganids fish that devour all fleshy macroalgae on Levant reefs
        leaving only bare rock or turf. However, theoretically, as the
        southeastern Mediterranean coast starts losing local species due to
        climate change, more adapted warm-loving Lessepsians might replace them
        as well as some of the natives’ functions – and that could then be
        considered a positive impact. In our lab, we are trying to study the
        population dynamics of some major invaders as well as to test their
        impacts on both biodiversity and ecosystem functions. Field experiments
        We have so far tested the impact on biodiversity by one dominant
        invertebrate and one algae and are now testing invaders’ impacts on
        ecosystem functions at the community level. One of the most dominant
        invasive species is the Indopacific mussel, Brachidontes pharaonis. It
        was one of the first invaders to the Mediterranean, but was rare for the
        first 120 years. It became abundant on many vermetid reefs sometimes in
        the 1980s creating large beds in many but not all sites. For several
        years, we have been following its recruitment dynamics in several sites
        using artificial settlement collectors (tuffies) and we also compared
        community structure and biodiversity in invaded and uninvaded
        (macroalgae dominated) plots on the vermetid reefs. Galaxaura rugosa is
        a branching, calcareous tropical macroalgae that has become abundant in
        the shallow subtidal creating large patches in some areas on the
        northern Mediterranean coast of Israel. In many cases it is abundant in
        areas that are now dominated mostly by low-lying turf; areas which we
        assume were once dominated by branching brown algae that are now being
        overgrazed by the siganid fish invaders. It is possible that this new
        branching algae is replacing some of the functions lost by the
        overgrazing of native brown algae, for example, as ecosystem engineers.
        We have compared the epibenthic communities on the invader and on
        several native species to see if the abundance and diversity are
        compatible or does the invader represent a new habitat as a host. We are
        now testing also how a community dominated by the invader is functioning
        (focusing on carbon cycling) compared to turf-dominated and
        native-dominated reef communities using novel in-situ incubation
        chambers.
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
        </Slider>
      </div>
    </div>
  );
}
