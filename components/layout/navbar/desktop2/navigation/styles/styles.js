import styled from "styled-components";

export const NavigationContainer = styled.nav`
  ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    align-items: center;
    li {
      border: 1px solid transparent;
      color: ${(p) => p.theme.colors.egg};
      padding: 0.5rem 0.5rem;
      border-radius: 0.2rem;
      transition: all 300ms ease-in-out;
      letter-spacing: 0.1rem;
      font-size: clamp(0.8rem, 1vw, 1rem);
      &:hover {
        border: 1px solid ${(p) => p.theme.colors.blueSky};
      }
    }
  }
`;
