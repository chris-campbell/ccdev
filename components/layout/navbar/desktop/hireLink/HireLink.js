import Link from "next/link";
import * as S from "./styles/styles";

const HireLink = ({ fade, label, url }) => {
  return (
    <S.HireLink variants={fade} initial="hidden" animate="visible">
      <Link href={url}>
        <a>{label}</a>
      </Link>
    </S.HireLink>
  );
};

export default HireLink;
