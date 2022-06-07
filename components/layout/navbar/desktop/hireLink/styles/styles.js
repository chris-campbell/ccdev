import styled from "styled-components";
import { motion } from "framer-motion";

export const NavLink = styled(motion.li)`
  font-size: 0.9rem;
  font-family: ${(p) => p.theme.fonts.parapgraph};
  font-weight: 100;
  color: ${(p) => p.theme.colors.white300};

  &:hover {
    color: ${(p) => p.theme.colors.orange300};
    transition: 300ms;
  }
`;

export const HireLink = styled(NavLink)`
  padding: 0.5rem 1rem;
  border: 1px solid ${(p) => p.theme.colors.orange300};
  border-radius: 0.2rem;
  color: ${(p) => p.theme.colors.orange300};
  transition: 300ms ease-in;
  &:hover {
    background-color: ${(p) => p.theme.colors.orange300};
    color: ${(p) => p.theme.colors.white300};
    transition: 300ms ease-out;
  }

  &:active {
    background-color: ${(p) => p.theme.colors.white300};
    color: ${(p) => p.theme.colors.blue300};
    border: 1px solid transparent;
  }
`;
