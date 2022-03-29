import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// MUI imports
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Component Styles
import * as S from "./styles/styles";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
    fixedBackground();
  };

  const fixedBackground = () => {
    const overflow = open ? "auto" : "hidden";
    document.body.style.overflow = overflow;
  };

  return (
    <header className="header__mobile">
      <div className="header__mobile-inner">
        <div>
          <IconButton>
            <S.MenuButton onClick={() => toggleOpen()} />
          </IconButton>
          <S.TransparentWall open={open} aria-hidden="true">
            <div onClick={() => toggleOpen()} className="close">
              <CloseIcon />
            </div>
            <S.Drawer open={open}>
              <S.MobileNav open={open}>
                <li onClick={() => toggleOpen()}>
                  <Link href="/">
                    <a>
                      <Image
                        src="https://hoppr-portfolio.s3.us-east-2.amazonaws.com/mobile_logo.svg"
                        width={70}
                        height={100}
                        alt="Chris Campbell dev logo"
                      />
                    </a>
                  </Link>
                </li>
                <li onClick={() => toggleOpen()}>
                  <Link href="/blog" passHref={true}>
                    <a>
                      <div className="header__icon">Blog</div>
                    </a>
                  </Link>
                </li>
                <li onClick={() => toggleOpen()}>
                  <Link href="/work" passHref={true}>
                    <a>
                      <div className="header__icon">Work</div>
                    </a>
                  </Link>
                </li>
                <li onClick={() => toggleOpen()}>
                  <Link href="/#fulltime" passHref={true}>
                    <a>
                      <div className="header__icon">Hire</div>
                    </a>
                  </Link>
                </li>
              </S.MobileNav>
              <S.Divider className="divider"></S.Divider>
              <S.Social className="social">
                <GitHubIcon />
                <TwitterIcon />
                <LinkedInIcon />
              </S.Social>
            </S.Drawer>
          </S.TransparentWall>
        </div>
      </div>
    </header>
  );
};

export default MobileNav;
