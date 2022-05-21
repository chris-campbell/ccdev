import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Accordion from "./accordion/Accordion";

const BlogIndexContainer = styled.section`
  margin-left: 2rem;
`;

const BlogIndexWrapper = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    background-color: transparent;
    padding-left: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #29313a;
    border-radius: 1rem;
  }
`;

const BlogIndex = ({ allArticles, setPreview }) => {
  const [list, setList] = useState([]);
  const blogIndexRef = useRef(null);

  const isNotIndex = (index) => {
    return index < 0;
  };

  const years = allArticles.reduce((sortedByYear, currentArticle) => {
    const year = new Date(currentArticle.createdAt).getFullYear();
    const articleIndex = sortedByYear.findIndex((ob) => ob[year]);

    if (isNotIndex(articleIndex)) {
      let articles = {};

      articles[year] = [];
      articles[year].push(currentArticle);
      sortedByYear.push(articles);
    } else {
      sortedByYear[articleIndex][year].push(currentArticle);
    }

    return sortedByYear;
  }, []);

  const renderIndex = () => {
    return list.map((item) => {
      for (const [key, value] of Object.entries(item)) {
        return (
          <>
            <Accordion
              title={key}
              articleList={value}
              setPreview={setPreview}
            />
          </>
        );
      }
    });
  };

  useEffect(() => {
    setList(years);
    blogIndexRef.current.scrollTop = blogIndexRef.current.scrollHeight;
  }, []);

  return (
    <BlogIndexContainer>
      <BlogIndexWrapper ref={blogIndexRef}>{renderIndex()}</BlogIndexWrapper>
    </BlogIndexContainer>
  );
};

export default BlogIndex;

const listing = [
  {
    "2022": [
      {
        __typename: "Article",
        id: "cl0s7byl8eli00cisdrfooaiw",
        title:
          "Is Your Developer Stack Focused Enough, and What Can You Change?",
        slug: "going-full-time-with-content-creation",
        featured: false,
        category: "Code",
        excerpt:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
        createdAt: "2022-03-15T14:00:14.290877+00:00",
        coverImage: {
          __typename: "Asset",
          url: "https://media.graphassets.com/i4k9lt8aRGORelLBuQQU",
        },
        content: {
          __typename: "RichText",
          html:
            '<h2>It Could All Be So Simple</h2><p>But I must explain to you how all this mistaken idea of denouncing <a title="Twitter" href="http://www.ebay.com">pleasure and praising pain was born and I will give you a complete account of the system</a>, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p><p></p><img src="https://media.graphcms.com/resize=width:5556,height:4160/i4k9lt8aRGORelLBuQQU" alt="Small Business Fustrations" title="compare-fibre-fRGoTJFQAHM-unsplash.jpg" width="5556" height="4160" /><h3>Matching the next Generation</h3><p>The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p><blockquote> No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </blockquote><p>Little for should to and congress, magicians people to roasted men&#39;s again. <a target=\'_blank\' title="http://www.ebay.com" href="http://www.ebay.com">School a dressed to of powers the misleads go</a>, like no into get in for measures due the mountains, accordingly, my they was he nice to down seven which up from mind homeless, text readiness competitive to my so whole trying. Hands over they never interfaces up, to their he not and distinct let that for evening. His we&#39;re support it rent lift one discovered you extension tone, are with a phase been that disguised that both fifteen absolutely is he plainly model of seemed had raising origin.</p><h3>Confront your inner gemini</h3><p>like no into get in for measures due the mountains, accordingly, my they was he nice to down seven which up from mind homeless, text readiness competitive to my so whole trying. Hands over they never interfaces up, to their <a title="http://www.ebay.com" href="http://www.ebay.com">he not and distinct let that for evening. His we&#39;re support it rent lift one discovered you extension tone</a>, are with a phase been that disguised that both fifteen absolutely is he plainly model of seemed had raising origin.</p><p>His we&#39;re support it rent lift one discovered you extension tone, are with a phase been that disguised that both fifteen absolutely is he plainly model of seemed had raising origin.</p><h4>Reasons to make the change</h4><ul><li><div>Everyone is listenign</div></li><li><div>People talk</div></li><li><div>Juggling the balls</div></li><li><div>Alien nature</div></li></ul><p></p>',
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
        title: "This is the second article",
        slug: "this-is-the-second-article",
        featured: false,
        category: "Start-up",
        excerpt:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
        createdAt: "2022-03-16T13:00:12.396803+00:00",
        coverImage: {
          __typename: "Asset",
          url: "https://media.graphassets.com/Bks2iftmQUqgXicdUWtb",
        },
        content: {
          __typename: "RichText",
          html:
            "<h1>This is the stupidest thing ever!</h1><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>",
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
        title: "This is the third article",
        slug: "this-is-the-third-article",
        featured: false,
        category: "code",
        excerpt:
          "The five. Agency, many by for set now funds been crew the to and he least in gradually times more harmonics. After beings she come he in to than way.",
        createdAt: "2022-03-17T12:19:34.816562+00:00",
        coverImage: {
          __typename: "Asset",
          url: "https://media.graphassets.com/l9I29HFUSbC1c90w0pF0",
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
        title: "This is the Actual 4th article to be submitted",
        slug: "this-is-the-actual-4th-article-to-be-submitted",
        featured: false,
        category: "Study",
        excerpt:
          "Rippedup, as to been in you'd two with it being such by origin; In what decades managers, at where undertaking, have brief some than the text, of derisi.",
        createdAt: "2022-03-17T13:09:24.667513+00:00",
        coverImage: {
          __typename: "Asset",
          url: "https://media.graphassets.com/Bks2iftmQUqgXicdUWtb",
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
    ],
  },
  {
    "2023": [
      {
        __typename: "Article",
        id: "cl0s7byl8eli00cisdrfooaiw",
        title:
          "Is Your Developer Stack Focused Enough, and What Can You Change?",
        slug: "going-full-time-with-content-creation",
        featured: false,
        category: "Code",
        excerpt:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
        createdAt: "2022-03-15T14:00:14.290877+00:00",
        coverImage: {
          __typename: "Asset",
          url: "https://media.graphassets.com/i4k9lt8aRGORelLBuQQU",
        },
        content: {
          __typename: "RichText",
          html:
            '<h2>It Could All Be So Simple</h2><p>But I must explain to you how all this mistaken idea of denouncing <a title="Twitter" href="http://www.ebay.com">pleasure and praising pain was born and I will give you a complete account of the system</a>, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p><p></p><img src="https://media.graphcms.com/resize=width:5556,height:4160/i4k9lt8aRGORelLBuQQU" alt="Small Business Fustrations" title="compare-fibre-fRGoTJFQAHM-unsplash.jpg" width="5556" height="4160" /><h3>Matching the next Generation</h3><p>The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p><blockquote> No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </blockquote><p>Little for should to and congress, magicians people to roasted men&#39;s again. <a target=\'_blank\' title="http://www.ebay.com" href="http://www.ebay.com">School a dressed to of powers the misleads go</a>, like no into get in for measures due the mountains, accordingly, my they was he nice to down seven which up from mind homeless, text readiness competitive to my so whole trying. Hands over they never interfaces up, to their he not and distinct let that for evening. His we&#39;re support it rent lift one discovered you extension tone, are with a phase been that disguised that both fifteen absolutely is he plainly model of seemed had raising origin.</p><h3>Confront your inner gemini</h3><p>like no into get in for measures due the mountains, accordingly, my they was he nice to down seven which up from mind homeless, text readiness competitive to my so whole trying. Hands over they never interfaces up, to their <a title="http://www.ebay.com" href="http://www.ebay.com">he not and distinct let that for evening. His we&#39;re support it rent lift one discovered you extension tone</a>, are with a phase been that disguised that both fifteen absolutely is he plainly model of seemed had raising origin.</p><p>His we&#39;re support it rent lift one discovered you extension tone, are with a phase been that disguised that both fifteen absolutely is he plainly model of seemed had raising origin.</p><h4>Reasons to make the change</h4><ul><li><div>Everyone is listenign</div></li><li><div>People talk</div></li><li><div>Juggling the balls</div></li><li><div>Alien nature</div></li></ul><p></p>',
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
        title: "This is the second article",
        slug: "this-is-the-second-article",
        featured: false,
        category: "Start-up",
        excerpt:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
        createdAt: "2022-03-16T13:00:12.396803+00:00",
        coverImage: {
          __typename: "Asset",
          url: "https://media.graphassets.com/Bks2iftmQUqgXicdUWtb",
        },
        content: {
          __typename: "RichText",
          html:
            "<h1>This is the stupidest thing ever!</h1><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>",
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
        title: "This is the third article",
        slug: "this-is-the-third-article",
        featured: false,
        category: "code",
        excerpt:
          "The five. Agency, many by for set now funds been crew the to and he least in gradually times more harmonics. After beings she come he in to than way.",
        createdAt: "2022-03-17T12:19:34.816562+00:00",
        coverImage: {
          __typename: "Asset",
          url: "https://media.graphassets.com/l9I29HFUSbC1c90w0pF0",
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
        title: "This is the Actual 4th article to be submitted",
        slug: "this-is-the-actual-4th-article-to-be-submitted",
        featured: false,
        category: "Study",
        excerpt:
          "Rippedup, as to been in you'd two with it being such by origin; In what decades managers, at where undertaking, have brief some than the text, of derisi.",
        createdAt: "2022-03-17T13:09:24.667513+00:00",
        coverImage: {
          __typename: "Asset",
          url: "https://media.graphassets.com/Bks2iftmQUqgXicdUWtb",
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
    ],
  },
  {
    "2024": [
      {
        __typename: "Article",
        id: "cl0s7byl8eli00cisdrfooaiw",
        title:
          "Is Your Developer Stack Focused Enough, and What Can You Change?",
        slug: "going-full-time-with-content-creation",
        featured: false,
        category: "Code",
        excerpt:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
        createdAt: "2022-03-15T14:00:14.290877+00:00",
        coverImage: {
          __typename: "Asset",
          url: "https://media.graphassets.com/i4k9lt8aRGORelLBuQQU",
        },
        content: {
          __typename: "RichText",
          html:
            '<h2>It Could All Be So Simple</h2><p>But I must explain to you how all this mistaken idea of denouncing <a title="Twitter" href="http://www.ebay.com">pleasure and praising pain was born and I will give you a complete account of the system</a>, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p><p></p><img src="https://media.graphcms.com/resize=width:5556,height:4160/i4k9lt8aRGORelLBuQQU" alt="Small Business Fustrations" title="compare-fibre-fRGoTJFQAHM-unsplash.jpg" width="5556" height="4160" /><h3>Matching the next Generation</h3><p>The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p><blockquote> No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </blockquote><p>Little for should to and congress, magicians people to roasted men&#39;s again. <a target=\'_blank\' title="http://www.ebay.com" href="http://www.ebay.com">School a dressed to of powers the misleads go</a>, like no into get in for measures due the mountains, accordingly, my they was he nice to down seven which up from mind homeless, text readiness competitive to my so whole trying. Hands over they never interfaces up, to their he not and distinct let that for evening. His we&#39;re support it rent lift one discovered you extension tone, are with a phase been that disguised that both fifteen absolutely is he plainly model of seemed had raising origin.</p><h3>Confront your inner gemini</h3><p>like no into get in for measures due the mountains, accordingly, my they was he nice to down seven which up from mind homeless, text readiness competitive to my so whole trying. Hands over they never interfaces up, to their <a title="http://www.ebay.com" href="http://www.ebay.com">he not and distinct let that for evening. His we&#39;re support it rent lift one discovered you extension tone</a>, are with a phase been that disguised that both fifteen absolutely is he plainly model of seemed had raising origin.</p><p>His we&#39;re support it rent lift one discovered you extension tone, are with a phase been that disguised that both fifteen absolutely is he plainly model of seemed had raising origin.</p><h4>Reasons to make the change</h4><ul><li><div>Everyone is listenign</div></li><li><div>People talk</div></li><li><div>Juggling the balls</div></li><li><div>Alien nature</div></li></ul><p></p>',
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
        title: "This is the second article",
        slug: "this-is-the-second-article",
        featured: false,
        category: "Start-up",
        excerpt:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
        createdAt: "2022-03-16T13:00:12.396803+00:00",
        coverImage: {
          __typename: "Asset",
          url: "https://media.graphassets.com/Bks2iftmQUqgXicdUWtb",
        },
        content: {
          __typename: "RichText",
          html:
            "<h1>This is the stupidest thing ever!</h1><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>",
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
        title: "This is the third article",
        slug: "this-is-the-third-article",
        featured: false,
        category: "code",
        excerpt:
          "The five. Agency, many by for set now funds been crew the to and he least in gradually times more harmonics. After beings she come he in to than way.",
        createdAt: "2022-03-17T12:19:34.816562+00:00",
        coverImage: {
          __typename: "Asset",
          url: "https://media.graphassets.com/l9I29HFUSbC1c90w0pF0",
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
        title: "This is the Actual 4th article to be submitted",
        slug: "this-is-the-actual-4th-article-to-be-submitted",
        featured: false,
        category: "Study",
        excerpt:
          "Rippedup, as to been in you'd two with it being such by origin; In what decades managers, at where undertaking, have brief some than the text, of derisi.",
        createdAt: "2022-03-17T13:09:24.667513+00:00",
        coverImage: {
          __typename: "Asset",
          url: "https://media.graphassets.com/Bks2iftmQUqgXicdUWtb",
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
    ],
  },
];
