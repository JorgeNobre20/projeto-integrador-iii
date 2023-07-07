import { InputHTMLAttributes } from "react";

import * as S from "./styles";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{}

export const TextInput = (props: TextInputProps) => {
  return (
    <S.FormField {...props} />
  );
}