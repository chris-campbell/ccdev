import styled from "styled-components";
import { motion } from "framer-motion";

export const NavbarContainer = styled.header`
  width: 100%;
`;

export const NavbarWrapper = styled.div`
  max-width: 97%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 0.09rem;
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 1.4rem;
`;

export const NavLink = styled(motion.li)`
  font-size: 0.9rem;
  font-family: ${(p) => p.theme.font.paragraph};
  font-weight: 100;
  color: ${(p) => p.theme.colors.white_300};
`;

export const HireLink = styled(NavLink)`
  padding: 0.5rem 1rem;
  border: 1px solid ${(p) => p.theme.colors.orange_300};
  border-radius: 0.2rem;
  color: ${(p) => p.theme.colors.orange_300};
`;
