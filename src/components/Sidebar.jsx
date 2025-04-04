import React from "react";
import "../App.css";
import yashpatel from "../assets/YashPatel.jpg";
import linkedin from "../assets/social-icons/linkedin.png";
import github from "../assets/social-icons/github.png";
import leetcode from "../assets/social-icons/leetcode.png";
import insta from "../assets/social-icons/insta.jpeg";

import email from "../assets/icons/email.png";
import phone from "../assets/icons/phone.png";
import location from "../assets/icons/location.png";
import calender from "../assets/icons/calender.png";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={yashpatel} alt="yash patel" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Yash Patel">
            Yash Patel
          </h1>
          <p className="description" title="Full Stack Developer">
            Full Stack Developer
          </p>
          <ul className="socials">
            <li className="social-item">
              <a href="https://www.linkedin.com/in/yash-patel-3568b5276/">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </li>
            <li className="social-item">
              <a href="https://github.com/ya-sh23">
                <img src={github} alt="github" />
              </a>
            </li>
            <li className="social-item">
              <a href="https://leetcode.com/u/yashpatel231203/">
                <img src={leetcode} alt="leetcode" />
              </a>
            </li>
            <li className="social-item">
              <a href="https://www.instagram.com/yasshhh_p/">
                <img src={insta} alt="insta" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <img className="sidebar-icon" src={email} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:yashpatel231203@gmail.com"
                className="contact-link"
              >
                yashpatel231203@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <img className="sidebar-icon" src={phone} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+918080258348" className="contact-link">
                +91 8080258348
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <img className="sidebar-icon" src={calender} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2005-02-23">Dec 23, 2003</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <img className="sidebar-icon" src={location} />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Chennai, India</address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
