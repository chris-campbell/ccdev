import { useState, useEffect } from "react";

import BlogDesktop from "./blogDesktop/BlogDesktop";
import BlogMobile from "./blogMobile/BlogMobile";

const BlogContainer = ({ allArticles }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return width < 700 ? (
    <BlogMobile allArticles={allArticles} />
  ) : (
    <BlogDesktop allArticles={allArticles} />
  );
};

export default BlogContainer;
