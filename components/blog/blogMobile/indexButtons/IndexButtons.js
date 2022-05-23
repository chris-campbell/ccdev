import React from "react";
import styled from "styled-components";

const IndexButtons = ({ listing, setList }) => {
  const handleClick = (e) => {
    const year = e.target.getAttribute("data-year");
    const found = listing.find((selectedYear) => selectedYear[year]);

    setList(found[year]);
  };

  const renderIndex = () => {
    return listing.map((item) => {
      for (const [key, value] of Object.entries(item)) {
        return (
          <IndexButton
            onClick={(e) => handleClick(e)}
            data-year={key}
            key={key}
          >
            {key}
          </IndexButton>
        );
      }
    });
  };
  return <IndexButtonContainer>{renderIndex()}</IndexButtonContainer>;
};

export default IndexButtons;

const IndexButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  margin-top: 2rem;
`;

const IndexButton = styled.div`
  border: 2px solid ${(p) => p.theme.colors.white300};
  width: fit-content;
  padding: 0.8rem 1rem;
  color: ${(p) => p.theme.colors.white300};
  border-radius: 0.2rem;
  font-family: ${(p) => p.theme.fonts.heading};
  font-size: 0.8rem;
`;
