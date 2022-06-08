import React from "react";
import Image from "next/image";

const SocialIcon = ({ imageUrl, iconSize }) => {
  return <Image src={imageUrl} width={iconSize} height={iconSize} />;
};

export default SocialIcon;
