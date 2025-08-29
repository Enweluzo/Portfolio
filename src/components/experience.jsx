import { useRef } from "react";
import useObserver from "../hooks/observer";
import useWindowWidth from "../hooks/useWindowWidth";
import calender from "../assets/icons/calender.svg";
import "../experience.css";

function ExperienceFirst({ experienceRef, nameOfClass, desktopFix }) {
  return (
    <div ref={experienceRef} className={nameOfClass}>
      <div className={desktopFix ? ` circle ${desktopFix}` : "circle"}></div>
      <h3>Self-Taught Developer - Fronend Projects</h3>
      <p className="time-line">
        <img src={calender} alt="" /> 2024-2025
      </p>
      <p className="experience-text">
        Focused on mastering web development fundamentals by building responsive
        websites with sematic HTML and modern CSS techniques
      </p>
      <h4>Key Achievement</h4>
      <ul>
        <li>
          Built multiple static websites with responsive layouts for desktop and
          mobile.
        </li>
        <li>Practiced CSS animations, transitions, and custom layouts.</li>
        <li>Converted Figma/UI designs into clean, pixel-perfect web pages.</li>
      </ul>
      <h4>Technology</h4>
      <p className="technology">
        <span>HTML</span>
        <span>CSS</span>
        <span>Responsive Design</span>
      </p>
    </div>
  );
}

function ExperienceSecond({ rightRef, nameOfClass }) {
  return (
    <div ref={rightRef} className={nameOfClass}>
      <div className="circle"></div>
      <h3>Junior Frontend Developer - Frontend Projects</h3>
      <p className="time-line">
        <img src={calender} alt="" /> 2025-present
      </p>
      <p className="experience-text">
        Expanding skills into interactive ,dynamic applications using
        JavaScript, React.js and TailwindCSS. Learning to build scalable
        ,component-based frontends with state management and API integration.
      </p>
      <h4>Key Achievements</h4>
      <ul>
        <li>
          Built Amazon Clone with product listings, cart system, and
          authentication. Using Supabase
        </li>
        <li>
          Developed a portfolio website with custom scroll animations and
          reusable components .
        </li>
      </ul>
      <h4>Technology</h4>
      <p className="technology">
        <span>Javascript</span>
        <span>React.js</span>
        <span>TailwindCSS</span>
      </p>
    </div>
  );
}

function DesktopExperience() {
  let experienceRef = useRef(null);
  let rightRef = useRef(null);
  useObserver(rightRef, "slide");
  useObserver(experienceRef, "slide");
  return (
    <section className="experience">
      <h1>My Work Experience</h1>
      <div className="experience-container">
        <div className="experience-container-left">
          <ExperienceFirst
            experienceRef={experienceRef}
            nameOfClass={"transition-left"}
            desktopFix={"circle-desk-fix"}
          />
        </div>
        <div className="experience-line"></div>
        <div className="experience-container-right">
          <ExperienceSecond
            rightRef={rightRef}
            nameOfClass={"transition-right"}
          />
        </div>
      </div>
    </section>
  );
}

function MobileExperience() {
  let experienceRef = useRef(null);
  let rightRef = useRef(null);
  useObserver(rightRef, "slide");
  useObserver(experienceRef, "slide");
  return (
    <section className="experience">
      <h1>My Work Experience</h1>
      <div className="experience-container">
        <div className="experience-line">
          <div className="second"></div>
        </div>
        <div className="experience-container-right">
          <ExperienceFirst
            experienceRef={experienceRef}
            nameOfClass={"transition-right"}
          />
          <ExperienceSecond
            rightRef={rightRef}
            nameOfClass={"transition-right"}
          />
        </div>
      </div>
    </section>
  );
}

function Experience() {
  let width = useWindowWidth();
  return <>{width > 840 ? <DesktopExperience /> : <MobileExperience />}</>;
}

export default Experience;
