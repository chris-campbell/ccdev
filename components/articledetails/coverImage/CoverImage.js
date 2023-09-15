import Image from "next/image";
import * as S from "./styles/styles";

const CoverImage = ({ url }) => {
  return (
    <S.CoverImageContainer>
      {url ? <Image src={url} width={1000} height={600} priority="true" alt="Cover Image"/> : null}
    </S.CoverImageContainer>
  );
};

export default CoverImage;
