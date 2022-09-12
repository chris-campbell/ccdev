import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactModal from "../../../modal/ContactModal";
import { useRouter } from "next/router";
// MUI imports
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

// Component Styles
import * as S from "./styles/styles";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { pathname } = useRouter();

  const handleOpen = () => {
    setOpenModal(true);
    toggleOpen();
  };
  const handleClose = () => {
    setOpenModal(false);
    if (open) toggleOpen();
  };

  const toggleOpen = () => {
    setOpen(!open);
    fixedBackground();
  };

  const fixedBackground = () => {
    const overflow = open ? "auto" : "hidden";
    document.body.style.overflow = overflow;
  };

  return (
    <>
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
                          src="https://s3.us-east-2.amazonaws.com/2ndplayer.co/logos/horiz-logo-white.png"
                          width={125}
                          height={27}
                          alt="Chris Campbell dev logo"
                        />
                      </a>
                    </Link>
                  </li>
                  {pathname === "/" && (
                    <>
                      <li onClick={() => toggleOpen()}>
                        <Link href="#me" passHref={true}>
                          <a>
                            <div className="header__icon">Me</div>
                          </a>
                        </Link>
                      </li>
                      <li onClick={() => toggleOpen()}>
                        <Link href="#projects" passHref={true}>
                          <a>
                            <div className="header__icon">Projects</div>
                          </a>
                        </Link>
                      </li>
                      <li onClick={() => toggleOpen()}>
                        <Link href="/articles" passHref={true}>
                          <a>
                            <div className="header__icon">Blog</div>
                          </a>
                        </Link>
                      </li>
                    </>
                  )}
                </S.MobileNav>
              </S.Drawer>
            </S.TransparentWall>
          </div>
        </div>
      </header>

      <ContactModal open={openModal} handleClose={handleClose} />
    </>
  );
};

export default MobileNav;
