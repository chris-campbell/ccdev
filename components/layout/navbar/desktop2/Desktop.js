import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DesktopNavContainer } from "./styles/styles";
import Navigation from './navigation/Navigation';

const Desktop = () => {
  return (
    <DesktopNavContainer>
      <div className="desktop-nav-wrapper">
        <Link href="/">
          <a>
            <Image
              src={
                "/horiz-logo-white.png"
              }
              alt="2ndPlayer Logo"
              width={125}
              height={27}
            />
          </a>
        </Link>

        <Navigation />
      </div>
    </DesktopNavContainer>
  );
};

export default Desktop;
