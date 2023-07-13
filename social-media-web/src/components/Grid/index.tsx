import { PropsWithChildren } from "react";

import * as S from "./styles";

type CustomProps =  {

}

type GridProps = PropsWithChildren<CustomProps>;

export const Grid = ({ children }: GridProps) => {
  return (
    <S.Grid>
      {children}
    </S.Grid>
  );
}