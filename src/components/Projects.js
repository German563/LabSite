import React from "react";
import projectData from "../components/projectsData.js";

// Card Component to display individual profiles
const ProjectCard = ({ project, onClick }) => {
  return (
    <div style={styles.card} onClick={onClick}>
      {" "}
      {/* Add onClick to the card container */}
      <h3>{project.title}</h3>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img src={project.avatar} alt={project.name} style={styles.avatar} />
      </a>
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

export default ProjectCard;
