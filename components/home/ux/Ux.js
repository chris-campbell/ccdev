import styled from "styled-components";
import Image from "next/image";

const UXContainer = styled.section`
  background-color: ${(p) => p.theme.colors.white300};
`;

const UXWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1500px;
  gap: 6rem;
  padding: clamp(2rem, 10vw, calc(250px - 200px)) clamp(1rem, 10vw, 150px);

  @media (max-width: 794px) {
    gap: 0;
    .ux-image {
      display: none;
    }
  }

  h3 {
    font-family: ${(p) => p.theme.fonts.heading};
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    color: ${(p) => p.theme.colors.grey300};
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 2.1rem;
    font-family: ${(p) => p.theme.fonts.parapgraph};
    color: ${(p) => p.theme.colors.grey300};
    margin-bottom: 2rem;
    max-width: 30rem;

    @media (max-width: 794px) {
      max-width: 100%;
      width: 100%;
    }
  }
`;

const UX = () => {
  return (
    <UXContainer>
      <UXWrapper>
        <div>
          <h3>UX/UI Design</h3>
          <p>
            Have your designs materialized, using powerful wireframing tools,
            we’ll together determine the best way to mesh both your design ideas
            and performance, while always keeping the customer’s experience at
            the forefront.
          </p>
        </div>
        <div>
          <div className="ux-image">
            <Image
              src={
                "https://s3.us-east-2.amazonaws.com/2ndplayer.co/images/ux.svg"
              }
              width={800}
              height={800}
            />
          </div>
        </div>
      </UXWrapper>
    </UXContainer>
  );
};

export default UX;
