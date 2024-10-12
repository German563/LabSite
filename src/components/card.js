import React from "react";
import peopleData from "../components/data.js";

// Card Component to display individual profiles
const PersonCard = ({ person }) => {
  return (
    <div style={styles.card}>
      <img src={person.avatar} alt={person.name} style={styles.avatar} />
      <h2>{person.name}</h2>
      <h4>{person.title}</h4>
      <p>{person.about}</p>
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
    // backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "300px",
    // height: "300px",
    padding: "30px",
    textAlign: "center",
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "300px",
    // borderRadius: "50%",
    // marginBottom: "15px",
  },
};
export default PersonCard;
