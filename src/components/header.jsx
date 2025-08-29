import { useState, useRef } from "react";
import useWindowWidth from "../hooks/useWindowWidth";
import home from "../assets/icons/home.svg";
import homeActive from "../assets/icons/home-active.svg";
import about from "../assets/icons/about.svg";
import aboutActive from "../assets/icons/about-active.svg";
import experience from "../assets/icons/experience.svg";
import experienceActive from "../assets/icons/experience-active.svg";
import projects from "../assets/icons/projects.svg";
import projectsActive from "../assets/icons/projects-active.svg";
import skills from "../assets/icons/skills.svg";
import skillsActive from "../assets/icons/skills-active.svg";
import testimonials from "../assets/icons/testimonials.svg";
import testimonialsActive from "../assets/icons/testimonials-active.svg";
import contact from "../assets/icons/contact.svg";
import contactActive from "../assets/icons/contact-active.svg";
import menu from "../assets/icons/menu.svg";
import logo from "../assets/icons/logo1.svg";
import "../header.css";
import "../header-nav-mobile.css";

function MobileHeader({ navElements, image, setImage }) {
  let navRef = useRef(null);

  function toggle() {
    navRef.current.classList.toggle("hide");
    navRef.current.classList.toggle("transition");
  }

  return (
    <header className="header">
      <div className="top-logo top-logo-m">
        <span>KelStacked</span> <img src={logo} alt="" />
      </div>
      <div>
        <div onClick={toggle} className="menu">
          <img src={menu} alt="" />
        </div>
      </div>
      <div ref={navRef} className="nav hide">
        {navElements.map((elements, index) => {
          return (
            <div
              className={
                image === index
                  ? "img-container img-container-active"
                  : "img-container"
              }
              onClick={() => {
                setImage(index);
              }}
            >
              <img
                ref={navRef}
                key={index}
                src={image === index ? elements.imageActive : elements.image}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </header>
  );
}
function DesktopHeader({ navElements, image, setImage }) {
  return (
    <>
      <header>
        <div className="top-logo">
          <span>KelStacked</span> <img src="/logo.svg" alt="" />
        </div>
        <nav>
          {navElements.map((elements, index) => {
            return (
              <div
                key={index}
                className="nav-elements"
                onMouseEnter={() => {
                  setImage(index);
                }}
                onMouseLeave={() => {
                  setImage(false);
                }}
              >
                <img
                  src={image === index ? elements.imageActive : elements.image}
                  alt=""
                />{" "}
                <span>{elements.text}</span>
              </div>
            );
          })}
        </nav>
        <div></div>
      </header>
    </>
  );
}
function Header() {
  let [image, setImage] = useState(false);
  const navElements = [
    { image: home, imageActive: homeActive, text: "Home" },
    { image: about, imageActive: aboutActive, text: "About" },
    { image: experience, imageActive: experienceActive, text: "Experience" },
    { image: projects, imageActive: projectsActive, text: "Projects" },
    { image: skills, imageActive: skillsActive, text: "Skills" },
    {
      image: testimonials,
      imageActive: testimonialsActive,
      text: "Testimonials",
    },
    { image: contact, imageActive: contactActive, text: "Contact" },
  ];
  let windowWidth = useWindowWidth();
  return (
    <>
      {windowWidth > 840 ? (
        <DesktopHeader
          navElements={navElements}
          image={image}
          setImage={setImage}
        />
      ) : (
        <MobileHeader
          navElements={navElements}
          image={image}
          setImage={setImage}
        />
      )}
    </>
  );
}
export default Header;
