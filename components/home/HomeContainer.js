import React from "react";
import Quote from "./quote/Quote";
import Me from "./me/Me";
import Projects from "./projects/Projects";
import Fin from "./fin/Fin";

const HomeContainer = () => {
  return (
    <>
      <Quote />
      <Me />
      <Projects />
      <Fin />
    </>
  );
};

export default HomeContainer;
