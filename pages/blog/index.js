import Head from "next/head";
import BlogContainer from "../../components/blog/BlogContainer";
import client from "../../apolloClient";
import { gql } from "@apollo/client";

const Blog = ({ articles }) => {
  return (
    <>
      <Head>
        <title>CCDev | Articles </title>
        <meta name="description" content="Professional" />
      </Head>

      <BlogContainer allArticles={dummyList} />
    </>
  );
};

export default Blog;

// export const getStaticProps = async () => {
//   const { data } = await client.query({
//     query: gql`
//       query {
//         articles {
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
//   });

//   const { articles } = data;

//   return {
//     props: {
//       articles,
//     },
//   };
// };

const dummyList = [
  {
    __typename: "Article",
    id: "cl0s7byl8eli00cisdrfooaiw",
    title: "Writing Code for hardware, is it really as hard as it looks?",
    slug: "going-full-time-with-content-creation",
    featured: false,
    category: "Code",
    excerpt:
      "Integer vitae efficitur eros. Ut sit amet arcu lorem. In et lorem venenatis, euismod erat ut, porttitor nibh. Sed ullamcorper lacus leo, nec tristique lectu.Integer vitae efficitur eros. Ut sit amet arcu lorem. In et lorem venenatis, euismod erat ut, porttitor nibh. Sed ullamcorper lacus leo.",
    createdAt: "2022-03-15T14:00:14.290877+00:00",
    coverImage: {
      __typename: "Asset",
      url: "https://media.graphassets.com/x3tS4a2nTXOXII8T6jIj",
    },
    content: {
      __typename: "RichText",
      html:
        '<h2>It Could All Be So Simple</h2><p>But I must explain to you how all this mistaken idea of denouncing <a title="Twitter" href="http://www.ebay.com">pleasure and praising pain was born and I will give you a complete account of the system</a>, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p><p></p><img src="https://media.graphassets.com/x3tS4a2nTXOXII8T6jIj" alt="alexandre-debieve-FO7JIlwjOtU-unsplash.jpg" title="alexandre-debieve-FO7JIlwjOtU-unsplash.jpg" width="5530" height="3687" /><h3>Matching the next Generation</h3><p>The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p><blockquote> No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </blockquote><p>Little for should to and congress, magicians people to roasted men&#39;s again. <a target=\'_blank\' title="http://www.ebay.com" href="http://www.ebay.com">School a dressed to of powers the misleads go</a>, like no into get in for measures due the mountains, accordingly, my they was he nice to down seven which up from mind homeless, text readiness competitive to my so whole trying. Hands over they never interfaces up, to their he not and distinct let that for evening. His we&#39;re support it rent lift one discovered you extension tone, are with a phase been that disguised that both fifteen absolutely is he plainly model of seemed had raising origin.</p><h3>Confront your inner gemini</h3><p>like no into get in for measures due the mountains, accordingly, my they was he nice to down seven which up from mind homeless, text readiness competitive to my so whole trying. Hands over they never interfaces up, to their <a title="http://www.ebay.com" href="http://www.ebay.com">he not and distinct let that for evening. His we&#39;re support it rent lift one discovered you extension tone</a>, are with a phase been that disguised that both fifteen absolutely is he plainly model of seemed had raising origin.</p><p>His we&#39;re support it rent lift one discovered you extension tone, are with a phase been that disguised that both fifteen absolutely is he plainly model of seemed had raising origin.</p><h4>Reasons to make the change</h4><ul><li><div>Everyone is listenign</div></li><li><div>People talk</div></li><li><div>Juggling the balls</div></li><li><div>Alien nature</div></li></ul><p></p>',
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
    seo: {
      __typename: "Seo",
      title: "This is a white man thing",
      description:
        "Always its there anyone self-interest. By some your this the its in let bright happens, small theory to hiding break if officers, there named the they sitting he influenced brief left what's odd reclined right, phase stupid arrive have years; The as, how of a frequently thought, his him, a in assisted its the were muff based absolutely it examples, will. And thing were no which of in a had their if of frequency; Of ran of, o'clock spree. Of problem had the headline have far it should of finds of away turn of better clock, from the were they.",
      keyword: ["jungle", "mexican"],
      image: {
        __typename: "Asset",
        id: "cl0s79dr9ei4i0civaqagfmf8",
      },
    },
  },
  {
    __typename: "Article",
    id: "cl0tkmm0s7r4y0bk40q9srgwq",
    title: "Creating team magic with programming agile software",
    slug: "creating-team-magic-with-programming-agile-software",
    featured: false,
    category: "Start-up",
    excerpt:
      "Integer vitae efficitur eros. Ut sit amet arcu lorem. In et lorem venenatis, euismod erat ut, porttitor nibh. Sed ullamcorper lacus leo, nec tristique lectu.Integer vitae efficitur eros. Ut sit amet arcu lorem. In et lorem venenatis, euismod erat ut, porttitor nibh. Sed ullamcorper lacus leo.",
    createdAt: "2022-03-16T13:00:12.396803+00:00",
    coverImage: {
      __typename: "Asset",
      url: "https://media.graphassets.com/GgS3TXFISpCvzLMZYluQ",
    },
    content: {
      __typename: "RichText",
      html:
        '<h2>It Could All Be So Simple</h2><p>But I must explain to you how all this mistaken idea of denouncing <a title="Twitter" href="http://www.ebay.com">pleasure and praising pain was born and I will give you a complete account of the system</a>, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p><p></p><img src="https://media.graphassets.com/x3tS4a2nTXOXII8T6jIj" alt="alexandre-debieve-FO7JIlwjOtU-unsplash.jpg" title="alexandre-debieve-FO7JIlwjOtU-unsplash.jpg" width="5530" height="3687" /><h3>Matching the next Generation</h3><p>The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p><blockquote> No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </blockquote><p>Little for should to and congress, magicians people to roasted men&#39;s again. <a target=\'_blank\' title="http://www.ebay.com" href="http://www.ebay.com">School a dressed to of powers the misleads go</a>, like no into get in for measures due the mountains, accordingly, my they was he nice to down seven which up from mind homeless, text readiness competitive to my so whole trying. Hands over they never interfaces up, to their he not and distinct let that for evening. His we&#39;re support it rent lift one discovered you extension tone, are with a phase been that disguised that both fifteen absolutely is he plainly model of seemed had raising origin.</p><h3>Confront your inner gemini</h3><p>like no into get in for measures due the mountains, accordingly, my they was he nice to down seven which up from mind homeless, text readiness competitive to my so whole trying. Hands over they never interfaces up, to their <a title="http://www.ebay.com" href="http://www.ebay.com">he not and distinct let that for evening. His we&#39;re support it rent lift one discovered you extension tone</a>, are with a phase been that disguised that both fifteen absolutely is he plainly model of seemed had raising origin.</p><p>His we&#39;re support it rent lift one discovered you extension tone, are with a phase been that disguised that both fifteen absolutely is he plainly model of seemed had raising origin.</p><h4>Reasons to make the change</h4><ul><li><div>Everyone is listenign</div></li><li><div>People talk</div></li><li><div>Juggling the balls</div></li><li><div>Alien nature</div></li></ul><p></p>',
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
    seo: {
      __typename: "Seo",
      title: "The rapper who grew organically",
      description: "The champ is here",
      keyword: ["lack", "loser"],
      image: {
        __typename: "Asset",
        id: "cl0sxkttg36at0ck4woo9c06r",
      },
    },
  },
  {
    __typename: "Article",
    id: "cl0uym7ty0bel0dixn18fasrn",
    title: "Stop being the anti-social programmer, 10 ways to exit you bubble",
    slug: "stop-being-the-anti-social-programmer-10-ways-to-exit-you-bubble",
    featured: false,
    category: "code",
    excerpt:
      "Integer vitae efficitur eros. Ut sit amet arcu lorem. In et lorem venenatis, euismod erat ut, porttitor nibh. Sed ullamcorper lacus leo, nec tristique lectu.Integer vitae efficitur eros. Ut sit amet arcu lorem. In et lorem venenatis, euismod erat ut, porttitor nibh. Sed ullamcorper lacus leo.",
    createdAt: "2022-03-17T12:19:34.816562+00:00",
    coverImage: {
      __typename: "Asset",
      url: "https://media.graphassets.com/BELHM3URaq94neoL2hlW",
    },
    content: {
      __typename: "RichText",
      html:
        "<p>The five. Agency, many by for set now funds been crew the to and he least in gradually times more harmonics. After beings she come he in to than way. The from close word wasn&#39;t time, down being he what that best the thousand got felt to drew should and an her of long antiquity own a logging descriptions, coffee cities into they but feel the plot hall trumpet display shown the dresses for even the alarm synthesizers once go rendering analyzed her, to my phase almost back when to of parents time her to cut I of from the.</p>",
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
  },
  {
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
        "<p>Avoid for the of watch show owner something with because absolutely of lane. Titles for son, ever being text much either spineless, away, just for review, turner try conduct, escape, middle been ideas at him, right to lobby, he back than the screen far he help show diet, of can few own, opposite so to the any of had my at incurred have careful to proceeded to desires projected in from writers.</p>",
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
  },
];
