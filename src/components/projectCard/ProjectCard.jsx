import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="project-card">
      <img src={image} alt="" />
      <div className="info">
        <h4 className="title">{title}</h4>
        <p className="desc">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
