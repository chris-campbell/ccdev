import styled from "styled-components";
import { motion } from "framer-motion";

export const NavbarContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid #46464687;
`;

export const NavbarWrapper = styled.div`
  max-width: 97%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 0.09rem;
  position: relative;
  z-index: 100;
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 1.4rem;
`;

export const NavLink = styled(motion.li)`
  font-size: 0.9rem;
  font-family: ${(p) => p.theme.fonts.parapgraph};
  font-weight: 100;
  color: ${(p) => p.theme.colors.white300};
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
