import { PropsWithChildren } from "react";
import { 
  Header, 
} from "../../components";

import * as S from "./styles";

type CustomProps = {
  
}

type AuthLayoutProps = PropsWithChildren<CustomProps>;

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <Header />
      <S.Content>
        {children}
      </S.Content>
    </>
  );
}