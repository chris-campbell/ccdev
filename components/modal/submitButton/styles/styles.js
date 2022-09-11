import styled from "styled-components";

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButtonWrapper = styled.button`
  display: flex;
  padding: 0.5rem 1rem;
  border: none;
  align-items: center;
  gap: 0.5rem;
  color: ${(p) => p.theme.colors.coalBlue};
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0.2rem;
  box-shadow: 5px 5px 15px 5px rgb(0 0 0 / 9%) !important;
  background-color: ${(p) => p.theme.colors.egg};

  &:active {
    background-color: #dedede;
  }

  svg {
    font-size: 0.9rem;
  }
`;
