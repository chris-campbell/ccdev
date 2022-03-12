import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { ArrowUpward } from "@mui/icons-material";

const FooterContainer = styled.footer`
  width: 100%;
  background: ${(p) => p.theme.colors.blue_200};
  position: relative;
`;

const FooterWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: 98%;
  padding: 2rem;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 630px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1.2rem;

  svg {
    font-size: 3.5rem;
    padding: 0.8rem;
    border: 1px solid none;
    border-radius: 2rem;
    background: ${(p) => p.theme.colors.blue_300};
    color: ${(p) => p.theme.colors.blue_100};
    @media (max-width: 630px) {
      font-size: 3rem;
    }
  }
`;

const FooterNav = styled.ul`
  display: flex;
  list-style-type: none;
  font-family: ${(p) => p.theme.font.paragraph};
  color: ${(p) => p.theme.colors.grey_200};
  gap: 1.5rem;
  padding-left: 0;
`;

const UpArrow = styled(ArrowUpward)`
  position: absolute;
  right: 1rem;
  bottom: 7.5rem;
  padding: 0.4rem 0.2rem;
  font-size: 2rem;
  background: ${(p) => p.theme.colors.white_300};
  color: ${(p) => p.theme.colors.blue_300};
  @media (max-width: 630px) {
    display: none;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Link href="/#navbar">
        <a>
          <UpArrow />
        </a>
      </Link>

      <FooterWrapper>
        <Image
          src="https://hoppr-portfolio.s3.us-east-2.amazonaws.com/mobile_logo.svg"
          width={70}
          height={70}
          alt="Chris Campbell Dev Mobile Logo"
        />
        <FooterSocial>
          <Facebook />
          <Instagram />
          <LinkedIn />
        </FooterSocial>

        <FooterNav>
          <li>Home</li>
          <li>Blog</li>
          <li>Work</li>
        </FooterNav>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;