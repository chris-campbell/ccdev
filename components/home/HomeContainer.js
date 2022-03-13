import React from "react";
import Hero from "./hero/Hero";
import UX from "./ux/Ux";
import WebDevelopmentServices from "./webdevelopmentservices/WebDevelopmentServices";
import AdvanceSeo from "./advanceseo/AdvanceSeo";
import FullTime from "./fulltime/FullTime";

function HomeContainer() {
  return (
    <>
      <Hero />
      <UX />
      <WebDevelopmentServices />
      <AdvanceSeo />
      <FullTime />
    </>
  );
}

export default HomeContainer;
