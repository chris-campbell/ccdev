import React, { useRef } from "react";
import styled from "styled-components";
import { CopyBlock } from "react-code-blocks";

const ContentWrapper = styled.div`
  margin-bottom: 5rem;
  max-width: 1000px;

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 2rem;
    color: ${(p) => p.theme.colors.white300};
  }

  p {
    color: #aaa;
    max-width: 95%;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  ul {
    margin: 3rem 2rem;

    li {
      color: #aaa;
      font-family: ${(p) => p.theme.fonts.paragraph};
      margin-bottom: 0.7rem;
      list-style: none;
      display: flex;

      &::before {
        content: "° ";
        color: ${(p) => p.theme.colors.orange300};
        border-radius: 0.5rem;
        margin-right: 1rem;
      }
    }
  }
  a {
    color: ${(p) => p.theme.colors.blue100};
  }
`;

const Content = ({ content }) => {
  return (
    <div>
      <ContentWrapper>
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </ContentWrapper>
    </div>
  );
};

export default Content;
