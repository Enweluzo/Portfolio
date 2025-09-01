import logo from "../assets/icons/logo1.svg";
import eye from "../assets/icons/eye.svg";
import blackEye from "../assets/icons/black-eye.svg";
import github from "../assets/icons/github.svg";
import "../projects.css";
import { useState } from "react";

function Projects() {
  let [toggle, setToggle] = useState(null);

  let projectDetails = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam eaque explicabo sequi molestiae culpa commodi, consequatur illum maxime minima aliquid! Eaque assumenda corrupti autem exercitationem et, repellat veniam esse.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam eaque explicabo sequi molestiae culpa commodi, consequatur illum maxime minima aliquid! Eaque assumenda corrupti autem exercitationem et, repellat veniam esse.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam eaque explicabo sequi molestiae culpa commodi, consequatur illum maxime minima aliquid! Eaque assumenda corrupti autem exercitationem et, repellat veniam esse.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam eaque explicabo sequi molestiae culpa commodi, consequatur illum maxime minima aliquid! Eaque assumenda corrupti autem exercitationem et, repellat veniam esse.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam eaque explicabo sequi molestiae culpa commodi, consequatur illum maxime minima aliquid! Eaque assumenda corrupti autem exercitationem et, repellat veniam esse.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam eaque explicabo sequi molestiae culpa commodi, consequatur illum maxime minima aliquid! Eaque assumenda corrupti autem exercitationem et, repellat veniam esse.",
  ];
  return (
    <div id="project">
      <h2 className="project-heading">Projects</h2>
      <h4 className="projects-subheading">
        A showcase of my work and problem-solving through code
      </h4>
      <section className="project">
        {projectDetails.map((pro, i) => {
          return (
            <div key={i} className="project-container">
              <div className="project-img-container">
                <img src={logo} alt="" className="project-img" />
                <div
                  className={
                    toggle === i ? "touch-start touch-end" : "touch-start"
                  }
                  onTouchStart={() => setToggle(i)}
                  onTouchEnd={() => setToggle(projectDetails.length)}
                >
                  <img className="black-eye" src={blackEye} alt="" />
                </div>
              </div>
              <div className="project-main-container">
                <h3>E-Commerce Platform</h3>
                <p>{pro}</p>
                <div className="project-view-container">
                  <button className="project-view">
                    view <img src={eye} alt="" />
                  </button>
                  <button className="project-view-github">
                    <img src={github} alt="" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
export default Projects;
