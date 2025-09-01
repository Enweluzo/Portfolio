import animation from "../assets/animation.webp";
import "../intro.css";
function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="available">
        <div></div> <span>Available for new opportunities</span>
      </div>
      <div className="intro-container">
        <div className="intro-text show">
          <h1 className="">
            Front-End <br />
            <span>Developer &</span>
            <br /> UI/UX Enthusiast
          </h1>
          <p>
            "I’m Kelvin, a passionate front-end developer focused on creating
            modern, responsive, and user-friendly websites. My goal is to bring
            ideas to life with clean code and creative design."
          </p>
        </div>
        <div className="intro-animation">
          <img src={animation} alt="" />
        </div>
      </div>
      <button className="download-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 3v12m0 0l-5-5m5 5l5-5M5 20h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Download CV
      </button>
      <p className="location">&#8213; Based in Nigeria Opened to remote work</p>
    </section>
  );
}
export default Intro;
