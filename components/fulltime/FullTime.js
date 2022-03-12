import styled from "styled-components";

const FullTimeContainer = styled.section`
  background-color: ${(p) => p.theme.colors.orange_300};
`;

const FullTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  max-width: 1600px;
  padding: calc(250px - 150px) 150px;
  min-height: 50vh;
  @media (max-width: 680px) {
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
    margin-bottom: 4rem;
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
    background: ${(p) => p.theme.colors.blue_300};
    font-family: ${(p) => p.theme.font.paragraph};
    color: ${(p) => p.theme.colors.white_300};
    padding: 1rem 1.5rem;
    border-radius: 2rem;
    border: none;
    font-size: clamp(1rem, 5vw, 1.1rem);
    @media (max-width: 480px) {
      margin-bottom: 1rem;
    }
  }
  span {
    color: ${(p) => p.theme.colors.white_300};
    font-family: ${(p) => p.theme.font.paragraph};
    font-size: clamp(1rem, 5vw, 1.1rem);
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
          <span>Availability: Yes</span>
        </WorkAvailiblity>
      </FullTimeWrapper>
    </FullTimeContainer>
  );
};

export default FullTime;
