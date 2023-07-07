import { FormField, Header, TextInput, Button, AuthForm } from "../../../components";

import { theme } from "../../../global/themes";
import * as S from "./styles";

export const Login = () => {
  return (
    <>
      <Header />
      <S.Content>
        <AuthForm title="Fazer Login">
          <FormField label={"Email"} marginBottom={"1.6rem"}>
            <TextInput
              type="email" 
              placeholder="Informe seu e-mail aqui" 
              required
            />
          </FormField>

          <FormField label={"Senha"} marginBottom={"4rem"}>
            <TextInput
              type="password" 
              placeholder="Informe sua senha aqui" 
              required
            />
          </FormField>

          <Button 
            verticalPadding="0.6rem" 
            backgroundColor={theme.colors.secondary}
            type="submit"
          >
            Entrar
          </Button>
        </AuthForm>
      </S.Content>
    </>
  );
}