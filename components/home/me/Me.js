import Image from "next/image";
import React from "react";
import Avatar from "./img/avatar.webp";
import styled from "styled-components";
import { Twitter, GitHub, LinkedIn } from "@mui/icons-material";

const MeContainer = styled.section`
  display: flex;
  justify-content: center;
  height: auto;
  align-items: center;
  min-height: clamp(40vh, 50vw, 100vh);
  border-bottom: 1px solid #f2f2f20f;
  .me-wrapper {
    max-width: 1300px;
    padding: clamp(3rem, 5vw, calc(250px - 57px)) clamp(1rem, 10vw, 150px);
    .me-intro {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      h2 {
        font-size: clamp(2rem, 2vw, 3rem) !important;
        span {
          display: inline-block;
          margin-left: 1rem;
          position: relative;
          bottom: 0.2rem;
          font-family: ${(p) => p.theme.fonts[1]};
          font-weight: 400;
        }

        font-size: 2rem;
        color: ${(p) => p.theme.colors.egg};
        .highlight {
          max-width: 4rem;
          height: 2px;
          background-color: ${(p) => p.theme.colors.blueSky};
          margin-top: 1.3rem;
        }
      }
      .me-social {
        display: flex;
        gap: 0.5rem;
        svg {
          color: ${(p) => p.theme.colors.egg};
        }
      }
    }
  }
`;

const MeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 778px) {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: none;
  }

  .me-bio {
    color: ${(p) => p.theme.colors.egg};
    p {
      font-size: clamp(0.8rem, 2vw, 1rem);
      margin-bottom: 1.5rem;
      line-height: 1.7;
      color: ${(p) => p.theme.colors.lightGrey};
      &:last-child {
        margin-bottom: 3rem;
      }
    }
  }

  .me-avatar {
    text-align: right;
    img {
      border-radius: 1rem;
      @media (max-width: 778px) {
        border-radius: 0.6rem;
      }
    }
  }
`;

const Me = () => {
  return (
    <MeContainer>
      <div className="me-wrapper">
        <div className="me-intro">
          <h2>
            Me <span>(1985)</span>
            <div className="highlight"></div>
          </h2>
          <div className="me-social">
            <Twitter />
            <GitHub />
            <LinkedIn />
          </div>
        </div>

        <MeContent className="me-content">
          <div className="me-bio">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumv eirmod temnor invidunt ut labore et dolore accusam et lusto
              duo dolores et ea rebum. Stet clita kasc auberarer
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumv eirmod temnor invidunt ut labore et dolore accusam et lusto
              duo dolores et ea rebum. Stet clita kasc auberarer
            </p>
            <p>
              Et dolore accusam et lusto duo dolores et ea rebum. Stet clita
              kasc auberarer
            </p>
          </div>

          <div className="me-avatar">
            <Image src={Avatar} width={580} height={580} />
          </div>
        </MeContent>
      </div>
    </MeContainer>
  );
};

export default Me;
