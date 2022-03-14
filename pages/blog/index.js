import Head from "next/head";
import BlogContainer from "../../components/blog/BlogContainer";

const Blog = () => {
  return (
    <>
      <Head>
        <title>CCDev | Articles </title>
        <meta name="description" content="Professional" />
      </Head>

      <BlogContainer />
    </>
  );
};

export default Blog;
