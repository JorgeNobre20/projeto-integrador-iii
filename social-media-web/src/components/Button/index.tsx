import { ButtonHTMLAttributes } from "react";

import { SpacingProps } from "../../global/styles";
import * as S from "./styles";

type DefaultButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">;

type ButtonProps = SpacingProps & DefaultButtonProps & {
  label: string;
  backgroundColor: string;
  isLoading?: boolean;
  horizontalPadding?: string;
  verticalPadding?: string; 
}

export const Button = ({ label, isLoading, ...rest }: ButtonProps) => {
  return (
    <S.Button disabled={isLoading} {...rest}>
      {isLoading ? <S.CircularLoading /> : label}
    </S.Button>
  );
}