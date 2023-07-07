import { PropsWithChildren } from "react";

import * as S from "./styles";

type AuthFormProps = {
  title: string;
}

export const AuthForm = ({ title, children }: PropsWithChildren<AuthFormProps>) => {
  return (
    <S.Form>
      <S.FormTitle>{title}</S.FormTitle>
      {children}
    </S.Form>
  );
};