import { FormHTMLAttributes, PropsWithChildren } from "react";

import * as S from "./styles";

type AuthFormProps = FormHTMLAttributes<HTMLFormElement> & {
  title: string;
}

export const AuthForm = ({ title, children, ...rest }: PropsWithChildren<AuthFormProps>) => {
  return (
    <S.Form {...rest}>
      <S.FormTitle>{title}</S.FormTitle>
      {children}
    </S.Form>
  );
};