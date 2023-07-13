import * as S from "./styles";

type SectionContentHeaderProps = {
  LeftSideComponent: JSX.Element;
  RightSideComponent: JSX.Element;
}

export const SectionContentHeader = ({
  LeftSideComponent,
  RightSideComponent
}: SectionContentHeaderProps) => {
  return (
    <S.ContentHeader>
      {LeftSideComponent}
      {RightSideComponent}
    </S.ContentHeader>
  );
}