import Articles from "./articles/Articles";
import styled from "styled-components";

const BlogContainer = ({ allArticles }) => {
  return (
    <div>
      <Articles allArticles={allArticles} />
    </div>
  );
};

export default BlogContainer;
