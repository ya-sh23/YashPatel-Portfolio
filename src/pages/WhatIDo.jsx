
import fronticon from "../assets/what-i-do-icons/frontend.png";
import backicon from "../assets/what-i-do-icons/backend.png";
import cp from "../assets/what-i-do-icons/cp.png"



const WhatIDo = () => {
  return (
    <div className="services">
      <ul className="service-list">
        <li className="service-item">
          <img className="service-item-img" src={fronticon} alt="frontend" />
          <h4 className="service-item-head">Frontend Development</h4>
          <p className="service-item-title">
            High-quality Frontend Development for websites
          </p>
        </li>
        <li className="service-item">
          <img className="service-item-img" src={backicon} alt="backend" />
          <h4 className="service-item-head">Backend Development</h4>
          <p className="service-item-title">
            High-quality Backend Development for websites
          </p>
        </li>
        <li className="service-item">
          <img className="service-item-img" src={cp} alt="frontend" />
          <h4 className="service-item-head">Competative Programming</h4>
          <p className="service-item-title">
            High-quality Frontend Development for websites
          </p>
        </li>
      </ul>
    </div>
  );
};

export default WhatIDo;
