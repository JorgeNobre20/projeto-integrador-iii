import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

import { Header } from "../Header";
import { CircularLoading } from "../CircularLoading";

type CustomProps = {
  isLoading: boolean;
}

type AppLayoutProps = PropsWithChildren<CustomProps>;

export const AppLayout = ({ isLoading, children }: AppLayoutProps) => {
  const navigate = useNavigate(); 

  function handleLogout(){
    navigate("/login");
  }
  
  return (
    <>
      <Header RightSideComponent={<S.SignOutButton onClick={handleLogout}>Sair</S.SignOutButton>} />

      {isLoading ? (
        <S.LoadingContainer>
          <CircularLoading />
        </S.LoadingContainer>
      ) : (
        <S.Content>
          {children}
        </S.Content>
      )}
    </>
  );
}