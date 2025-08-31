import "../skills.css";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";
import tailwind from "../assets/icons/tailwind.svg";

export default function Skills() {
  return (
    <section className="skills">
      <h2 className="skills-heading">Skills</h2>

      <div className="skills-container">
        <div className="skills-category">
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <img src={html} alt="" />
              </div>
              <p>HTML5</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <img src={css} alt="" />
              </div>
              <p>CSS3</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <img src={javascript} alt="" />
              </div>
              <p>JavaScript</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <img src={react} alt="" />
              </div>
              <p>React</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <img src={tailwind} alt="" />
              </div>
              <p>Tailwind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
