import { TextareaHTMLAttributes } from "react";

import * as S from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

export const TextArea = (props: TextAreaProps) => {
  return (
    <S.TextArea {...props} />
  );
}