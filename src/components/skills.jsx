import "../skills.css";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";
import tailwind from "../assets/icons/tailwind.svg";
let skill = [
  { img: html, skill: "HTML5" },
  { img: css, skill: "CSS3" },
  { img: javascript, skill: "Javascript" },
  { img: react, skill: "React" },
  { img: tailwind, skill: "Tailwind" },
];
export default function Skills() {
  return (
    <section className="skills" id="skill">
      <h2 className="skills-heading">Skills</h2>

      <div className="skills-container">
        <div className="skills-category">
          <div className="skills-grid">
            {skill.map((skill, i) => {
              return (
                <div key={i} className="skill-card">
                  <div className="skill-icon">
                    <img src={skill.img} alt="" />
                  </div>
                  <p>{skill.skill}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
