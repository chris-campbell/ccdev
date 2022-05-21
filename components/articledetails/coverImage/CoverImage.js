import Image from "next/image";
import styled from "styled-components";

const CoverImageContainer = styled.div`
  margin-bottom: 2rem;
`;

const CoverImage = ({ url }) => {
  return (
    <CoverImageContainer>
      {url ? <Image src={url} width={1000} height={600} /> : null}
    </CoverImageContainer>
  );
};

export default CoverImage;
