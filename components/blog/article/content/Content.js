import React from "react";
import styled from "styled-components";
import NewsletterSubscribe from "../../../newslettersubscribe/NewsletterSubscribe";
import TweetEmbed from "react-tweet-embed";

const ContentContainer = styled.section`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 3rem;
    line-height: 1.9rem;
  }

  blockquote {
    font-family: ${(p) => p.theme.font.paragraph};
    color: ${(p) => p.theme.colors.white_300};
    margin-bottom: 3rem;
    line-height: 1.7rem;
    border-left: 3px solid ${(p) => p.theme.colors.orange_300};
    padding-left: 1.3rem;
    font-size: clamp(1rem, 3vw, 1.1rem);
    font-style: italic;
  }
`;

const ContentWrapper = styled.div`
  padding: 25rem 2rem 10rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: ${(p) => p.theme.colors.white_300};
  display: flex;
  align-items: baseline;
  gap: 4rem;
  @media (max-width: 675px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const MainContent = styled.div`
  flex: 2;
  margin: 0 auto;
  @media (max-width: 675px) {
    /* order: 1; */
  }
  p {
    font-family: ${(p) => p.theme.font.paragraph};
    font-size: clamp(1rem, 3vw, 1.1rem);
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(p) => p.theme.font.heading};
    margin-bottom: 1rem;
  }

  h2 {
    font-size: clamp(1.4rem, 3vw, 1.9rem);
  }

  h3 {
    font-size: clamp(1.2rem, 3vw, 1.7rem);
  }

  h4 {
    font-size: clamp(1.1rem, 3vw, 1.5rem);
  }

  li {
    font-size: 1rem;
    font-family: ${(p) => p.theme.font.paragraph};
  }

  a {
    color: ${(p) => p.theme.colors.blue_100};
  }
`;

const TableOfContents = styled.aside`
  flex: 1;
  margin: 0 auto;
  position: sticky;
  top: 0;
  padding-top: 5rem;

  @media (max-width: 675px) {
    margin: 0;
    position: relative;
    width: 100%;
    padding-top: 1rem;
  }

  ul {
    list-style: none;
  }

  ul li {
    font-family: ${(p) => p.theme.font.paragraph};
    margin-bottom: 0.5rem;
  }
`;

const TwitterButton = styled.a`
  display: block;
  background-color: ${(p) => p.theme.colors.blue_100};
  padding: 0.3rem 1rem;
  margin-top: 2rem;
  width: fit-content;
  border-radius: 0.2rem;
  font-family: ${(p) => p.theme.font.paragraph};
`;

const TweetEmbedStyle = styled(TweetEmbed)`
  margin-bottom: 2rem;
`;

const Content = ({ article }) => {
  const { content } = article;

  return (
    <ContentContainer>
      <ContentWrapper>
        <MainContent id="article-content">
          <div dangerouslySetInnerHTML={{ __html: content.html }} />
        </MainContent>
        <TableOfContents>
          <NewsletterSubscribe />

          <TweetEmbedStyle
            tweetId="1469501452490059779"
            options={{ cards: "hidden" }}
          />
          <TweetEmbedStyle
            tweetId="1494418456581931008"
            options={{ cards: "hidden" }}
          />
        </TableOfContents>
      </ContentWrapper>
    </ContentContainer>
  );
};

export default Content;
