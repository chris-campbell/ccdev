import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 auto;
  padding: calc(250px - 150px) 150px;
  min-height: 92vh;
  position: relative;
  @media (max-width: 580px) {
    padding: calc(250px - 150px) 50px;
  }
  @media (max-width: 460px) {
    padding: calc(250px - 150px) 30px;
  }
`;

export const SocialPanel = styled.div`
  display: flex;
  gap: 0.7rem;
  font-family: ${(p) => p.theme.font.paragraph};
  color: ${(p) => p.theme.colors.white_300};
  list-style-type: none;
  li {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    letter-spacing: 0.05rem;
    span {
      @media (max-width: 395px) {
        display: none;
      }
    }
  }
`;

export const FadeBox = styled(motion.div)`
  h1,
  h2,
  h3 {
    font-family: ${(p) => p.theme.font.heading};
    color: ${(p) => p.theme.colors.white_300};
  }

  h1 {
    font-size: clamp(0.875rem, 5vw, 1rem);
    color: ${(p) => p.theme.colors.blue_100};
    font-family: ${(p) => p.theme.font.paragraph};
    margin-bottom: 1rem;
    letter-spacing: 0.12rem;
  }
  h2 {
    font-size: clamp(2.5rem, 8vw, 5rem);
  }

  h3 {
    font-size: clamp(2.5rem, 8vw, 5rem);
    color: ${(p) => p.theme.colors.grey_200};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    font-family: ${(p) => p.theme.font.paragraph};
    color: ${(p) => p.theme.colors.white_300};
    max-width: 48rem;
    letter-spacing: 0.04rem;
  }
`;