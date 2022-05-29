import styled from "styled-components";

export const BlogIndexContainer = styled.section`
  margin-left: 2rem;
`;

export const BlogIndexWrapper = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    background-color: transparent;
    padding-left: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #29313a;
    border-radius: 1rem;
  }
`;
