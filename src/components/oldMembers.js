import React, { useState } from "react";
import { OldpeopleData } from "./data";
import PersonCard from "./card";
import Popup from "./Popup";

function OldMembers() {
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
    <>
      {/* background overlay */}
      <div
        onClick={toggleBackPopup}
        className={`page__background ${
          isBackPopupOpen ? "page__background_opened" : ""
        }`}
      ></div>

      <h2 className="h2" style={{ paddingTop: 30 }}>
        Former Students
      </h2>

      <div className="person-card-container" id="former-students">
        {OldpeopleData.map((person) => (
          <PersonCard
            key={person._id}
            person={person}
            onClick={() => openPopupWithPerson(person)}
          />
        ))}
      </div>

      <Popup isPopupOpen={isPopupOpen} closePopup={closePopup}>
        {selectedPerson && (
          <>
            <h2>{selectedPerson.name}</h2>
            <p>{selectedPerson.about}</p>
            <p style={{ whiteSpace: "pre-line" }}>{selectedPerson.education}</p>
          </>
        )}
      </Popup>
    </>
  );
}

export default OldMembers;
