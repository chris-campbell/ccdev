import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./img/logo.svg";

import * as S from "./styles/styles";

const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <S.FooterContainer>
        <S.FooterWrapper>
          <Link href="/">
            <a>
              <S.Frame>
                <Image src={Logo} width={50} height={40} />
              </S.Frame>
            </a>
          </Link>

          <S.FooterNav>
            <div>
              <h4>Site</h4>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/articles">
                    <a>Blog</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Social</h4>
              <ul>
                <li>
                  <Link href="https://github.com/chris-campbell">
                    <a target="_blank">GitHub</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/chris-c-6a2267109/">
                    <a target="_blank">LinkedIn</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/2ndplayr">
                    <a target="_blank">Twitter</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Media</h4>
              <ul>
                <li>
                  <Link href="https://www.youtube.com/channel/UCAPA1_oy3WFOZVCSAR3mC-Q">
                    <a target="_blank">
                      <Image
                        src="https://s3.us-east-2.amazonaws.com/2ndplayer.co/social_icons/youtube_black.svg"
                        width={30}
                        height={30}
                      />
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="https://www.twitch.tv/2ndplayerco">
                    <a target="_blank">
                      <Image
                        src="https://s3.us-east-2.amazonaws.com/2ndplayer.co/social_icons/twitch_white.svg"
                        width={30}
                        height={30}
                      />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </S.FooterNav>
        </S.FooterWrapper>
        <S.Legal>
          <Link href="/legal/tos">Terms of Service</Link>
          <Link href="/legal/privacy">Policy</Link>
        </S.Legal>
      </S.FooterContainer>
    </>
  );
};

export default Footer;
