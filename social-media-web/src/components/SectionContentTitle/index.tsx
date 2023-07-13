import * as S from "./styles";

type SectionContentTitleProps = {
  title: string;
}

export const SectionContentTitle = ({ title }: SectionContentTitleProps) => {
  return (
    <S.ContentTitleContainer>
      <S.ContentTitle>{title}</S.ContentTitle>
    </S.ContentTitleContainer>
  );
}