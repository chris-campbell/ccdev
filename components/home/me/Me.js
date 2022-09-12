import Image from "next/image";
import React from "react";
import Avatar from "./img/avatar.webp";
import { Twitter, GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";
import * as styled from "./styles/styles";

const Me = () => {
  return (
    <styled.MeContainer id="me">
      <div className="me-wrapper">
        <div className="me-intro">
          <h2>
            Me <span>(Synopsis)</span>
            <div className="highlight"></div>
          </h2>
          <div className="me-social">
            <Link href="https://github.com/chris-campbell">
              <a target="_blank">
                <GitHub />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/chris-c-6a2267109/">
              <a target="_blank">
                <LinkedIn />
              </a>
            </Link>
            <Link href="https://twitter.com/2ndplayr">
              <a target="_blank">
                <Twitter />
              </a>
            </Link>
          </div>
        </div>

        <styled.MeContent className="me-content">
          <div className="me-bio">
            <p>
              I'm Chris! A father, Web Developer, and lover of anything anime.
              Proudly born in Brooklyn, NY. I don't have a formal education,
              however, I have a strong propensity for learning and
              self-improvement, when deciding to be an engineer several years
              ago, I completed a 24-week coding Bootcamp and have been
              self-learning ever since.
            </p>
            <p>
              I'm an avid reader, mostly rummaging through techinical
              documentation and self-help books. Believing firmly that a
              person's journey is never complete, all while deeply respecting
              the journeys of others.
            </p>
            <p>
              Hacking away in a code editor is one of my life passions, and
              introducing coding to more inner city kids with big dreams like
              myself is my ultimate goal.
            </p>
          </div>

          <div className="me-avatar">
            <Image src={Avatar} width={580} height={580} />
          </div>
        </styled.MeContent>
      </div>
    </styled.MeContainer>
  );
};

export default Me;
