import React, { useState } from "react";
import "./App.css";
import Members from "./components/Members";
import Slick from "./components/Slick";
import AboutUs from "./components/AboutUs";
import Popup from "./components/Popup";
import PersonCard from "./components/card"; // Ensure this is correctly pointing to the card component
import peopleData from "./components/data"; // Import your data file here

function App() {
  const [isBackPopupOpen, setBackPopupOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const toggleBackPopup = () => {
    setBackPopupOpen((prevState) => !prevState);
  };

  const togglePopup = () => {
    setPopupOpen((prevState) => !prevState);
  };

  return (
    <div className="App">
      <div
        onClick={toggleBackPopup}
        className={`page__background ${
          isBackPopupOpen ? "page__background_opened" : ""
        }`}
      ></div>

      <header className="header">
        <nav className="nav">
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Outreach</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="overlay"></div>
      <Slick />
      <AboutUs />
      {/* <Members openBackPopup={toggleBackPopup} /> */}
      <Popup openPopup={togglePopup} isPopupOpen={isPopupOpen} />

      {/* Render each PersonCard by mapping through the peopleData array */}
      <div className="person-card-container">
        {peopleData.map((person) => (
          <PersonCard key={person._id} person={person} /> // Pass the person data
        ))}
      </div>

      <footer className="footer">
        <p>
          National Institute of Oceanography, Israel Oceanographic and
          Limnological Research (IOLR)
        </p>

        <p> Haifa, 3109701, Israel. PO Box 9753.</p>
      </footer>
    </div>
  );
}

export default App;
