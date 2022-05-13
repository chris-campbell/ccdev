import * as S from "./styles/styles";
import * as V from "./variants/heroVariants";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Link from "next/link";
import styled from "styled-components";

const DownScroll = styled.div`
  width: fit-content;
  height: 2rem;
  position: absolute;
  bottom: 0;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.8rem;
  font-family: ${(p) => p.theme.fonts.parapgraph};
  svg {
    font-size: 1.2rem;
    &:active {
      transform: scale(0.8);
      transition: 300ms;
    }
  }

  &:hover {
    height: 3rem;
    transition: 400ms;
    color: ${(p) => p.theme.colors.orange300};
  }
`;

const Hero = () => {
  return (
    <section>
      <S.HeroWrapper>
        <div>
          <S.FadeBox
            variants={V.fadeAVariants}
            initial="hidden"
            animate="visible"
          >
            <h1>Hi, my name is</h1>
          </S.FadeBox>
          <S.FadeBox
            variants={V.fadeBVariants}
            initial="hidden"
            animate="visible"
          >
            <h2>Chris Campbell.</h2>
          </S.FadeBox>
          <S.FadeBox
            variants={V.fadeCVariants}
            initial="hidden"
            animate="visible"
          >
            <h3>Developing Apps for Small Businesses.</h3>
          </S.FadeBox>
          <S.FadeBox
            variants={V.fadeDVariants}
            initial="hidden"
            animate="visible"
          >
            <S.SocialPanel>
              <li>
                <Facebook /> <span>Facebook</span>
              </li>
              <li>
                <Instagram /> <span>Instagram</span>
              </li>
              <li>
                <LinkedInIcon /> <span>LinkedIn</span>
              </li>
            </S.SocialPanel>
          </S.FadeBox>
          <S.FadeBox
            variants={V.fadeEVariants}
            initial="hidden"
            animate="visible"
          >
            <p>
              I&apos;m a software engineer who specializes in business growth by
              focusing and developing a strong technical presents and expert
              level SEO practices to give businesses the competitive edge over
              the competition.
            </p>
          </S.FadeBox>
        </div>
        <DownScroll>
          <Link href="/#fulltime">Hire</Link>
        </DownScroll>
      </S.HeroWrapper>
    </section>
  );
};

export default Hero;
