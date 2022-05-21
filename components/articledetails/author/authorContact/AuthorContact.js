import React from "react";
import styled from "styled-components";
import SocialIcons from "./socalIcons/SocialIcons";

const AuthorNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  @media (max-width: 876px) {
    flex-direction: column;
  }
  h2 {
    color: ${(p) => p.theme.colors.white300};
    margin-bottom: 0.2rem;
    letter-spacing: 1px;
  }

  span {
    letter-spacing: 0.5px;
    color: ${(p) => p.theme.colors.grey100};
    font-size: clamp(0.8rem, 3vw, 1rem);
  }
`;

const AuthorContact = ({ name }) => {
  return (
    <AuthorNameContainer className="author-name">
      <div>
        <h2>{name}</h2>
        <span>React Developer / Technical Writer</span>
      </div>
      <SocialIcons />
    </AuthorNameContainer>
  );
};

export default AuthorContact;
