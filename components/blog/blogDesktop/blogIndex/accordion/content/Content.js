import React from "react";
import styled from "styled-components";
import Item from "./item/Item";

const Content = ({ isShowing, articleList, setPreview }) => {
  return (
    <ContentContainer showing={isShowing}>
      <IndexList>
        {articleList.map((item) => (
          <Item key={item.id} setPreview={setPreview} item={item} />
        ))}
      </IndexList>
    </ContentContainer>
  );
};

export default Content;

const ContentContainer = styled.div`
  transition: max-height 600ms;
  overflow: hidden;
  max-height: ${(p) => (p.showing ? "300px" : "0")};

  p {
    color: ${(p) => p.theme.colors.tan};
    padding: 1rem;
    margin: 1.5rem 0;
    border: 1px solid ${(p) => p.theme.colors.tan};
    border-radius: 0.2rem;
    font-size: 0.8rem;
    line-height: 1.5;
  }
`;

const IndexList = styled.ul`
  margin: 1rem 0;
  list-style-position: outside;
`;
