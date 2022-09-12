import React from "react";
import Link from "next/link";
import * as styled from "./styles/styles";

const Fin = () => {
  return (
    <styled.FinContainter>
      <div className="fin-wrapper">
        <div className="section-text">
          <h3>Fin</h3>
          <div className="highlight"></div>
          <Link href="/articles">
            <a>Some articles</a>
          </Link>
        </div>
      </div>
    </styled.FinContainter>
  );
};

export default Fin;
