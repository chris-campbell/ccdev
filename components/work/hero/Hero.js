import * as V from "../variants/workVariants";
import * as S from "./styles/styles";

const Hero = () => {
  return (
    <S.WorkContainer>
      <S.WorkWrapper>
        <h1>My Work</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </S.WorkWrapper>
      <S.HorizontalLines>
        <S.ColorLine
          variants={V.lineAVariant}
          initial="hidden"
          animate="visible"
          bgColor={(p) => p.theme.colors.egg}
        ></S.ColorLine>
        <S.ColorLine
          variants={V.lineBVariant}
          initial="hidden"
          animate="visible"
          bgColor={(p) => p.theme.colors.lightGrey}
        ></S.ColorLine>
        <S.ColorLine
          variants={V.lineCVariant}
          initial="hidden"
          animate="visible"
          bgColor={(p) => p.theme.colors.darkGrey}
        ></S.ColorLine>
        <S.ColorLine
          variants={V.lineDVariant}
          initial="hidden"
          animate="visible"
          bgColor={(p) => p.theme.colors.orange}
        ></S.ColorLine>
        <S.ColorLine
          variants={V.lineEVariant}
          initial="hidden"
          animate="visible"
          bgColor={(p) => p.theme.colors.royal}
        ></S.ColorLine>
        <S.ColorLine
          variants={V.lineFVariant}
          initial="hidden"
          animate="visible"
          bgColor={(p) => p.theme.colors.coalBlue}
        ></S.ColorLine>
      </S.HorizontalLines>
    </S.WorkContainer>
  );
};

export default Hero;
