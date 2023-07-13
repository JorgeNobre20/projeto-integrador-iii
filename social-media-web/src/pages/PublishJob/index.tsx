import { useEffect, useState } from "react";

import {
  AppLayout,
  FormField,
  HiringProfessionalNavBar,
  InterestingAreaListSelector,
  SectionContentHeader,
  SectionContentTitle,
  TextArea,
  TextInput,
  Button
} from "../../components";

import * as S from "./styles";
import { InterestingAreaService } from "../../services";
import { InterestingAreaModel } from "../../models";
import { theme } from "../../global/themes";

export const PublishJob = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [insterestingAreas, setInterestingAreas] = useState<InterestingAreaModel[]>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function loadInterestingAreas() {
    setIsLoading(true);

    try {
      await tryLoadInterestingAreas();
    } catch (error) {
      catchError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function tryLoadInterestingAreas() {
    const loadedData = await InterestingAreaService.loadAll();
    setInterestingAreas(loadedData);
  }

  
  async function catchError(unknonwError: unknown) {
    const error = unknonwError as Error;
    alert(error.message);
  }

  useEffect(() => {
    loadInterestingAreas();
  }, []);

  return (
    <AppLayout isLoading={isLoading}>
      <SectionContentHeader
        LeftSideComponent={
          <SectionContentTitle title="Cadastrar Vaga" />
        }
        RightSideComponent={<HiringProfessionalNavBar />}
      />

      <S.Content>
        <S.Form>
          <S.FormTitle>Publicar Vaga</S.FormTitle>

          <FormField label={"Titulo"} marginBottom={"1.6rem"}>
            <TextInput
              type="email"
              placeholder="Informe seu e-mail aqui"
              autoComplete="off"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </FormField>

          <FormField label={"Senha"} marginBottom={"4rem"}>
            <TextArea
              placeholder="Informe sua senha aqui"
              autoComplete="off"
              onChange={(event) => setPassword(event.target.value)}
              required
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
            label="Publicar Vaga"
            isLoading={isSubmitting}
          />
        </S.Form>

      </S.Content>
    </AppLayout>
  );
}