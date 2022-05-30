import styled from "styled-components";
import { motion } from "framer-motion";

export const WorkContainer = styled.section`
  width: 100%;
`;

export const WorkWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1600px;
  padding: clamp(2.5rem, 5vw, calc(250px - 150px)) clamp(1rem, 10vw, 150px);

  h1 {
    font-family: ${(p) => p.theme.fonts.heading};
    color: ${(p) => p.theme.colors.white300};
    font-size: clamp(2rem, 10vw, 3rem);
    margin-bottom: 1rem;
  }

  p {
    font-family: ${(p) => p.theme.fonts.parapgraph};
    color: ${(p) => p.theme.colors.white300};
    font-size: 1rem;
    max-width: 43.25rem;
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
