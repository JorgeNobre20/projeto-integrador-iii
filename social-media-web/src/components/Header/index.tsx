import * as S from "./styles";

import logoImg from "../../assets/images/logo.svg";

type HeaderProps = {
  RightSideComponent?: JSX.Element;
}

export const Header = ({ RightSideComponent }: HeaderProps) => {
  return (
    <S.Container>
      <S.Logo src={logoImg} alt="Profinder" />
      {RightSideComponent}
    </S.Container>
  );
}