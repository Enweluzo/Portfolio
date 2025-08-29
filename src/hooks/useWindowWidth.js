import { useState, useEffect } from "react";

function useWindowWidth() {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function resizeCB() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", resizeCB);
    return () => window.removeEventListener("resize", resizeCB);
  }, []);
  return windowWidth;
}

export default useWindowWidth;
