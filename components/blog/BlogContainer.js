import BlogDesktop from "./blogDesktop/BlogDesktop";

const BlogContainer = ({ allArticles }) => {
  return (
    <>
      <BlogDesktop allArticles={allArticles} />
    </>
  );
};

export default BlogContainer;
