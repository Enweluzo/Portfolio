import { useEffect, useState } from "react";

function useObserver(experienceRef, addedName) {
  let [toggleSlide, setToggleSlide] = useState(0);
  useEffect(() => {
    if (!experienceRef.current) return;
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(addedName);
            setToggleSlide(1);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(experienceRef.current);
    return () => {
      observer.disconnect();
    };
  }, [experienceRef, addedName]);
  return toggleSlide;
}
export default useObserver;
