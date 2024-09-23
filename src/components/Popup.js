import React from "react";

function Popup(props) {
  return (
    <div
      className={`memberDescr ${props.isPopupOpen ? "memberDescrOpen" : ""}`}
      onClick={props.openPopup} // Add onClick event handler
    >
      <h2>Prof. Gil Rilov</h2>
      <h3>Senior Researcher, Head of Lab</h3>
      <p>
        My research explores the patterns, dynamics, and processes that shape
        marine communities, especially rocky shores and subtidal reefs. I am
        interested in the structure of communities and what affects their
        diversity, including larval recruitment, species interactions
        (predator-prey, competition, facilitation), overfishing, bioinvasions,
        climate change. I also study how marine communities function and what
        ecosystem services they provide. I am investigating nature-based
        solutions designed to protect these fascinating communities, their
        functions, and services (including Blue Carbon) through, for example,
        marine protected areas. So far, I have been fortunate to conduct
        research on the shores of Israel (Mediterranean and Red Sea), the USA,
        New Zealand, Brazil, Chile, South Africa, Crete, Cyprus, and Italy
        (Ischia). I have worked on rocky shores, subtidal reefs, coral reefs,
        and seagrass. I am also a Professor in the Marine Biology Department at
        the Leon H. Charney School of Marine Sciences at the University of
        Haifa. I teach a marine ecology course there.
      </p>
    </div>
  );
}

export default Popup;
