import styled from "styled-components";

const FullTimeContainer = styled.section`
  background-color: ${(p) => p.theme.colors.darkBlue};
`;

const FullTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  max-width: 1500px;
  padding: clamp(2rem, 10vw, calc(250px - 100px)) clamp(1rem, 10vw, 150px);

  h3 {
    font-family: ${(p) => p.theme.fonts[0]};
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    color: ${(p) => p.theme.colors.egg};
    margin-bottom: 2rem;
  }

  p {
    font-size: 1rem;
    line-height: 2.1rem;
    font-family: ${(p) => p.theme.fonts.parapgraph};
    color: ${(p) => p.theme.colors.egg};
    margin-bottom: 4rem;
    max-width: 45rem;
  }
`;

const WorkAvailiblity = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
  }
  button {
    background: ${(p) => p.theme.colors.royal};
    font-family: ${(p) => p.theme.fonts.parapgraph};
    color: ${(p) => p.theme.colors.egg};
    padding: 1rem 1.5rem;
    border-radius: 2rem;
    border: none;
    font-size: 0.9rem;
    @media (max-width: 480px) {
      margin-bottom: 1rem;
    }
  }
  span {
    color: ${(p) => p.theme.colors.egg};
    font-family: ${(p) => p.theme.fonts.parapgraph};
    font-size: 1rem;
  }
`;

const FullTime = () => {
  return (
    <FullTimeContainer>
      <FullTimeWrapper id="fulltime">
        <h3>Available for Full-time Hire</h3>
        <p>
          If your business or company would benefit from having someone
          professional, passionate, and driven particularly in areas of using
          technology to expand and grow an organization, whether it be a startup
          or local business. I’m available for both full/part-time hires.
        </p>
        <WorkAvailiblity>
          <button>Download Resume</button>
        </WorkAvailiblity>
      </FullTimeWrapper>
    </FullTimeContainer>
  );
};

export default FullTime;
