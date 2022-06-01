import * as S from "./styles/styles";
import Link from "next/link";
import Image from "next/image";

const DesktopNav = () => {
  const logoUrl =
    "https://s3.us-east-2.amazonaws.com/2ndplayer.co/logos/horiz-logo-white.png";
  const logoAlt = "Chris Campbell Dev Logo";

  const fadeUpANav = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, type: "spring", delay: 0.2 },
    },
  };
  const fadeUpBNav = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, type: "spring", delay: 0.4 },
    },
  };
  const fadeUpCNav = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, type: "spring", delay: 0.6 },
    },
  };
  const fadeUpDNav = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, type: "spring", delay: 0.8 },
    },
  };

  return (
    <S.NavbarContainer id="navbar">
      <S.NavbarWrapper>
        <Link href="/">
          <a>
            <Image src={logoUrl} alt={logoAlt} width={125} height={27} />
          </a>
        </Link>

        <nav>
          <S.NavLinks>
            <S.NavLink variants={fadeUpANav} initial="hidden" animate="visible">
              <Link href="/">
                <a>Home_</a>
              </Link>
            </S.NavLink>
            <S.NavLink variants={fadeUpBNav} initial="hidden" animate="visible">
              <Link href="/articles">
                <a>Blog_</a>
              </Link>
            </S.NavLink>
            <S.NavLink variants={fadeUpCNav} initial="hidden" animate="visible">
              <Link href="/work">
                <a>Work_</a>
              </Link>
            </S.NavLink>
            <S.HireLink
              variants={fadeUpDNav}
              initial="hidden"
              animate="visible"
            >
              <Link href="/#fulltime">
                <a>Hire</a>
              </Link>
            </S.HireLink>
          </S.NavLinks>
        </nav>
      </S.NavbarWrapper>
    </S.NavbarContainer>
  );
};

export default DesktopNav;
