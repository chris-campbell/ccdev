import styled from "styled-components";
import Image from "next/image";

const AdvanceSeoContainer = styled.section`
  background-color: ${(p) => p.theme.colors.royal};
`;

const AdvanceSeoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1500px;
  padding: clamp(2rem, 7vw, calc(250px - 200px)) clamp(1rem, 10vw, 150px);

  @media (max-width: 794px) {
    .seo-image {
      display: none;
    }
  }

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
    margin-bottom: 2rem;
    max-width: 35rem;
  }
`;

const SeoSplit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7rem;
`;
const AdvanceSeo = () => {
  return (
    <AdvanceSeoContainer>
      <AdvanceSeoWrapper>
        <SeoSplit>
          <div className="seo-image">
            <Image
              src={
                "https://s3.us-east-2.amazonaws.com/2ndplayer.co/images/seo.svg"
              }
              width={800}
              height={800}
            />
          </div>
          <div>
            <h3>Advance SEO</h3>
            <p>
              Get your product, services, or content in front of more eyes,
              generate more leads and increase your conversion rate by using
              search engine-friendly SEO.
            </p>
          </div>
        </SeoSplit>
      </AdvanceSeoWrapper>
    </AdvanceSeoContainer>
  );
};

export default AdvanceSeo;
