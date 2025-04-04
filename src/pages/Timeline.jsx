import React from "react";
import "../App.css";

const events = [
  {
    year: "2021-2025",
    title: "SRM Institue of Science and Technology",
    description: "B.Tech CSE ",
    marks: "CGPA - 9.29",
  },
  {
    year: "2021",
    title: "Kendriya Vidyalaya VSN Nagpur",
    description: "CBSE 12th ",
    marks: "Percentage - 86.8%",
  },
  {
    year: "2019",
    title: "Kendriya Vidyalaya VSN Nagpur",
    description: "CBSE 10th ",
    marks: "Percentage - 87.5%",
  },
];

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline-head">EDUCATION</div>
      <div className="timeline-body">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{event.year}</h3>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
              <p>{event.marks}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
