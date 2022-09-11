import React from "react";
import * as styled from "./styles/styles";

const Fin = () => {
  return (
    <styled.FinContainter>
      <div className="fin-wrapper">
        <div className="section-text">
          <h3>Fin</h3>
          <div className="highlight"></div>
          <a href="#">Some articles</a>
        </div>
      </div>
    </styled.FinContainter>
  );
};

export default Fin;
