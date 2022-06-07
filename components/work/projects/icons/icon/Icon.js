import React from "react";
import Image from "next/image";

const Icon = ({ url }) => {
  return <Image src={url} width={16} height={16} />;
};

export default Icon;
