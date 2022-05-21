import { gql } from "@apollo/client";
import client from "../../apolloClient";
import ArticleDetails from "../../components/articledetails/ArticleDetails";

const dummyArticle = {
  __typename: "Article",
  id: "cl0v0eatp0u2w0dixq1er2ky4",
  title: "Super virtual meeting that are taking over the workforce",
  slug: "super-virtual-meeting-that-are-taking-over-the-workforce",
  featured: false,
  category: "Study",
  excerpt:
    "Integer vitae efficitur eros. Ut sit amet arcu lorem. In et lorem venenatis, euismod erat ut, porttitor nibh. Sed ullamcorper lacus leo, nec tristique lectu.Integer vitae efficitur eros. Ut sit amet arcu lorem. In et lorem venenatis, euismod erat ut, porttitor nibh. Sed ullamcorper lacus leo.",
  createdAt: "2022-03-17T13:09:24.667513+00:00",
  coverImage: {
    __typename: "Asset",
    url: "https://media.graphassets.com/LJiJeHblRei5sbf15MUV",
  },
  content: {
    __typename: "RichText",
    html:
      "<h2>Manage the gift</h2><p>Avoid for the of watch show owner something with because absolutely of lane. Titles for son, ever being text much either spineless, away, just for review, turner try conduct, escape, middle been ideas at him, right to lobby,</p><p></p><h3>The other day</h3><p></p><pre><code>const nextConfig = {\n  reactStrictMode: true,\n  crossOrigin: &quot;anonymous&quot;,\n  images: {\n    domains: [\n      &quot;hoppr-portfolio.s3.us-east-2.amazonaws.com&quot;,\n      &quot;images.unsplash.com&quot;,\n      &quot;media.graphcms.com&quot;,\n      &quot;media.graphassets.com&quot;,\n    ],\n  },\n};\n\nmodule.exports = nextConfig;</code></pre><p></p><p>He back than the screen far he help show diet, of can few own, opposite so to the any of had my at incurred have careful to proceeded to desires projected in from writers. Watch show owner something with because absolutely of lane. Titles for son, ever being text much either spineless, away, just for review, turner try conduct, escape, middle been ideas at him, right to lobby,</p><p></p><pre><code>const dummyArticle = {\n  __typename: &quot;Article&quot;,\n  id: &quot;cl0v0eatp0u2w0dixq1er2ky4&quot;,\n  title: &quot;Super virtual meeting that are taking over the workforce&quot;,\n  slug: &quot;super-virtual-meeting-that-are-taking-over-the-workforce&quot;,\n  featured: false,\n  category: &quot;Study&quot;,\n  excerpt:\n    &quot;Integer vitae efficitur eros. Ut sit amet arcu lorem. In et lorem venenatis, euismod erat ut, porttitor nibh. Sed ullamcorper lacus leo, nec tristique lectu.Integer vitae efficitur eros. Ut sit amet arcu lorem. In et lorem venenatis, euismod erat ut, porttitor nibh. Sed ullamcorper lacus leo.&quot;,\n  createdAt: &quot;2022-03-17T13:09:24.667513+00:00&quot;,\n  coverImage: {\n    __typename: &quot;Asset&quot;,\n    url: &quot;https://media.graphassets.com/LJiJeHblRei5sbf15MUV&quot;,\n  },\n  content: {\n    __typename: &quot;RichText&quot;,\n    html:\n      &quot;&lt;p&gt;Avoid for the of watch show owner something with because absolutely of lane. Titles for son, ever being text much either spineless, away, just for review, turner try conduct, escape, middle been ideas at him, right to lobby, he back than the screen far he help show diet, of can few own, opposite so to the any of had my at incurred have careful to proceeded to desires projected in from writers.&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;pre&gt;&lt;code&gt;const nextConfig = {\\n  reactStrictMode: true,\\n  crossOrigin: &amp;quot;anonymous&amp;quot;,\\n  images: {\\n    domains: [\\n      &amp;quot;hoppr-portfolio.s3.us-east-2.amazonaws.com&amp;quot;,\\n      &amp;quot;images.unsplash.com&amp;quot;,\\n      &amp;quot;media.graphcms.com&amp;quot;,\\n      &amp;quot;media.graphassets.com&amp;quot;,\\n    ],\\n  },\\n};\\n\\nmodule.exports = nextConfig;&lt;/code&gt;&lt;/pre&gt;&lt;p&gt;&lt;/p&gt;&quot;,\n  },\n  authors: [\n    {\n      __typename: &quot;Author&quot;,\n      avatar: {\n        __typename: &quot;Asset&quot;,\n        id: &quot;cl0sxkttg36at0ck4woo9c06r&quot;,\n        url: &quot;https://media.graphassets.com/u3czFcUAQ4u45ELTgtqd&quot;,\n        createdAt: &quot;2022-03-16T02:14:58.033124+00:00&quot;,\n      },\n      name: &quot;Chris Campbell&quot;,\n    },\n  ],\n  seo: null,\n};</code></pre><p></p><p></p>",
  },
  authors: [
    {
      __typename: "Author",
      avatar: {
        __typename: "Asset",
        id: "cl0sxkttg36at0ck4woo9c06r",
        url: "https://media.graphassets.com/u3czFcUAQ4u45ELTgtqd",
        createdAt: "2022-03-16T02:14:58.033124+00:00",
      },
      name: "Chris Campbell",
    },
  ],
  seo: null,
};

function ArticleDetail() {
  // console.log(article);
  return <ArticleDetails article={dummyArticle} />;
}

export default ArticleDetail;

// Gets all the different paths for all the different post
// export const getStaticPaths = async () => {
//   const { data } = await client.query({
//     query: gql`
//       query {
//         articles {
//           slug
//         }
//       }
//     `,
//   });

//   const { articles } = data;

//   const paths = articles.map((article) => ({
//     params: { slug: [article.slug] },
//   }));

//   return { paths, fallback: false };
// };

// export async function getStaticProps({ params }) {
//   const slug = params.slug[0];
//   const { data } = await client.query({
//     query: gql`
//       query Article($slug: String!) {
//         articles(where: { slug: $slug }) {
//           id
//           title
//           slug
//           featured
//           category
//           excerpt
//           createdAt
//           coverImage {
//             url
//           }
//           content {
//             html
//           }
//           authors {
//             avatar {
//               id
//               url
//               createdAt
//             }
//             name
//           }
//           seo {
//             title
//             description
//             keyword
//             image {
//               id
//             }
//           }
//         }
//       }
//     `,

//     variables: { slug },
//   });

//   const { articles } = data;

//   const article = articles[0];

//   return {
//     props: { article },
//   };
// }
