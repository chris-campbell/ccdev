import styled from "styled-components";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const UXContainer = styled.section`
  background-color: ${(p) => p.theme.colors.white300};
`;

const UXWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  max-width: 1600px;
  padding: calc(250px - 150px) 150px;
  min-height: 50vh;
  @media (max-width: 580px) {
    padding: calc(250px - 150px) 50px;
  }
  @media (max-width: 460px) {
    padding: calc(250px - 150px) 30px;
  }
  h3 {
    font-family: ${(p) => p.theme.fonts.heading};
    font-size: clamp(20px, 10vw, 35px);
    color: ${(p) => p.theme.colors.grey300};
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.3rem;
    line-height: 2.1rem;
    font-family: ${(p) => p.theme.fonts.parapgraph};
    color: ${(p) => p.theme.colors.grey300};
    margin-bottom: 2rem;
  }
`;

const DownloadButton = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  svg {
    font-size: 1.45rem;
    padding: 0.2rem;
    border: 2px solid ${(p) => p.theme.colors.blue100};
    border-radius: 3rem;
    margin-right: 1rem;
    color: ${(p) => p.theme.colors.blue100};
  }
  span {
    font-family: ${(p) => p.theme.fonts.parapgraph};
    color: ${(p) => p.theme.colors.grey300};
  }
`;

const UX = () => {
  return (
    <UXContainer>
      <UXWrapper>
        <h3>UX/UI Design</h3>
        <p>
          Have your designs materialized, using powerful wireframing tools,
          we’ll together determine the best way to mesh both your design ideas
          and performance, while always keeping the customer’s experience at the
          forefront.
        </p>
        <DownloadButton>
          <ArrowDownwardIcon />
          <span>Example UX/UI Designs</span>
        </DownloadButton>
      </UXWrapper>
    </UXContainer>
  );
};

export default UX;
