import React from "react";
import styled from "styled-components";
import TextTruncate from "react-text-truncate";
import NavButton from "../navButton/NavButton";
import Link from "next/link";

const ExcerptContainer = styled.p`
  color: ${(p) => p.theme.colors.grey400};
  font-size: clamp(0.9rem, 2vw, 1rem);
  width: 100%;

  span {
    word-wrap: break-word;
  }

  a {
    color: ${(p) => p.theme.colors.orange};
    margin-top: 1rem;
    margin-right: 1rem;
    float: right;
  }
`;

const Excerpt = ({ content, slug }) => {
  return (
    <ExcerptContainer>
      <TextTruncate
        line={2}
        element="span"
        truncateText=""
        text={content}
        textTruncateChild={
          <>
            <br />
            <Link href={`/articles/${slug}`}>Read more</Link>
          </>
        }
      />
    </ExcerptContainer>
  );
};

export default Excerpt;
