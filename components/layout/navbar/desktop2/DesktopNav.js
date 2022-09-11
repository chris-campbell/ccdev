import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DesktopNavContainer } from "./styles/styles";
import Navigation from "./navigation/Navigation";

const DesktopNav = () => {
  return (
    <DesktopNavContainer>
      <div className="desktop-nav-wrapper">
        <Link href="/">
          <a>
            <Image
              src={
                "https://s3.us-east-2.amazonaws.com/2ndplayer.co/logos/horiz-logo-white.png"
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

export default DesktopNav;
