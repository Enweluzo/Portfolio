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
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "../header.css";
import "../header-nav-mobile.css";

function MobileHeader({ navElements, image, setImage }) {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((prev) => !prev);
  }

  function closeSidebar() {
    setOpen(false);
  }
  dayjs.extend(localizedFormat);

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
      <div
        ref={navRef}
        className={`mobile-nav-overlay${open ? " open" : ""}`}
        onClick={closeSidebar}
      >
        <nav
          className="mobile-nav-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-mobile-nav" onClick={closeSidebar}>
            &times;
          </button>
          {navElements.map((elements, index) => (
            <div
              key={index}
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
                src={image === index ? elements.imageActive : elements.image}
                alt=""
              />
              <span className="mobile-nav-text">{elements.text}</span>
            </div>
          ))}
          <div className="available date">
            <div></div> <span>{dayjs().format("LLL")}</span>
          </div>
        </nav>
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
              <a
                href={elements.link}
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
              </a>
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
    {
      image: home,
      imageActive: homeActive,
      text: "Home",
      link: "#intro",
    },
    { image: about, imageActive: aboutActive, text: "About", link: "#about" },
    {
      image: experience,
      imageActive: experienceActive,
      text: "Experience",
      link: "#experience",
    },
    {
      image: projects,
      imageActive: projectsActive,
      text: "Projects",
      link: "#project",
    },
    {
      image: skills,
      imageActive: skillsActive,
      text: "Skills",
      link: "#skill",
    },
    {
      image: testimonials,
      imageActive: testimonialsActive,
      text: "Testimonials",
      link: "#testimonial",
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
