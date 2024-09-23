import "./App.css";
import React from "react";
import Members from "../src/components/Members.js"; // Make sure header is imported properly if needed
import AboutUs from "../src/components/AboutUs.js"; // Import the AboutUs component
import Popup from "../src/components/Popup.js"; 
function App() {
function openBackPopup() {
  setBackPopupOpen((prevState) => !prevState);
  setPopupOpen((prevState) => !prevState);
}
// function openPopup() {
//   setPopupOpen((prevState) => !prevState);
// }


    const [isBackPopupOpen, setBackPopupOpen] = React.useState(false);
    const [isPopupOpen, setPopupOpen] = React.useState(false);
  return (
    <div className="App">
      <div
        onClick={openBackPopup}
        className={`page__background ${
          isBackPopupOpen ? "page__background_opened" : ""
        }`}
      ></div>
      <header className="header">
        <nav className="nav">
          <ul className="menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Outreach</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
          </ul>
        </nav>
        <div className="overlay"></div>
      </header>

      <AboutUs />
      <Members openBackPopup={openBackPopup} />
      <Popup openPopup={openBackPopup} isPopupOpen={isPopupOpen} />

      <main className="main"></main>

      <footer className="footer">345</footer>
    </div>
  );
}

export default App;
