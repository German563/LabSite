import React from "react";
import peopleData from "../components/data.js";

// Card Component to display individual profiles
const PersonCard = ({ person, onClick }) => {
  const isAnton = person._id === "7";

  return (
    <div style={styles.card} onClick={onClick}>
      <img src={person.avatar} alt={person.name} style={styles.avatar} />

      <h2
        style={{
          ...styles.name,
          ...(isAnton && {
            fontFamily: '"Anton", sans-serif',
            letterSpacing: "0.06em",
          }),
        }}
      >
        {person.name}
      </h2>

      <h4>{person.title}</h4>
      <p>{person.education}</p>
    </div>
  );
};
// Styles
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    borderRadius: "8px",
    width: "300px",
    padding: "30px",
    textAlign: "center",
    overflow: "hidden",
    cursor: "pointer", // Add pointer cursor to indicate it's clickable
  },
  avatar: {
    width: "100%",
    height: "300px",
  },
};

export default PersonCard;
