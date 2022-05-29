import Image from "next/image";
import * as S from "./styles/styles";

const CoverImage = ({ url }) => {
  return (
    <S.CoverImageContainer>
      {url ? <Image src={url} width={900} height={500} /> : null}
    </S.CoverImageContainer>
  );
};

export default CoverImage;
