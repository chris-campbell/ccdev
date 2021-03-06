import styled from "styled-components";

export const ModalTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  margin-bottom: 1.5rem;

  label {
    text-transform: uppercase;
    font-family: ${(p) => p.theme.fonts.heading};
    color: ${(p) => p.theme.colors.white300};
    margin-bottom: 0.5rem;
  }

  .textarea {
    background-color: transparent;
    width: 100%;
    border: none;
    border-bottom: 2px solid ${(p) => p.theme.colors.white300};
    padding-bottom: 0.7rem;
    outline: none;
    height: auto;
    color: ${(p) => p.theme.colors.white300};
    font-family: ${(p) => p.theme.fonts.paragraph};
    font-size: 1rem;
    resize: none;
    &::placeholder {
      color: #86a8db;
      padding-left: 0.2rem;
    }

    &:empty:before {
      content: attr(placeholder);
      pointer-events: none;
      display: block;
      color: #86a8db;
    }
  }
`;
