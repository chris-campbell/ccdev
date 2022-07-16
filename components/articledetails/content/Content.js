import { useRef, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import * as S from "./styles/styles";

const Content = ({ content }) => {
  const contentRef = useRef(null);

  const addClassToPreElement = (elements) => {
    for (let i = 0; i <= elements.length; i++) {
      if (elements[i]) elements[i].classList.add("language-javascript");
    }
  };

  useEffect(() => {
    addClassToPreElement(contentRef.current.querySelectorAll("pre"));

    Prism.highlightAll();
  }, []);

  return (
    <div>
      <S.ContentWrapper>
        <div
          className="content"
          ref={contentRef}
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </S.ContentWrapper>
    </div>
  );
};

export default Content;
