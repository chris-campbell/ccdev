import React from "react";
import * as S from "./styles/styles";

const IndexButtons = ({ list, setList }) => {
  const handleClick = (e) => {
    const year = e.target.getAttribute("data-year");
    const found = list.find((selectedYear) => selectedYear[year]);

    setList(found[year]);
  };

  const renderIndex = () => {
    return list.map((item) => {
      for (const [year, list] of Object.entries(item)) {
        return (
          <S.IndexButton
            onClick={(e) => handleClick(e)}
            data-year={year}
            key={year}
          >
            {year}
          </S.IndexButton>
        );
      }
    });
  };
  return <S.IndexButtonContainer>{renderIndex()}</S.IndexButtonContainer>;
};

export default IndexButtons;
