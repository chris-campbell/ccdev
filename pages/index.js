import Head from "next/head";
import HomeContainer from "../components/home/HomeContainer";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>2ndPlayer</title>
        <meta name="description" content="Professional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContainer articles={articles} />
    </div>
  );
}
