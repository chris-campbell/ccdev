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

const PrivacyPage = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Terms of Service</title>
      </Head>
      <ContentWrapper className="content">
        <h1>Privacy Policy</h1>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Information:</strong> Such as name, email address,
            and contact details when voluntarily provided by users.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you use our
            website, including IP addresses, browser type, and operating system.
          </li>
          <li>
            <strong>Cookies and Tracking:</strong> We may use cookies and
            similar tracking technologies to collect information about your
            browsing activities.
          </li>
        </ul>

        <h2>2. How We Use Information</h2>
        <p>We may use collected information for purposes such as:</p>
        <ul>
          <li>Providing and maintaining our services.</li>
          <li>Personalizing and improving user experience.</li>
          <li>Responding to user inquiries and requests.</li>
          <li>
            Sending newsletters and promotional materials, if consent is given.
          </li>
        </ul>

        <h2>3. Data Security</h2>
        <p>
          We take reasonable measures to protect your data, but no method of
          transmission over the internet is entirely secure. We cannot guarantee
          absolute security.
        </p>

        <h2>4. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of such websites.
        </p>

        <h2>5. Your Choices</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access, correct, or delete your personal information.</li>
          <li>Opt-out of receiving promotional communications.</li>
        </ul>

        <h2>6. Updates to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page, and the &quot;last updated&quot; date will be
          revised.
        </p>

        <h2>7. Contact Information</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please
          contact us at{" "}
          <a href="mailto:chris@2ndplayer.co?subject=Privacy Policy [CONTACT]">
            chris@2ndplayer.co
          </a>
          .
        </p>

        <p>This document was last updated on Sept 14 2023.</p>
      </ContentWrapper>
    </div>
  );
};

export default PrivacyPage;
