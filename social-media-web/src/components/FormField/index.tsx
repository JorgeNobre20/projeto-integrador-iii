import { PropsWithChildren } from "react";

import * as S from "./styles";
import { SpacingProps } from "../../global/styles";

type FormFieldProps = SpacingProps & {
  label: string;
}

export const FormField = ({ label, children, ...spacingProps }: PropsWithChildren<FormFieldProps> ) => {
  return (
    <S.FormFieldWrapper {...spacingProps}>
      <S.FormFieldLabel>{label}</S.FormFieldLabel>
      {children}
    </S.FormFieldWrapper>
  );
}