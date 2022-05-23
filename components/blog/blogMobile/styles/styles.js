import styled from "styled-components";

export const BlogMobileContainer = styled.div`
  padding: clamp(1rem, 3vw, 4rem);
`;

export const CurrentListingContainer = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.colors.blue200};
  padding: 3rem 0;

  h2 {
    margin-bottom: 1.2rem;
    color: ${(p) => p.theme.colors.white300};
    max-width: 30rem;
    font-size: clamp(1.2em, 3vw, 2rem);
    text-transform: uppercase;
  }

  .mobile-cover-image {
    margin-bottom: 1rem;
  }

  p {
    color: #a8aaac;
  }
`;

export const NavContent = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
  align-items: center;
`;
