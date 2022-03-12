import Head from "next/head";
import styled from "styled-components";
import { motion } from "framer-motion";
import Hero from "../components/hero/Hero";
import UX from "../components/ux/Ux";
import WebDevelopmentServices from "../components/webdevelopmentservices/WebDevelopmentServices";
import AdvanceSeo from "../components/advanceseo/AdvanceSeo";
import FullTime from "../components/fulltime/FullTime";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CCDev</title>
        <meta name="description" content="Professional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <UX />
      <WebDevelopmentServices />
      <AdvanceSeo />
      <FullTime />
    </div>
  );
}
