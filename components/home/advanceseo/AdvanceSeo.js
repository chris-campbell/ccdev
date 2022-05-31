import styled from "styled-components";

const AdvanceSeoContainer = styled.section`
  background-color: ${(p) => p.theme.colors.blue100};
`;

const AdvanceSeoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: clamp(2rem, 5vw, calc(250px - 150px)) clamp(1rem, 10vw, 150px);
  h3 {
    font-family: ${(p) => p.theme.fonts.heading};
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    color: ${(p) => p.theme.colors.white300};
    margin-bottom: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 2.1rem;
    font-family: ${(p) => p.theme.fonts.parapgraph};
    color: ${(p) => p.theme.colors.white300};
    margin-bottom: 2rem;
    max-width: 45rem;
  }
`;

const AdvanceSeo = () => {
  return (
    <AdvanceSeoContainer>
      <AdvanceSeoWrapper>
        <h3>Advance SEO</h3>
        <p>
          Get your product, services, or content in front of more eyes, generate
          more leads and increase your conversion rate by using search
          engine-friendly SEO.
        </p>
      </AdvanceSeoWrapper>
    </AdvanceSeoContainer>
  );
};

export default AdvanceSeo;
