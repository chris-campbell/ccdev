import React from "react";

const GeneralHead = ({ ogType, image, title, host, path }) => {
  const fullUrl = `${host}${path}`;
  return (
    <>
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={`${image}`} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={fullUrl} />
    </>
  );
};

export default GeneralHead;
