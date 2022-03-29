import { useState, useEffect } from "react";

import DesktopNav from "./desktop/Desktopnav";
import MobileNav from "./mobile/Mobile";

function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return width < 580 ? <MobileNav /> : <DesktopNav />;
}

export default Navbar;
