import { useState } from "react";
import { decode } from "html-entities";
import styled from "styled-components";

const SubscribeHeading = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-family: ${(p) => p.theme.font.heading};
  word-spacing: 0.1rem;
`;

const SubscribeInput = styled.input`
  width: 100%;
  height: 2.5rem;
  padding-left: 0.5rem;
  color: ${(p) => p.theme.colors.grey_300};
  border-radius: 0.2rem;
  border: none;
  margin-bottom: 1rem;
  outline: none;
`;

const SubscribeButton = styled.button`
  background: ${(p) => p.theme.colors.orange_300};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.2rem;
  color: ${(p) => p.theme.colors.white_300};
  margin-bottom: 2rem;
`;

const Sending = styled.div`
  font-family: ${(p) => p.theme.font.paragraph};
  color: ${(p) => p.theme.colors.white_300};
`;

const NewsLetterFormInfo = styled.div`
  div {
    font-family: ${(p) => p.theme.font};
    margin-top: 1rem;
  }
`;

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <>
      <div className="d-flex newsletter-input-fields">
        <div className="mc-field-group">
          <SubscribeHeading>Subscribe for more content!</SubscribeHeading>
          <SubscribeInput
            onChange={(event) => setEmail(event?.target?.value ?? "")}
            type="email"
            placeholder="Your email"
            className="mr-2"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
        </div>
        <div className="button-wrap wp-block-button">
          <SubscribeButton
            className="wp-block-button__link"
            onClick={handleFormSubmit}
          >
            Subscribe
          </SubscribeButton>
        </div>
      </div>
      <NewsLetterFormInfo className="newsletter-form-info">
        {status === "sending" && <Sending>Sending...</Sending>}
        {status === "error" || error ? (
          <div
            className="newsletter-form-error"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {status === "success" && status !== "error" && !error && (
          <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
        )}
      </NewsLetterFormInfo>
    </>
  );
};

export default NewsletterForm;
