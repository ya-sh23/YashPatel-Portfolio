import React from "react";
import sample from "../assets/project-icon/sample.jpg";
import working from "../assets/project-icon/working.png";
import IdeaVault from "../assets/project-icon/IdeaVault.png";
import karuda from "../assets/project-icon/karuda.png";
import tictactoe from "../assets/project-icon/tiktactoe.png";
import weatherapp from "../assets/project-icon/weatherapp.png"


const Projects = () => {
  const projDetails = [
    {
      img: IdeaVault,
      projectName: "IdeaVault",
      gitLink: "https://github.com/ya-sh23/IdeaVault",
      liveDemo: "",
    },
    {
      img: karuda,
      projectName: "Karuda",
      gitLink: "https://github.com/ya-sh23/karuda",
      liveDemo: "https://master.d2hnfzwotu1llr.amplifyapp.com/",
    },
    {
      img: weatherapp,
      projectName: "Weather App",
      gitLink: "https://github.com/ya-sh23/Weather_App",
      liveDemo: "https://ya-sh23.github.io/Weather_App/",
    },
    {
      img: working,
      projectName: "Bank Management System",
      gitLink: "https://github.com/ya-sh23/Bank_mgmt",
      liveDemo: "",
    },
    {
      img: tictactoe,
      projectName: "Tic Tak Toc",
      gitLink: "https://github.com/ya-sh23/Tic-Tac-Toe",
      liveDemo: "https://tic-tac-toe-alpha-two-11.vercel.app/",
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
