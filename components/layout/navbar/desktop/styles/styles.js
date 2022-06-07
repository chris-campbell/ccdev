import styled from "styled-components";

export const NavbarContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid #46464687;
  padding: 1rem 0;
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
