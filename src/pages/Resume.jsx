import React from "react";
import Timeline from "./Timeline";
import Skills from "./Skills";
import "../App.css";
import downloadbtn from "../assets/icons/download-folder-unscreen.gif";

const resumeURL =
  "https://drive.google.com/drive/u/0/folders/1jD3v5EWMZwliJNbwkdR52SvdT2Ze32Pr";

const handleDownload = () => {
  window.open(resumeURL, "_blank");
};

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="btn-resume">
        <p className="btn-resume-text">My Resume</p>
        <img
          src={downloadbtn}
          alt="resume"
          className="btn-resume-icon"
          onClick={handleDownload}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="resume-timeline">
        <Timeline />
      </div>
      <div className="resume-skills">
        <Skills />
      </div>
    </div>
  );
};

export default Resume;
