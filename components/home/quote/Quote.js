import * as S from "./styles/styles";
import * as V from "./variants/heroVariants";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import styled from "styled-components";

const QuoteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: clamp(40vh, 50vw, 100vh);
  margin-top: 2rem;
  border-bottom: 1px solid #f2f2f20f;
  .quote-wrapper {
    max-width: 1300px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: clamp(3rem, 13vw, calc(250px - 57px)) clamp(1rem, 10vw, 150px);
    h1 {
      font-size: clamp(2rem, 6vw, 4rem);
      color: ${(p) => p.theme.colors.egg};
      margin-bottom: clamp(5rem, 4vw, 6rem);
      line-height: 1.4;
    }

    .quote-author {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      .highlight {
        max-width: 4rem;
        width: 100%;
        height: 3px;
        background-color: ${(p) => p.theme.colors.blueSky};
        margin-bottom: 1rem;
      }
      p {
        color: ${(p) => p.theme.colors.lightGrey};
        font-size: clamp(0.8rem, 2vw, 1rem);
      }
    }
  }
`;

const Quote = () => {
  return (
    <QuoteContainer>
      <div className="quote-wrapper">
        <h1>THe OLD CHRISTOPHER IS DeaD, FRom now on, I am...CHRIS!</h1>

        <div className="quote-author">
          <div className="highlight"></div>
          <p>— Christopher Reeves (South Park)</p>
        </div>
      </div>
    </QuoteContainer>
  );
};

export default Quote;
