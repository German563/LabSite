import React from "react";


// Card Component to display individual profiles
const PersonCard = ({ person, onClick }) => {
  const isAnton = person._id === "7";

  return (
    
    <div style={styles.card} onClick={onClick}>
      <div style={styles.imageWrap} onClick={onClick}>
        <img
          src={person.avatar}
          alt={person.name}
          style={styles.avatar}
          draggable={false}
        />
      </div>

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
      <p style={{ whiteSpace: "pre-line" }}>{person.education}</p>
    </div>
  );
};

const styles = {
  card: {
    borderRadius: "8px",
    width: "300px",
    padding: "30px",
    textAlign: "center",
    overflow: "hidden",
    cursor: "pointer",
    position: "relative",
  },
  imageWrap: {
        display: "flex",
       justifyContent: 'center',
    position: "relative",
    zIndex: 2,            // <— ensures it sits above any weird overlays
    cursor: "pointer",
  },
  avatar: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    display: "flex",
    pointerEvents: "auto", // <— ensures it can receive clicks
  },
  
};

export default PersonCard;
