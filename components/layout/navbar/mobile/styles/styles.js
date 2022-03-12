import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

export const MenuButton = styled(MenuIcon)`
  z-index: 20;
  color: #f2f2f2;
  font-size: 2.3rem;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
`;

export const Drawer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${(p) => (p.open ? "55%" : "0%")};
  overflow-y: auto;
  opacity: ${(p) => (p.open ? "1" : "0")};
  height: 100vh;
  background: ${(p) => p.theme.colors.blue_300};
  min-height: 100vh;
  transition: width 700ms ease-in-out 0s;
`;

export const MobileNav = styled.ul`
  opacity: ${(p) => (p.open ? "1" : "0")};
  transition: all 1s ease-in-out;
  list-style: none;
  margin-top: 10rem;
  margin-bottom: 1.5rem;
  padding-left: 0 !important;
  li {
    display: flex;
    align-items: center;
    color: #f2f2f2;
    font-size: 1.3rem;
    white-space: nowrap;
    justify-content: center;
    font-family: ${(p) => p.theme.font.heading};

    letter-spacing: 0.13rem;
    */ a {
      text-decoration: none;
    }
    .header__icon {
      display: flex;
      width: 80%;
      padding: 1.3rem 0;
      justify-content: center;
    }
    &:hover {
      color: orange;
      cursor: pointer;
      border-right: 6px solid var(--blue-200);
      background: #0000001c;
      color: #f2f2f2;
      font-weight: 900;
      transition: 200ms;
    }
    svg {
      margin-right: 0.9rem;
    }
  }
`;

export const TransparentWall = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${(p) => (p.open ? "100%" : "0%")};
  transition: width 1s ease-in-out 0s;
  background: #00000059;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  .close {
    width: 2rem;
    height: 2rem;
    background: #f2f2f2;
    border-radius: 1rem;
    margin-top: 1rem;
    margin-right: 1rem;
    opacity: ${(p) => (p.open ? "1" : "0")};
    display: flex;
    justify-content: center;
    align-items: center;
    &:active {
      transition: 100ms;
      transform: scale(0.9);
    }
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  svg {
    font-size: 1.5rem;
    color: #f2f2f2;
    margin-top: 2rem;
    &:hover {
      opacity: 0.8;
      transition: 300ms;
      color: #316ec9;
    }
  }
`;

export const Divider = styled.div`
  width: 2rem;
  background: #f2f2f2;
  height: 0.1rem;
  margin: 0 auto;
`;
