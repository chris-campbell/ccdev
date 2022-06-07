import Head from "next/head";
import HomeContainer from "../components/home/HomeContainer";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>2ndPlayer</title>
        <meta name="description" content="Professional" />
        <link
          rel="shortcut icon"
          href="https://s3.us-east-2.amazonaws.com/2ndplayer.co/logos/favicon-16x16.png"
        />
      </Head>

      <HomeContainer articles={articles} />
    </div>
  );
}
