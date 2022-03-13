import styled from "styled-components";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import WebIcon from "@mui/icons-material/Web";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ArchitectureIcon from "@mui/icons-material/Architecture";

const WebDevServices = styled.section`
  background-color: ${(p) => p.theme.colors.blue_200};
`;

const WebDevWrapper = styled.div`
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
    margin-bottom: 4rem;
  }
`;

const Service = styled.div`
  h4 {
    display: flex;
    align-items: center;
    color: ${(p) => p.theme.colors.blue_100};
    font-family: ${(p) => p.theme.font.paragraph};
    font-size: 1.5rem;
    svg {
      margin-right: 0.5rem;
    }
  }
  p {
    color: ${(p) => p.theme.colors.white_300};
    font-family: ${(p) => p.theme.font.paragraph};
    font-size: 1.3rem;
    line-height: 2.1rem;
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
    border: 2px solid ${(p) => p.theme.colors.blue_100};
    border-radius: 3rem;
    margin-right: 1rem;
    color: ${(p) => p.theme.colors.blue_100};
  }
  span {
    font-family: ${(p) => p.theme.font.paragraph};
    color: ${(p) => p.theme.colors.grey_300};
  }
`;

const WebDevelopmentServices = () => {
  return (
    <WebDevServices>
      <WebDevWrapper>
        <h3>Web Development Services</h3>

        <Service>
          <h4>
            <WebIcon />
            <span>Web App Development</span>
          </h4>
          <p>
            Have your designs materialized, using powerful wireframing tools,
            we’ll together determine the best way to mesh both your design ideas
            and performance, while always keeping the customer’s experience at
            the forefront.
          </p>
        </Service>
        <Service>
          <h4>
            <StorefrontIcon />
            <span>E-Commerce</span>
          </h4>
          <p>
            Build a Fast and seamless E-commerce platform that delivers a
            pleasant shopping experience to your customers.
          </p>
        </Service>
        <Service>
          <h4>
            <ArchitectureIcon />
            <span>Web-Redesign</span>
          </h4>
          <p>
            Breathe new life into your existing platform. Whether it needs a
            face-lift or just to have its performance-optimized, improving your
            site’s aesthetics will drastically change how quickly customers open
            their wallets.
          </p>
        </Service>
      </WebDevWrapper>
    </WebDevServices>
  );
};

export default WebDevelopmentServices;
