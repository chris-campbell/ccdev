import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { GitHub } from "@mui/icons-material";
import { ArrowCircleRight } from "@mui/icons-material";

const GitIcon = styled(GitHub)`
  color: ${(p) => p.theme.colors.blue100};
  font-size: 1.5rem;
`;

const LiveLink = styled(ArrowCircleRight)`
  color: ${(p) => p.theme.colors.blue100};
  font-size: 1.5rem;
`;

const Project = ({ image, name, github, liveSite }) => {
  return (
    <article>
      <div className="project-item-wrapper">
        <div className="project-image-frame">
          <Image src={image} width={500} height={350} layout="responsive" />;
        </div>
        <div className="projects-details">
          <div className="project-details-wrapper">
            <div className="external-links">
              <Link href={github}>
                <a>
                  <GitIcon />
                </a>
              </Link>
              <Link href={liveSite}>
                <a>
                  <LiveLink />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
