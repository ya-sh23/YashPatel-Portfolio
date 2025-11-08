
import IdeaVault from "../assets/project-icon/IdeaVault.png";
import karuda from "../assets/project-icon/karuda.png";
import tictactoe from "../assets/project-icon/tiktactoe.png";
import weatherapp from "../assets/project-icon/weatherapp.png";
import grocerygo from "../assets/project-icon/grocerygo.png";
import musicplayer from "../assets/project-icon/musicplayer.png";
import bank from "../assets/project-icon/bank.png";
import trafficSign from "../assets/project-icon/trafficSign.png";
import chatApp from "../assets/project-icon/Chat-App.png";
import codeConnect from "../assets/project-icon/codeConnect.png";

const Projects = () => {
  const projDetails = [
    {
      img: grocerygo,
      projectName: "GroceryGo",
      gitLink: "https://github.com/ya-sh23/GroceryGo",
      liveDemo: "https://grocerygo-blue.vercel.app",
      desc: "GroceryGo is a full-stack grocery e-commerce platform built with the MERN stack.It provides a smooth shopping experience for users and a powerful dashboard for sellers.",
    },
    {
      img: IdeaVault,
      projectName: "IdeaVault",
      gitLink: "https://github.com/ya-sh23/IdeaVault",
      liveDemo: "https://ideavault-63u7.onrender.com/",
      desc: "IdeaVault is a easy-to-use note-taking app that lets you capture and organize your thoughts securely. Built with EJS, Node.js, Express.js, and MongoDB, featuring secure Passport.js OAuth authentication.",
    },
    {
      img: trafficSign,
      projectName: "Smart Traffic Sign Detection Using Deep Learning ",
      gitLink:
        "https://github.com/ya-sh23/Smart-Traffic-Sign-Detection-Using-Deep-Learning-for-Intelligent-Vehicle-Control",
      liveDemo: "",
      desc: "A CNN-based Traffic Sign Recognition system for real-time detection, enhancing road safety and supporting Autonomous Vehicles & ADAS.",
    },
    {
      img: karuda,
      projectName: "Karuda",
      gitLink: "https://github.com/ya-sh23/karuda",
      liveDemo: "https://master.d2hnfzwotu1llr.amplifyapp.com/",
      desc: "Karuda is a React-based web app that helps pet owners care for their pets responsibly. It also enables users to report cases of pet abuse.",
    },
    {
      img: chatApp,
      projectName: "Chat App SocketIO",
      gitLink: "https://github.com/ya-sh23/Simple-Chat-SocketIO",
      liveDemo: "https://simple-chat-socketio.onrender.com/",
      desc: "A real-time chat application that enables multiple users to send and receive messages instantly through WebSockets, ensuring seamless and responsive communication.",
    },
    {
      img: codeConnect,
      projectName: "CodeConnect 🔜 (In Progress)",
      gitLink: "https://github.com/ya-sh23/Code-Connect",
      liveDemo: "",
      desc: "A web app for video calling, real-time chat, and collaborative coding using WebRTC with secure OAuth authentication.",
    },
    {
      img: musicplayer,
      projectName: "Music Player",
      gitLink: "https://github.com/ya-sh23/Music-Player",
      liveDemo: "https://music-player-delta-sage.vercel.app/",
      desc: "A simple yet elegant music player built with HTML, CSS, and JavaScript.",
    },
    {
      img: weatherapp,
      projectName: "Weather App",
      gitLink: "https://github.com/ya-sh23/Weather_App",
      liveDemo: "https://ya-sh23.github.io/Weather_App/",
      desc: "This Weather App allows users to check the weather conditions of different cities. It provides real-time weather data such as temperature, humidity, and wind speed.",
    },
    {
      img: bank,
      projectName: "Bank Management System",
      gitLink: "https://github.com/ya-sh23/Bank_mgmt",
      liveDemo: "",
      desc: "Bank Management System in Python for easy record handling, account updates, and secure debit/credit transactions.",
    },
    {
      img: tictactoe,
      projectName: "Tic Tak Toc",
      gitLink: "https://github.com/ya-sh23/Tic-Tac-Toe",
      liveDemo: "https://tic-tac-toe-alpha-two-11.vercel.app/",
      desc: "A modern, responsive Tic-Tac-Toe game built using React and Vite, complete with live-reloading, code linting, friendly UI, and easy local setup",
    },
  ];

  return (
    <div className="projects">
      <h1 className="project-title">My Projects</h1>
      <div className="project-container">
        {projDetails.map((proj, Index) => (
          <div className="proj-card" key={Index}>
            <div className="proj-card-inner">
              <div className="card-front">
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
                  {proj.liveDemo && (
                    <a href={proj.liveDemo} style={{ textDecoration: "none" }}>
                      <button className="proj-btn">Live Demo</button>
                    </a>
                  )}
                </div>
              </div>
              <div className="card-back">
                <p className="proj-name">{proj.projectName}</p>
                <p className="proj-desc">{proj.desc}</p>
                <div className="proj-buttons">
                  <a href={proj.gitLink} style={{ textDecoration: "none" }}>
                    <button className="proj-btn">GitHub</button>
                  </a>
                  {proj.liveDemo && (
                    <a href={proj.liveDemo} style={{ textDecoration: "none" }}>
                      <button className="proj-btn">Live Demo</button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
