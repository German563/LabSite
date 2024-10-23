import React, { useState } from "react";
import "./App.css";
// import Members from "./components/Members";
import Slick from "./components/Slick";
import AboutUs from "./components/AboutUs";
import Popup from "./components/Popup";
import PersonCard from "./components/card"; // Ensure this is correctly pointing to the card component
import peopleData from "./components/data"; // Import your data file here
import projectData from "./components/projectsData";
import ProjectCard from "./components/Projects";

function App() {
  const [isBackPopupOpen, setBackPopupOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null); // New state for selected person

  const toggleBackPopup = () => {
    setBackPopupOpen((prevState) => !prevState);
  };

  const openPopupWithPerson = (person) => {
    console.log("apple");
    setBackPopupOpen(true);
    setSelectedPerson(person); // Set the clicked person as selected
    setPopupOpen(true); // Open the popup
  };

  const closePopup = () => {
    setPopupOpen(false); // Close the popup
    setBackPopupOpen(false);
    setSelectedPerson(null); // Reset selected person
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

      {/* Render each PersonCard by mapping through the peopleData array */}
      <div className="person-card-container">
        {peopleData.map((person) => (
          <PersonCard
            key={person._id}
            person={person}
            onClick={() => openPopupWithPerson(person)} // Pass click handler
          />
        ))}
        {projectData.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
          />
        ))}
      </div>

      {/* Render the Popup component and pass the selected person */}
      <Popup isPopupOpen={isPopupOpen} closePopup={closePopup}>
        {selectedPerson && (
          <>
            <h2>{selectedPerson.name}</h2> {/* Display the person's name */}
            <p>{selectedPerson.about}</p>{" "}
            {/* Display the person's about text */}
          </>
        )}
      </Popup>
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
