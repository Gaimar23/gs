import React, { useState } from "react";
import "./Projects.scss";
import Project1 from "../../assets/images/project1.png";
import Project2 from "../../assets/images/project2.png";
import Project3 from "../../assets/images/project3.png";
import ProjectCard from "../projectCard/ProjectCard";

const Projects = () => {
  const ourProjects = [
    {
      title: "Business StartUp",
      description: "Design & Development",
      image: Project1,
    },
    {
      title: "Excel Business App",
      description: "Excel Development",
      image: Project2,
    },
    {
      title: "Business StartUp",
      description: "Design & Development",
      image: Project2,
    },
    {
      title: "Client Project",
      description: "Mobile Development",
      image: Project3,
    },
    {
      title: "Business StartUp",
      description: "Design & Development",
      image: Project1,
    },
    {
      title: "Business StartUp",
      description: "Design & Development",
      image: Project3,
    },
  ];

  const [activeTab, setActiveTab] = useState("first");

  const updateTabLink = (link) => {
    setActiveTab(link);
  };
  return (
    <div className="projects">
      <div className="projects-global">
        <h2>Projets</h2>
        <p>
          Nos différentes formations sur divers sujetsNos différentes formations
          sur divers sujets Nos différentes formations sur divers sujets
        </p>
        <div className="tab-container">
          <ul className="tab-list">
            <li
              onClick={() => updateTabLink("first")}
              className={activeTab === "first" ? "tab-link active" : "tab-link"}
            >
              Tab N°01
            </li>
            <li
              onClick={() => updateTabLink("second")}
              className={
                activeTab === "second" ? "tab-link active" : "tab-link"
              }
            >
              Tab N°02
            </li>
            <li
              onClick={() => updateTabLink("third")}
              className={activeTab === "third" ? "tab-link active" : "tab-link"}
            >
              Tab N°03
            </li>
          </ul>
          <div className="tab-content">
            <div className="first">
              {ourProjects.map((project, index) => {
                return (
                  <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
