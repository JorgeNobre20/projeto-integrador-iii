import { FormEvent, useState } from "react";

import { 
  FormField, 
  Header, 
  TextInput, 
  Button, 
  AuthForm 
} from "../../components";

import { theme } from "../../global/themes";
import * as S from "./styles";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  async function handleLogin(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    setIsLoading(true);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, 4000);
    })

    try {
      await tryHandleLogin();
    } catch (error) {
      catchHandleLogin(error);
    } finally{
      setIsLoading(false);
    }
  }

  async function tryHandleLogin(){
    const requestBody = {
      email,
      password
    };
  }

  async function catchHandleLogin(unknonwError: unknown){
    const error = unknonwError as Error;
    alert(error.message);
  }

  return (
    <>
      <Header />
      <S.Content>
        <AuthForm  
          title="Fazer Login"
          onSubmit={handleLogin}
        >
          <FormField label={"Email"} marginBottom={"1.6rem"}>
            <TextInput
              type="email" 
              placeholder="Informe seu e-mail aqui" 
              autoComplete="off"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </FormField>

          <FormField label={"Senha"} marginBottom={"4rem"}>
            <TextInput
              type="password" 
              placeholder="Informe sua senha aqui" 
              autoComplete="off"
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <S.PasswordFieldFooter>
              <S.ForgotPasswordLink to="/password-recovery">Esqueceu a senha?</S.ForgotPasswordLink>
            </S.PasswordFieldFooter>
          </FormField>

          <Button 
            verticalPadding="0.6rem" 
            backgroundColor={theme.colors.secondary}
            type="submit"
            label="Entrar"
            isLoading={isLoading}
          />

          <S.ComplementText>ou</S.ComplementText>
          <S.GoToSignUpLink to="/register">Criar Conta</S.GoToSignUpLink>
        </AuthForm>
      </S.Content>
    </>
  );
}