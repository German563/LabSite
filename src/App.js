import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Slick from "./components/Slick";
import AboutUs from "./components/AboutUs";
import Popup from "./components/Popup";
import PersonCard from "./components/card";
import peopleData from "./components/data";
import Rocky from "./components/Rocky";
import Subtidal from "./components/Subtidal";
import Climate from "./components/Climate";
import Bioinvasions from "./components/Bioinvasions";
import Reserves from "./components/Reserves";
import Achiv2 from "./components/images/rocky/Achiv2.webp";
import Biodiversity from "./components/biodiversity";
import Publications from "./components/Publications";
import logoYoutube from "./components/images/logos/icons8-youtube.svg";
import logoTwitter from "./components/images/logos/icons8-twitter.svg";
import logoInstagram from "./components/images/logos/icons8-instagram.svg";
import logoFacebook from "./components/images/logos/icons8-facebook.svg";

function App() {
  const [isBackPopupOpen, setBackPopupOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const toggleBackPopup = () => setBackPopupOpen((prev) => !prev);
  const openPopupWithPerson = (person) => {
    setBackPopupOpen(true);
    setSelectedPerson(person);
    setPopupOpen(true);
  };
  const closePopup = () => {
    setPopupOpen(false);
    setBackPopupOpen(false);
    setSelectedPerson(null);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <header className="overlay1">
                  <nav className="nav">
                    <ul className="menu">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#projects">Projects</a>
                      </li>
                      <li>
                        <a href="#team">Team</a>
                      </li>
                      <li>
                        <a href="#Publications">Publications</a>
                      </li>
                    </ul>
                    <div className="titleWrapper">
                      <h1>The Rilov Lab</h1>
                      <h2>Marine community ecology</h2>
                    </div>
                  </nav>
                  <div className="overlay2" />
                </header>

                <div
                  onClick={toggleBackPopup}
                  className={`page__background ${
                    isBackPopupOpen ? "page__background_opened" : ""
                  }`}
                ></div>

                <Slick />
                <AboutUs />

                <div className="person-card-container" id="team">
                  {peopleData.map((person) => (
                    <PersonCard
                      key={person._id}
                      person={person}
                      onClick={() => openPopupWithPerson(person)}
                    />
                  ))}

                  {/* Projects Section */}
                  <div className="cardProject" id="projects">
                    <a href="rocky">
                      <img
                        className="projectImage"
                        src={Achiv2}
                        alt="Achievement"
                      />
                    </a>
                    <h2>Rocky shore monitoring</h2>
                  </div>
                  <div className="cardProject">
                    <a href="subtidal">
                      <img
                        className="projectImage"
                        src={Achiv2}
                        alt="Achievement"
                      />
                    </a>
                    <h2>Subtidal reef surveys</h2>
                  </div>
                  <div className="cardProject">
                    <a href="Climate">
                      <img
                        className="projectImage"
                        src={Achiv2}
                        alt="Achievement"
                      />
                    </a>
                    <h2>Impacts of Climate changes</h2>
                  </div>
                  <div className="cardProject">
                    <a href="Bioinvasions">
                      <img
                        className="projectImage"
                        src={Achiv2}
                        alt="Achievement"
                      />
                    </a>
                    <h2>Marine Bioinvasions</h2>
                  </div>
                  <div className="cardProject">
                    <a href="Reserves">
                      <img
                        className="projectImage"
                        src={Achiv2}
                        alt="Achievement"
                      />
                    </a>
                    <h2>Marine Reserves</h2>
                  </div>
                  <div className="cardProject">
                    <a href="biodiversity">
                      <img
                        className="projectImage"
                        src={Achiv2}
                        alt="Achievement"
                      />
                    </a>
                    <h2>FutureMARES</h2>
                  </div>
                </div>

                {/* Popup */}
                <Popup isPopupOpen={isPopupOpen} closePopup={closePopup}>
                  {selectedPerson && (
                    <>
                      <h2>{selectedPerson.name}</h2>
                      <p>{selectedPerson.about}</p>
                    </>
                  )}
                </Popup>

                <h2 className="h2" id="Publications">
                  Publications
                </h2>
                <Publications />
              </>
            }
          />
          <Route path="/rocky" element={<Rocky />} />
          <Route path="/subtidal" element={<Subtidal />} />
          <Route path="/Climate" element={<Climate />} />
          <Route path="/Reserves" element={<Reserves />} />
          <Route path="/Bioinvasions" element={<Bioinvasions />} />
          <Route path="/biodiversity" element={<Biodiversity />} />
        </Routes>

        {/* ✅ Footer (outside Routes, visible on all pages) */}
        <footer className="footer">
          <p>
            National Institute of Oceanography, Israel Oceanographic and
            Limnological Research (IOLR)
          </p>
          <p>Haifa, 3109701, Israel. PO Box 9753.</p>
          <div className="logoWrapper">
            <a
              href="https://www.youtube.com/channel/UC9IksEC8j8wUxQuFY0t6PWw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logoYoutube} alt="youtube" />
            </a>
            <a
              href="https://x.com/RilovL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logoTwitter} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com/rilov_lab_IOLR/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logoInstagram} alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100070964067130"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logoFacebook} alt="Facebook" />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
