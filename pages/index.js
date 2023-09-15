import Head from "next/head";
import HomeContainer from "../components/home/HomeContainer";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>2ndPlayer | Helping Aspiring Developers</title>
        <meta name="description" content="Come here to learn how to get hired as a Web Developer, and start earning a 100K Job!" />
        <link
          rel="shortcut icon"
          href="/2ndplayer_favicon.png"
        />
      </Head>

      <HomeContainer articles={articles} />
    </div>
  );
}
