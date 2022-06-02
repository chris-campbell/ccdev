import React from "react";
import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: ${(p) => p.theme.colors.blue200};
  padding: clamp(3rem, 4vw, 8rem);
`;

const FooterWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 4rem;
  border-bottom: 0.5px solid #f2f2f224;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterNav = styled.div`
  display: flex;
  max-width: 100%;
  gap: 7rem;

  @media (max-width: 720px) {
    gap: 2rem;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: flex-start;
  }
  h4 {
    color: ${(p) => p.theme.colors.white300};
    margin-bottom: 1rem;
  }

  ul {
    justify-content: flex-start;
  }

  ul > li {
    color: ${(p) => p.theme.colors.grey200};
    list-style: none;
    margin-bottom: 0.2rem;
  }
`;

const Frame = styled.div`
  @media (max-width: 720px) {
    margin-bottom: 1.5rem;
  }
`;

const Legal = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  max-width: 1200px;
  padding-top: 1rem;
  margin: 0 auto;
  color: ${(p) => p.theme.colors.grey200};
`;

const TempFooter = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Frame>
          <Image
            src="https://s3.us-east-2.amazonaws.com/2ndplayer.co/logos/flat_sub.svg"
            width={150}
            height={40}
          />
        </Frame>

        <FooterNav>
          <div>
            <h4>Site</h4>
            <ul>
              <li>Home</li>
              <li>Work</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Social</h4>
            <ul>
              <li>GitHub</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Reddit</li>
            </ul>
          </div>
          <div>
            <h4>Media</h4>
            <ul>
              <li>
                <Image
                  src="https://s3.us-east-2.amazonaws.com/2ndplayer.co/social_icons/youtube_black.svg"
                  width={30}
                  height={30}
                />
              </li>
              <li>
                <Image
                  src="https://s3.us-east-2.amazonaws.com/2ndplayer.co/social_icons/twitch_white.svg"
                  width={30}
                  height={30}
                />
              </li>
            </ul>
          </div>
        </FooterNav>
      </FooterWrapper>
      <Legal>
        <Link href="http://www.ebay.com">Terms of Service</Link>
        <Link href="http://www.ebay.com">Policy</Link>
      </Legal>
    </FooterContainer>
  );
};

export default TempFooter;
