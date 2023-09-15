import React from "react";
import Head from "next/head";
import styled from "styled-components";



export const ContentWrapper = styled.div`
  margin-bottom: 5rem;
  max-width: 1000px;
  position: relative;
    max-width: 1000px;
    margin: 0px auto;
    padding: clamp(1rem, 4vw, 100px);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 2rem;
    color: ${(p) => p.theme.colors.egg};
  }

  p {
    color: #aaa;
    max-width: 95%;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  ul {
    margin: 3rem 2rem;

    li {
      color: #aaa;
      font-family: ${(p) => p.theme.fonts[1]};
      margin-bottom: 0.7rem;
      list-style: none;
      display: flex;

      &::before {
        content: "° ";
        color: ${(p) => p.theme.colors.orange};
        border-radius: 0.5rem;
        margin-right: 1rem;
      }
    }
  }
  a {
    color: ${(p) => p.theme.colors.royal};
  }

  img {
    height: 100%;
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
  }
`;


const TosPage = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Terms of Service</title>
      </Head>
      <ContentWrapper className="content">
        <h1>Terms of Service</h1>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using this website, you agree to comply with and be
          bound by these Terms of Service.
        </p>

        <h2>2. User Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>
            Use the website in any unlawful manner or in any way that could
            harm the website or its users.
          </li>
          <li>Engage in any activity that interferes with or disrupts the website.</li>
          <li>Attempt to gain unauthorized access to the website or its systems.</li>
        </ul>

        <h2>3. Intellectual Property</h2>
        <p>
          The content on this website is protected by copyright and other
          intellectual property laws. You may not use, reproduce, or distribute
          the content without our permission.
        </p>

        <h2>4. Privacy and Data Collection</h2>
        <p>
          Our Privacy Policy governs the collection, use, and disclosure of user
          information. Please review our Privacy Policy to understand our
          practices.
        </p>

        <h2>5. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your access to the
          website at our sole discretion, without notice, for conduct that we
          believe violates these Terms of Service or is harmful to other users
          or us.
        </p>

        <h2>6. Limitations of Liability</h2>
        <p>
          We are not responsible for any damages or losses incurred as a result
          of using this website. Use the website at your own risk.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          We may modify these Terms of Service at any time. It is your
          responsibility to check for updates periodically. Your continued use
          of the website after any changes constitutes acceptance of the updated
          Terms.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These Terms of Service are governed by the laws of New York&#39;s.
          Any legal actions or disputes arising from these terms will be
          resolved in New York&#39;s courts.
        </p>

        <h2>9. Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at <a href="mailto:chris@2ndplayer.co?subject=Terms of service [LEGAL]">chris@2ndplayer.co</a>.
        </p>

        <p>This document was last updated on Sept 14, 2023.</p>
      </ContentWrapper>
    </div>
  );
};

export default TosPage;
