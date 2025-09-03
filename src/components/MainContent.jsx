
import "../App.css";
import Navbar from "./Navbar";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Projects from "../pages/Project";
import Contact from "../pages/Contact";
import { Route, Routes } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="main-content">
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainContent;
