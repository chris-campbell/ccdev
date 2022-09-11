import styled from "styled-components";
import { motion } from "framer-motion";

export const NavLink = styled(motion.li)`
  font-size: 0.9rem;
  font-family: ${(p) => p.theme.fonts.parapgraph};
  font-weight: 100;
  color: ${(p) => p.theme.colors.egg};

  &:hover {
    color: ${(p) => p.theme.colors.orange};
    transition: 300ms;
  }
`;

export const HireLink = styled(NavLink)`
  padding: 0.5rem 1rem;
  border: 1px solid ${(p) => p.theme.colors.orange};
  border-radius: 0.2rem;
  color: ${(p) => p.theme.colors.orange};
  transition: 300ms ease-in;
  &:hover {
    background-color: ${(p) => p.theme.colors.orange};
    color: ${(p) => p.theme.colors.egg};
    transition: 300ms ease-out;
  }

  &:active {
    background-color: ${(p) => p.theme.colors.egg};
    color: ${(p) => p.theme.colors.darkBlue};
    border: 1px solid transparent;
  }
`;
