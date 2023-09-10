import { useState, useEffect } from "react";
import formatDate from "../../../../js/formatDate";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const HeroContainer = styled.section`
  background-color: ${(p) => p.theme.colors.darkBlue};
  padding: clamp(2rem, 9vw, 9rem);

  .hero-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    cursor: pointer;
    @media (max-width: 988px) {
      flex-direction: column;
    }
  }

  .feature-image {
    position: relative;

    img {
      border-radius: 0.2rem;
    }
  }

  .article-details {
    max-width: 25rem;

    @media (max-width: 988px) {
      max-width: 100% !important;
    }
  }

  .article-date {
    color: ${(p) => p.theme.colors.lightGrey};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .article-title {
    text-transform: uppercase;
    font-size: clamp(1.9rem, 3vw, 2.9rem);
    color: ${(p) => p.theme.colors.egg};
    margin-bottom: 1rem;
  }

  .article-excerpt {
    color: ${(p) => p.theme.colors.lightGrey};
    margin-bottom: 1rem;
  }

  .author-bio {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      &:nth-child(1) {
        color: ${(p) => p.theme.colors.egg};
      }
      &:nth-child(2) {
        color: ${(p) => p.theme.colors.lightGrey};
        font-size: 0.8rem;
      }
    }
  }

  .author-details {
    display: flex;

    img {
      border-radius: 10rem;
    }
  }
`;

const Hero = ({ article }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const {slug, coverImage, createdAt, title, excerpt, authors} = article;

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  
  return (
    <HeroContainer>
      <Link href={`/articles/${slug}`} passHref>
        <div className="hero-wrapper">
          <div className="feature-image">
            <Image
              src={coverImage.url}
              width={800}
              height={600}
              layout={width > 988 ? "" : "responsive"}
              alt="Cover Image"
            />
          </div>

          <div className="article-details">
            <p className="article-date">{formatDate(createdAt)}</p>
            <h1 className="article-title">{title}</h1>
            <p className="article-excerpt">{excerpt}</p>
            <div className="author-details">
              <Image
                src={authors[0].avatar.url}
                width={55}
                height={55}
                alt={authors[0]}
              />
              <div className="author-bio">
                <p>{authors[0].name}</p>
                <p>{authors[0].role}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </HeroContainer>
  );
};

export default Hero;
