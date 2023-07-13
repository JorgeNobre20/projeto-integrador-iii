import { FormEvent, useEffect, useState } from "react";
import { Select } from "antd";

import {
  FormField,
  Header,
  TextInput,
  Button,
  AuthForm,
  InterestingAreaListSelector,
  CircularLoading
} from "../../components";

import { theme } from "../../global/themes";
import * as S from "./styles";

import { InterestingAreaModel } from "../../models";
import { InterestingAreaService } from "../../services";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [insterestingAreas, setInterestingAreas] = useState<InterestingAreaModel[]>([]);

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, 4000);
    })

    try {
      await tryHandleRegister();
    } catch (error) {
      catchHandleRegister(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function tryHandleRegister() {
    const requestBody = {
      email,
      password
    };
  }

  async function catchHandleRegister(unknonwError: unknown) {
    const error = unknonwError as Error;
    alert(error.message);
  }

  async function loadInterestingAreas() {
    setIsLoading(true);

    try {
      await tryLoadInterestingAreas();
    } catch (error) {
      catchHandleRegister(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function tryLoadInterestingAreas() {
    const loadedData = await InterestingAreaService.loadAll();
    setInterestingAreas(loadedData);
  }

  async function catchLoadInterestingAreas(unknonwError: unknown) {
    const error = unknonwError as Error;
    alert(error.message);
  }

  useEffect(() => {
    loadInterestingAreas();
  }, []);


  return (
    <>
      <Header />
      <S.Content>
        {
          isLoading ?
            <CircularLoading /> : (
              <AuthForm
                title="Fazer Cadastro"
                onSubmit={handleRegister}
              >
                <FormField label={"Nome"} marginBottom={"1.6rem"}>
                  <TextInput
                    type="text"
                    placeholder="Digite seu nome"
                    autoComplete="off"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </FormField>

                <FormField label={"Email"} marginBottom={"1.6rem"}>
                  <TextInput
                    type="email"
                    placeholder="Informe seu e-mail aqui"
                    autoComplete="off"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </FormField>

                <FormField label={"Senha"} marginBottom={"1.6rem"}>
                  <TextInput
                    type="password"
                    placeholder="Informe sua senha aqui"
                    autoComplete="off"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </FormField>

                <FormField
                  label={"Escolaridade"}
                  marginBottom={"1.6rem"}
                >
                  <Select
                    options={[
                      { label: "Selecione seu escolaridade", value: -1, disabled: true },
                      { label: "Sem Escolaridade", value: 0 },
                      { label: "Ensino Fundamental", value: 1 },
                      { label: "Ensino Médio", value: 2 },
                      { label: "Ensino Superior", value: 3 },
                    ]}
                    value={-1}
                    size="large"
                  />
                </FormField>

                <FormField
                  label={"Tipo de Usuário"}
                  marginBottom={"1.6rem"}
                >
                  <Select
                    options={[
                      { label: "Selecione o tipo de profissional", value: -1, disabled: true },
                      { label: "Contrante", value: 0 },
                      { label: "Contratável", value: 1 },
                    ]}
                    size="large"
                    value={-1}

                  />
                </FormField>

                <FormField label="Áreas de Interesse" marginBottom="2rem">
                  <InterestingAreaListSelector
                    options={insterestingAreas}
                    selectedInterestingAreas={[1, 4]}
                  />
                </FormField>

                <Button
                  verticalPadding="0.6rem"
                  backgroundColor={theme.colors.secondary}
                  type="submit"
                  label="Cadastrar"
                  isLoading={isSubmitting}
                />

                <S.ComplementText>ou</S.ComplementText>
                <S.GoToSignUpLink to="/login">Fazer Login</S.GoToSignUpLink>
              </AuthForm>
            )
        }

      </S.Content>
    </>
  );
}