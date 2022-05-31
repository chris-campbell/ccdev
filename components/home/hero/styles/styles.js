import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(2.5rem, 5vw, calc(250px - 150px)) clamp(1rem, 10vw, 150px);
  position: relative;
`;

export const SocialPanel = styled.div`
  display: flex;
  gap: 0.7rem;
  font-family: ${(p) => p.theme.fonts.parapgraph};
  color: ${(p) => p.theme.colors.white300};
  list-style-type: none;
  margin-bottom: 1.5rem;
  li {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    letter-spacing: 0.05rem;
    font-size: 0.9rem;
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
    font-family: ${(p) => p.theme.fonts.heading};
    color: ${(p) => p.theme.colors.white300};
  }

  h1 {
    font-size: clamp(0.875rem, 5vw, 1rem);
    color: ${(p) => p.theme.colors.blue100};
    font-family: ${(p) => p.theme.fonts.parapgraph};
    margin-bottom: 1rem;
    letter-spacing: 0.12rem;
  }
  h2 {
    font-size: clamp(2.1rem, 6vw, 4rem);
  }

  h3 {
    font-size: clamp(2.1rem, 5vw, 4rem);
    color: #bbbcbe;
    margin-bottom: 1rem;
    width: 76%;
    letter-spacing: 0.1rem;
  }

  p {
    font-size: 1rem;
    font-family: ${(p) => p.theme.fonts.parapgraph};
    color: ${(p) => p.theme.colors.grey200};
    max-width: 48rem;
    letter-spacing: 0.04rem;
    line-height: 1.5;
  }
`;
