import styled from "styled-components";
import { motion } from "framer-motion";

export const WorkContainer = styled.section`
  width: 100%;
`;

export const WorkWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1600px;
  padding: calc(250px - 150px) 150px;
  @media (max-width: 580px) {
    padding: calc(250px - 150px) 50px;
  }
  @media (max-width: 460px) {
    padding: calc(250px - 150px) 30px;
  }

  h1 {
    font-family: ${(p) => p.theme.fonts.heading};
    color: ${(p) => p.theme.colors.white300};
    font-size: clamp(3rem, 10vw, 4rem);
  }

  p {
    font-family: ${(p) => p.theme.fonts.parapgraph};
    color: ${(p) => p.theme.colors.white300};
    font-size: clamp(1rem, 5vw, 1.2rem);
    max-width: 820px;
  }
`;

export const HorizontalLines = styled.div`
  width: 100%;
  position: relative;
`;

export const Line = styled(motion.div)`
  height: 1.6rem;
  margin-bottom: 0.4rem;
  clip-path: inset(0, 0, 0, 100%);
  border-top-left-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  float: right;
  clear: both;
`;

export const ColorLine = styled(Line)`
  background: ${(p) => p.bgColor};
`;
