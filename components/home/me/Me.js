import Image from "next/image";
import React from "react";
import Avatar from "./img/avatar.webp";
import { Twitter, GitHub, LinkedIn } from "@mui/icons-material";
import * as styled from "./styles/styles";

const Me = () => {
  return (
    <styled.MeContainer>
      <div className="me-wrapper">
        <div className="me-intro">
          <h2>
            Me <span>(Synopsis)</span>
            <div className="highlight"></div>
          </h2>
          <div className="me-social">
            <Twitter />
            <GitHub />
            <LinkedIn />
          </div>
        </div>

        <styled.MeContent className="me-content">
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
        </styled.MeContent>
      </div>
    </styled.MeContainer>
  );
};

export default Me;
