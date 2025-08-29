
import "../App.css";
const Skills = () => {
  const skillCategories = [
    {
      name: "Language",
      item: [
        {
          name: "C++",
          doc: "https://isocpp.org/",
          logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
        },
        {
          name: "Python",
          doc: "https://docs.python.org/3/",
          logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        },
        {
          name: "JavaScript",
          doc: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
          name: "Java",
          doc: "https://docs.oracle.com/en/java/javase/index.html",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png",
        },
      ],
    },
    {
      name: "Frontend",
      item: [
        {
          name: "HTML",
          doc: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        },
        {
          name: "CSS",
          doc: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        },
        {
          name: "BootStrap",
          doc: "https://getbootstrap.com/docs/",
          logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        },
        {
          name: "React",
          doc: "https://react.dev/",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        },
      ],
    },
    {
      name: "Backend",
      item: [
        {
          name: "Node.JS",
          doc: "https://nodejs.org/en/docs/",
          logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        },
        {
          name: "Express",
          doc: "https://expressjs.com/",
          logo: "https://kinsta.com/wp-content/uploads/2022/04/express-1.png",
        },
      ],
    },
    {
      name: "Database",
      item: [
        {
          name: "MySQL",
          doc: "https://dev.mysql.com/doc/",
          logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
        },
        {
          name: "MongoDB",
          doc: "https://www.mongodb.com/docs/",
          logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
        },
        {
          name: "PostgreSQL",
          doc: "https://www.postgresql.org/docs/",
          logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        },
      ],
    },
    {
      name: "Tools",
      item: [
        {
          name: "Git",
          doc: "https://git-scm.com/doc",
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
        },
        {
          name: "Linux",
          doc: "https://docs.rockylinux.org/books/admin_guide/01-presentation/",
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
        },
        {
          name: "Postman",
          doc: "https://learning.postman.com/docs/",
          logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Postman_%28software%29.png",
        },
        {
          name: "VSCode",
          doc: "https://code.visualstudio.com/docs",
          logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
        },
      ],
    },
  ];

  return (
    <div className="skills">
      <div className="skills-header">SKILLS</div>
      <div className="skill-categories">
        {skillCategories.map((categories, catIndex) => (
          <div key={catIndex} className="skill-category">
            <h3 className="skill-category-title">{categories.name}</h3>
            <div className="skill-category-list">
              {categories.item.map((skill, skillIndex) => (
                <a
                  key={skillIndex}
                  className="skill-card"
                  href={skill.doc}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    key={skillIndex}
                    className="skill-logo"
                    src={skill.logo}
                    alt={skill.name}
                    loading="lazy"
                  />
                  
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
