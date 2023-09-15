import { useState, useEffect } from "react";
import MobileNav from "./mobile/Mobile";
import Desktop from "./desktop2/Desktop";

function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);


  return width < 580 ? <MobileNav /> : <Desktop />;
}

export default Navbar;
