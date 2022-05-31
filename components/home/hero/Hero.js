import * as S from "./styles/styles";
import * as V from "./variants/heroVariants";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
              the competition. Strong technical presents and expert level SEO
              practices to give businesses the competitive edge over the
              competition.
            </p>
          </S.FadeBox>
        </div>
      </S.HeroWrapper>
    </section>
  );
};

export default Hero;
