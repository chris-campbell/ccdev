import styled from "styled-components";
import { motion } from "framer-motion";

export const NavLinkContainer = styled(motion.li)`
  font-size: 0.9rem;
  font-family: ${(p) => p.theme.fonts.parapgraph};
  font-weight: 100;
  color: ${(p) => p.theme.colors.white300};

  &:hover {
    color: ${(p) => p.theme.colors.orange300};
    transition: 300ms;
  }
`;
