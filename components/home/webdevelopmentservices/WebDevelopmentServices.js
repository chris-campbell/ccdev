import styled from "styled-components";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import WebIcon from "@mui/icons-material/Web";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ArchitectureIcon from "@mui/icons-material/Architecture";

const WebDevServices = styled.section`
  background-color: ${(p) => p.theme.colors.coalBlue};
`;

const WebDevWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  max-width: 1500px;
  padding: clamp(2rem, 7vw, calc(250px - 100px)) clamp(1rem, 10vw, 150px);

  h3 {
    font-family: ${(p) => p.theme.fonts[0]};
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    color: ${(p) => p.theme.colors.egg};
    margin-bottom: 3rem;
  }
`;

const Services = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: 794px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Service = styled.div`
  h4 {
    display: flex;
    align-items: center;
    color: ${(p) => p.theme.colors.royal};
    font-family: ${(p) => p.theme.fonts.parapgraph};
    font-size: clamp(1rem, 3vw, 2rem);
    margin-bottom: 1rem;
    svg {
      margin-right: 0.5rem;
    }
  }
  p {
    color: ${(p) => p.theme.colors.lightGrey};
    font-family: ${(p) => p.theme.fonts.parapgraph};
    font-size: 1rem;
    line-height: 2.1rem;
    margin-bottom: 2rem;
    max-width: 45rem;
  }
`;

const WebDevelopmentServices = () => {
  return (
    <WebDevServices>
      <WebDevWrapper>
        <h3>Web Development Services</h3>
        <Services>
          <Service>
            <h4>
              <WebIcon />
              <span>Web App Development</span>
            </h4>
            <p>
              Have your designs materialized, using powerful wireframing tools,
              we’ll together determine the best way to mesh both your design
              ideas and performance, while always keeping the customer’s
              experience at the forefront.
            </p>
          </Service>
          <Service>
            <h4>
              <StorefrontIcon />
              <span>E-Commerce</span>
            </h4>
            <p>
              Build a Fast and seamless e-commerce platform that delivers a
              reliable and secure shopping experience for you customers. Avoid
              fees from sites like Etsy and keep your profits where they belong;
              with you.
            </p>
          </Service>
          <Service>
            <h4>
              <ArchitectureIcon />
              <span>Web-Redesign</span>
            </h4>
            <p>
              Breathe new life into your existing platform. Whether it needs a
              face-lift or just to have its performance-optimized, improving
              your site’s aesthetics will drastically change how quickly
              customers open their wallets.
            </p>
          </Service>
        </Services>
      </WebDevWrapper>
    </WebDevServices>
  );
};

export default WebDevelopmentServices;
