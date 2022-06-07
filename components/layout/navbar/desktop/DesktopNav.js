import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactModal from "../../../modal/ContactModal";
import NavLink from "./navLink/NavLink";
import HireLink from "./hireLink/HireLink";
import ContactLink from "./contactLink/ContactLink";
import * as S from "./styles/styles";
import * as V from "./variants/fade";

const DesktopNav = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <S.NavbarContainer id="navbar">
        <S.NavbarWrapper>
          <Link href="/">
            <a>
              <Image
                src={
                  "https://s3.us-east-2.amazonaws.com/2ndplayer.co/logos/horiz-logo-white.png"
                }
                alt={"Chris Campbell Dev Logo"}
                width={125}
                height={27}
              />
            </a>
          </Link>

          <nav>
            <S.NavLinks>
              <NavLink fade={V.fadeUpANav} label="Home" url="/" />
              <NavLink fade={V.fadeUpBNav} label="Blog" url="/articles" />
              <NavLink fade={V.fadeUpCNav} label="Work" url="/work" />
              <ContactLink
                label="Contact"
                fade={V.fadeUpCNav}
                open={handleOpen}
              />
              <HireLink fade={V.fadeUpDNav} label="Hire" url="/#fulltime" />
            </S.NavLinks>
          </nav>
        </S.NavbarWrapper>
      </S.NavbarContainer>

      <ContactModal open={open} handleClose={handleClose} />
    </>
  );
};

export default DesktopNav;
