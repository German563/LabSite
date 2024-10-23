import React from "react";
// import "./Popup.css"; // Assuming you have popup styling

const Popup = ({ isPopupOpen, closePopup, children }) => {
  return (
    <div className={`popup ${isPopupOpen ? "popup_opened" : ""}`}>
      <div className="popup__content">
        <button className="popup__close" onClick={closePopup}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
