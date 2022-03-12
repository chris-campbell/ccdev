import styled from "styled-components";

const AdvanceSeoContainer = styled.section`
  background-color: ${(p) => p.theme.colors.blue_100};
`;

const AdvanceSeoWrapper = styled.div`
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
    font-family: ${(p) => p.theme.font.heading};
    font-size: clamp(20px, 10vw, 35px);
    color: ${(p) => p.theme.colors.white_300};
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.3rem;
    line-height: 2.1rem;
    font-family: ${(p) => p.theme.font.paragraph};
    color: ${(p) => p.theme.colors.white_300};
    margin-bottom: 2rem;
  }
`;

const AdvanceSeo = () => {
  return (
    <AdvanceSeoContainer>
      <AdvanceSeoWrapper>
        <h3>Advance SEO</h3>
        <p>
          Have your designs materialized, using powerful wireframing tools,
          we’ll together determine the best way to mesh both your design ideas
          and performance, while always keeping the customer’s experience at the
          forefront.
        </p>
      </AdvanceSeoWrapper>
    </AdvanceSeoContainer>
  );
};

export default AdvanceSeo;
