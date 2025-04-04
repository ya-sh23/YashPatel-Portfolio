import React from "react";
import sample from "../assets/project-icon/sample.jpg";

const Projects = () => {
  const projDetails = [
    {
      img: sample,
      projectName: "IdeaVault",
      gitLink: "https://github.com/ya-sh23/IdeaVault",
      liveDemo: "",
    },
    {
      img: sample,
      projectName: "Karuda",
      gitLink: "https://github.com/ya-sh23/karuda",
      liveDemo: "",
    },
    {
      img:sample,
      projectName: "Weather App",
      gitLink: "https://github.com/ya-sh23/Weather_App",
      liveDemo: "",
    },
    {
      img:sample,
      projectName: "Bank Management System",
      gitLink: "https://github.com/ya-sh23/Bank_mgmt",
      liveDemo: "",
    },
    {
      img: sample,
      projectName: "Tic Tak Toc",
      gitLink: "https://github.com/ya-sh23/Tic-Tac-Toe",
      liveDemo: "",
    },
  ];

  return (
    <div className="projects">
      <h1 className="project-title">My Projects</h1>
      <div className="project-container">
        {projDetails.map((proj, Index) => (
          <div className="proj-card" key={Index}>
            <img
              src={proj.img}
              alt={proj.projectName}
              loading="lazy"
              className="proj-img"
            />
            <p className="proj-name">{proj.projectName}</p>
            <div className="proj-buttons">
              <a href={proj.gitLink} style={{ textDecoration: "none" }}>
                <button className="proj-btn">GitHub</button>
              </a>
              <a href={proj.liveDemo} style={{ textDecoration: "none" }}>
                <button className="proj-btn">Live Demo</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
