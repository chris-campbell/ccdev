import React, { useState } from "react";
import styled from "styled-components";
import Content from "./content/Content";
import { Title } from "./title/Title";

const Accordion = ({ title, articleList, setPreview }) => {
  const [isShowing, setIsShowing] = useState(true);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <AccordionContainer>
      <AccordionWrapper>
        <Title isShowing={isShowing} title={title} toggle={toggle} />
        <Content
          isShowing={isShowing}
          articleList={articleList}
          setPreview={setPreview}
        />
      </AccordionWrapper>
    </AccordionContainer>
  );
};

export default Accordion;

const AccordionContainer = styled.div`
  max-width: 17rem;
  background-color: ${(p) => p.theme.colors.black};
`;

const AccordionWrapper = styled.div`
  overflow: hidden;
`;
