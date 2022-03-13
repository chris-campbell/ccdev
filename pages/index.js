import Head from "next/head";

import HomeContainer from "../components/home/HomeContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CCDev</title>
        <meta name="description" content="Professional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContainer />
    </div>
  );
}
