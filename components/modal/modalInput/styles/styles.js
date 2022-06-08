import styled from "styled-components";

export const ModalInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;

  label {
    text-transform: uppercase;
    font-family: ${(p) => p.theme.fonts.heading};
    color: ${(p) => p.theme.colors.white300};
    margin-bottom: 0.5rem;
  }

  input {
    background-color: transparent;
    width: 100%;
    border: none;
    border-bottom: 2px solid ${(p) => p.theme.colors.white300};
    padding-bottom: 0.7rem;
    outline: none;
    color: ${(p) => p.theme.colors.white300};
    font-family: ${(p) => p.theme.fonts.paragraph};
    font-size: 1rem;
    &::placeholder {
      color: #86a8db;
      padding-left: 0.2rem;
    }
  }
`;
