import React from "react";

const Popup = ({ isPopupOpen, closePopup, children }) => {
  return (
    <div
      className={`popup ${isPopupOpen ? "popup_opened" : ""}`}
      onClick={closePopup} // close when clicking overlay
    >
      <div
        className="popup__content"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking content
      >
        <button className="popup__close" onClick={closePopup}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
