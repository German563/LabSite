import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Slick from "./components/Slick";
import AboutUs from "./components/AboutUs";
import Popup from "./components/Popup";
import PersonCard from "./components/card";
import peopleData from "./components/data";
import Rocky from "./components/Rocky";
import Pureefy from "./components/Pureefy";
import Subtidal from "./components/Subtidal";
import Climate from "./components/Climate";
import Cambiomed from "./components/Cambiomed";
import Reserves from "./components/Reserves";
import Achiv2 from "./components/images/rocky/Achiv2.webp";
import Actnow from "./components/images/ActNow/actnowlogo.png";
import Biodiversity from "./components/biodiversity";
import Publications from "./components/Publications";
import logoYoutube from "./components/images/logos/icons8-youtube.svg";
import logoTwitter from "./components/images/logos/icons8-twitter.svg";
import logoInstagram from "./components/images/logos/icons8-instagram.svg";
import logoFacebook from "./components/images/logos/icons8-facebook.svg";
import CamBio from "./components/images/Cambiomed/CAMBioMED_logo-200x100.jpg";
import MonitoringLogo from "./components/images/IOLRMonitoring.jpg";
import PureefyLogo from "./components/images/Pureefy/Pureef-y-400x355.png";
import biodiversaLogo from "./components/images/reserves/biodiversa logo.png";
import logoMain from "./components/images/logoMain.png";
import IOLRlogo from "./components/images/oie_transparent.png";
import "./App.css";

function AppContent() {
  const [isBackPopupOpen, setBackPopupOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  // navigation state
  const location = useLocation();
  const navigate = useNavigate();

  const projectPaths = [
    "/Rocky",
    "/rocky",
    "/Climate",
    "/Reserves",
    "/Cambiomed",
    "/biodiversity",
    "/Pureefy",
  ];
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Anton&display=swap";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const showReturnButton = projectPaths.includes(location.pathname);

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
                      <a href="#" style={{ display: "none" }}>
                        Home
                      </a>
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
                    {/* <h1>The Rilov Lab</h1>
                    <h2>Marine community ecology</h2> */}
                    <div className="wrapperLogo">
                      <img
                        className="mainLogo"
                        src={logoMain}
                        alt="Achievement"
                      />
                    </div>
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
              </div>
              <h2 class="h2"> Projects </h2>
              <div className="person-card-container" id="projects">
                <div className="cardProject">
                  <a href="Cambiomed">
                    <img
                      className="projectImage"
                      style={{ height: "100%" }}
                      src={CamBio}
                      alt="Achievement"
                    />
                  </a>
                  <h2>CamBioMed</h2>
                </div>
                <div className="cardProject">
                  <a href="Rocky">
                    <img
                      className="projectImage"
                      style={{ height: "100%" }}
                      src={MonitoringLogo}
                      alt="Achievement"
                    />
                  </a>
                  <h2>National Monitoring</h2>
                </div>
                <div className="cardProject">
                  <a href="Climate">
                    <img
                      className="projectImage"
                      style={{ height: "100%" }}
                      src={Actnow}
                      alt="Achievement"
                    />
                  </a>
                  <h2>ACTNOW</h2>
                </div>
                <div className="cardProject">
                  <a href="Pureefy">
                    <img
                      className="projectImage"
                      style={{ height: "100%" }}
                      src={PureefyLogo}
                      alt="Achievement"
                    />
                  </a>
                  <h2>Pureefy</h2>
                </div>
                <div className="cardProject">
                  <a href="Reserves">
                    <img
                      className="projectImage"
                      style={{ height: "100%" }}
                      src={biodiversaLogo}
                      alt="Achievement"
                    />
                  </a>
                  <h2>EuRockFish</h2>
                </div>
                <div className="cardProject">
                  <a href="biodiversity">
                    <img
                      className="projectImage"
                      style={{ height: "100%" }}
                      src={biodiversaLogo}
                      alt="Achievement"
                    />
                  </a>
                  <h2>BioBoost+</h2>
                </div>
              </div>

              <Popup isPopupOpen={isPopupOpen} closePopup={closePopup}>
                {selectedPerson && (
                  <>
                    <h2>{selectedPerson.name}</h2>
                    <p>{selectedPerson.about}</p>
                    <p style={{ whiteSpace: "pre-line" }}>
                      {selectedPerson.education}
                    </p>
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
        <Route path="/Rocky" element={<Rocky />} />
        <Route path="/Climate" element={<Climate />} />
        <Route path="/Reserves" element={<Reserves />} />
        <Route path="/Cambiomed" element={<Cambiomed />} />
        <Route path="/biodiversity" element={<Biodiversity />} />
        <Route path="/Pureefy" element={<Pureefy />} />
      </Routes>
      {/* ✅ RETURN BUTTON ONLY ON PROJECT PAGES */}
      {showReturnButton && (
        <button
          onClick={() => navigate("/")}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            padding: "12px 22px",
            background: "#0c4a6e",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            zIndex: 9999,
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          ← Back to Home
        </button>
      )}

      <footer className="footer">
        <img src={IOLRlogo} alt="IOLR" />
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
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
