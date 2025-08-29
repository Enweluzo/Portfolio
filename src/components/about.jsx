import computer from "../assets/icons/computer.svg";
import uiux from "../assets/icons/pallets.svg";
import bolt from "../assets/icons/thunder.svg";
import "../about.css";

function About() {
  return (
    <section className="about">
      <div className="about-text">
        <h1 className="about-h">About</h1>
        <p className="about-text-p">
          I’m a front-end developer who enjoys building clean, interactive, and
          user-friendly applications. I work with HTML,CSS, JavaScript, React,
          and Tainwindcss to create smooth, dynamic experiences. I focus on both
          design and functionality, making sure my projects look polished,
          perform well, and deliver real value. Always curious and eager to
          learn, I see every project as a chance to grow, experiment, and bring
          creative ideas to life.
        </p>
        <div className="client-project">
          <div>
            <h1 className="about-h2">17+</h1>
            <p className="about-h2">Project Completed</p>
          </div>
          <div>
            <h1 className="about-h2">11+</h1>
            <p className="about-h2">Happy Clients</p>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="about-inner-container">
          <div className="about-img-container">
            <img src={computer} alt="" />
          </div>
          <div className="about-list">
            <h2>Front-End Development</h2>
            <p>
              Build responsive and interactive websites with html, css,
              javaScript, react, tailwindcss
            </p>
          </div>
        </div>
        <div className="about-inner-container">
          <div className="about-img-container second-selector">
            <img src={uiux} alt="" />
          </div>
          <div className="about-list">
            <h2>UI/UX Implementation</h2>
            <p>Convert Figma or design file into functional ,clean code</p>
          </div>
        </div>
        <div className="about-inner-container">
          <div className="about-img-container third-selector">
            <img src={bolt} alt="" />
          </div>
          <div className="about-list">
            <h2>Website Optimization</h2>
            <p>
              Improve performance ,accessibility ,and SEO for better user
              experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
