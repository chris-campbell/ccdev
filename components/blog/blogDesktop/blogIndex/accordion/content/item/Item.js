import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const ItemContainer = styled.li`
  color: ${(props) => (props.selected ? "#ae44a9" : "#fff")};
  font-family: ${(p) => p.theme.fonts.paragraph};
  font-size: 0.8rem;
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  max-width: 100%;
  padding: 0.5rem 0.6rem;
  word-spacing: 0.1rem;
  margin-right: 0.8rem;

  &:hover {
    background-color: ${(p) => p.theme.colors.blue100};
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
    color: ${(p) => p.theme.colors.blue300} !important;
  }

  &:active {
    color: ${(p) => p.theme.colors.orange300} !important;
  }
  span {
    display: block;
    min-width: 0.3rem;
    min-height: 0.3rem;
    border: 1px solid ${(p) => p.theme.colors.white300};
    margin-right: 1rem;
    border-radius: 1rem;
  }
`;

const Item = ({ item, setPreview }) => {
  // const [isActive, setIsActive] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    setPreview(item, itemRef);
  }, []);

  return (
    <ItemContainer
      // selected={isActive}
      id={item.id}
      ref={itemRef}
      onClick={() => setPreview(item, itemRef)}
    >
      {item.title}
    </ItemContainer>
  );
};

export default Item;
