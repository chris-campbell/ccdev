import styled from "styled-components";

export const FinContainter = styled.section`
  display: flex;
  justify-content: center;
  min-height: clamp(40vh, 50vw, 100vh);
  border-top: 1px solid #f2f2f20f;
  align-items: center;
  .fin-wrapper {
    max-width: 1300px;
    padding: clamp(3rem, 13vw, calc(250px - 57px)) clamp(1rem, 10vw, 150px);
    .section-text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      h3 {
        font-size: clamp(3rem, 5vw, 5rem);
        color: ${(p) => p.theme.colors.egg};
        margin-bottom: 1rem;
      }

      .highlight {
        height: 3px;
        max-width: 3rem;
        width: 100%;
        background-color: ${(p) => p.theme.colors.blueSky};
        margin-bottom: 1rem;
      }

      a {
        color: ${(p) => p.theme.colors.lightGrey};
        font-size: clamp(0.8rem, 2vw, 1rem);
      }
    }
  }
`;
