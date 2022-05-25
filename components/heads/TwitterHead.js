const TwitterHead = ({ title, description, image, card }) => {
  return (
    <>
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${image}`} />
      <meta name="twitter:card" content={card} />
    </>
  );
};

export default TwitterHead;
