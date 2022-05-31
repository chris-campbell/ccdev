import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

const ItemContainer = styled.li`
  color: ${(props) => (props.selected ? "#ae44a9" : "#fff")};
  font-family: ${(p) => p.theme.fonts.paragraph};
  font-size: 0.8rem;
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  max-width: 85%;
  padding: 0.5rem 0.6rem;
  word-spacing: 0.1rem;
  &:hover {
    box-sizing: border-box;
    color: ${(p) => p.theme.colors.blue100} !important;
    transition: 200ms;
    cursor: pointer;
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
  const [isActive, setIsActive] = useState(false);
  const itemRef = useRef(null);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setPreview(item, itemRef);
  }, []);

  return (
    <ItemContainer
      selected={isActive}
      id={item.id}
      ref={itemRef}
      onClick={() => setPreview(item, itemRef)}
    >
      {/* <span></span> */}
      {item.title}
    </ItemContainer>
  );
};

export default Item;
