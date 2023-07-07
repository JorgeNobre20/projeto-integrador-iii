import * as S from "./styles";

import logoImg from "../../assets/images/logo.svg";

export const Header = () => {
  return (
    <S.Container>
      <S.Logo src={logoImg} alt="Profinder" />
    </S.Container>
  );
}