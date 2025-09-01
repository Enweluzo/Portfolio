import user1 from "../assets/icons/user1.jpg";
import nneoma from "../assets/icons/nneoma.jpg";
import toyosi from "../assets/icons/toyosi.jpg";
import anjola from "../assets/icons/anjola.jpg";
import david from "../assets/icons/david.PNG";
import anonymous from "../assets/icons/anonymous.jpg";

import plus from "../assets/icons/plus.svg";
import minus from "../assets/icons/minus.svg";
import "../testimonial.css";
import { useEffect, useRef, useState } from "react";

function Testimonial() {
  let [isAnimating, setIsAnimating] = useState(false);

  let containerRef = useRef(null);
  let [id, setId] = useState(0);
  let user = [
    {
      name: "John Klera",
      text: ` Kelvin did an amazing job on my project. The site looks professional, loads quickly, and works perfectly on all devices. He listened to my ideas and added creative touches that made the final design even better than I imagined`,
      img: user1,
    },
    {
      name: "Nneoma Enweluzo",
      text: ` Working with Kelvin was a smooth experience. The design was clean,
            modern, and mobile-friendly. He paid attention to details and
            delivered exactly what I needed, even faster than expected.`,
      img: nneoma,
    },
    {
      name: "Olaonipekun Toyosi",
      text: ` “I really liked how Kelvin explained every step of the process. The final design looked modern and clean, and it worked smoothly on both desktop and mobile. Highly recommended!`,
      img: toyosi,
    },
    {
      name: "Anjola Awoyemi",
      text: ` Working with Kelvin felt easy and stress-free. He listened to my feedback and made adjustments fast. The end result was a polished website that matched my brand perfectly.`,
      img: anjola,
    },
    {
      name: "David",
      text: ` The project was delivered on time and with great quality. Kelvin is reliable, communicates clearly, and makes sure you’re happy with the final product.`,
      img: david,
    },
    {
      name: "Anonymous feedback",
      text: `Kelvin combines creativity with technical skill. He gave me ideas I hadn’t even thought about, and the site turned out better than I imagined. I’ll definitely work with him again.`,
      img: anonymous,
    },
  ];

  useEffect(() => {
    incremenet("plus");
  }, []);

  function incremenet(direction) {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => setIsAnimating(false), 600);
    const WIDTH = containerRef.current.scrollWidth;
    if (direction === "plus" && id < user.length - 1) {
      containerRef.current.scrollLeft += WIDTH / user.length;

      let newId = id + 1;
      console.log(newId);
      setId(newId);
    }
    if (direction === "minus" && id > 0) {
      containerRef.current.scrollLeft -= WIDTH / user.length;
      let newId = id - 1;
      console.log(newId);
      setId(newId);
    }
  }

  return (
    <section className="testimonial" id="testimonial">
      <h1>Testimonial</h1>
      <h2>What my clients are saying</h2>

      <div ref={containerRef} className="testimonial-container">
        {user.map((user, i) => {
          return (
            <div
              key={i}
              className={
                id === i
                  ? "testimonial-inner-container center-translate"
                  : "testimonial-inner-container"
              }
            >
              <div>
                <img src={user.img} alt="" />
              </div>
              <p>{user.text}</p>
              <h2>{user.name}</h2>
            </div>
          );
        })}
      </div>
      <div className="button-switch">
        <button
          onClick={() => {
            incremenet("minus");
          }}
        >
          <img src={minus} alt="" />
        </button>
        <button
          onClick={() => {
            incremenet("plus");
          }}
        >
          <img src={plus} alt="" />
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
