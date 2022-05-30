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
    color: ${(p) => p.theme.colors.grey400};
  }
`;

export const CoverImageFrame = styled.div`
  margin-bottom: 1rem;
  img {
    height: 100% !important;
    border-radius: 0.3rem;
  }
  span {
    box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 39%) !important;
    height: 100%;
  }
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
