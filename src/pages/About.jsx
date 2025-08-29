
import fronticon from "../assets/what-i-do-icons/frontend.png";
import backicon from "../assets/what-i-do-icons/backend.png";
import cp from "../assets/what-i-do-icons/cp.png";
import "../App.css";

const ServiceCard = ({ image, title, description }) => {
  return (
    <li className="service-item">
      <div className="service-card">
        <img src={image} alt={title} className="service-item-img" />
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>
    </li>
  );
};

const About = () => {
  const services = [
    {
      image: fronticon, // Add your image path
      title: "Front Development",
      description:
        "Building responsive and dynamic web applications using modern technologies.",
    },
    {
      image: backicon,
      title: "Backend Development",
      description: "Developing robust server-side solutions and APIs.",
    },
    {
      image: cp,
      title: "Competitive Programming",
      description:
        "Problem-solving and optimizing solutions through algorithmic thinking.",
    },
  ];

  return (
    <div className="about-container">
      <section className="about-intro">
        <h1>About Me</h1>
        <p className="intro-text">
          Hi, I am Yash Patel, a Full Stack Developer and graduate of SRM
          Institute of Science and Technology, Ramapuram, where I earned my
          Bachelor of Technology degree in Computer Science Engineering.
        </p>
        <p className="intro-text">
          I am passionate about technology and constantly seek opportunities to
          learn. I am strongly committed to problem-solving and strive to
          deliver high-quality solutions in all my endeavors.
        </p>
      </section>

      <section className="what-i-do">
        <h2>What I Do</h2>
        <ul className="service-list">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
