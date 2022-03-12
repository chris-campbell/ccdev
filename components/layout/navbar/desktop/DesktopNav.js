import * as S from "./styles/styles";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import useDimensions from "../../../../hooks/windowDimensions";

const DesktopNav = () => {
  const logoUrl = "https://hoppr-portfolio.s3.us-east-2.amazonaws.com/logo.svg";
  const logoAlt = "Chris Campbell Dev Logo";

  const width = useDimensions().width;

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
      <Head>
        <title>CC Dev - Work</title>
        <meta name="description" content="Professional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.NavbarWrapper>
        <Link href="/">
          <a>
            <Image src={logoUrl} alt={logoAlt} width={100} height={100} />
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
              Blog_
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
              Hire
            </S.HireLink>
          </S.NavLinks>
        </nav>
      </S.NavbarWrapper>
    </S.NavbarContainer>
  );
};

export default DesktopNav;
