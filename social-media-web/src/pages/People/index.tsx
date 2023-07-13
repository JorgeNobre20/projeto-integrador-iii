import { useState } from "react";
import { AppLayout, Grid, HiringProfessionalNavBar, PersonCard, SectionContentHeader, SectionContentTitle, SelectionFilter } from "../../components";
import { SelectOption } from "../../components/SelectionFilter";

const selectOptions: SelectOption[] = [
  {
    label: "Todas",
    value: "Todas"
  },
  {
    label: "Mesma Escolaridade",
    value: "Mesma Escolaridade"
  },
  {
    label: "Áreas de Interesse",
    value: "Áreas de Interesse"
  }
]

export const People = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppLayout isLoading={isLoading}>
      <SectionContentHeader 
        LeftSideComponent={
          <SelectionFilter 
            description={"Filtrar pessoas por "}
            options={selectOptions} 
          />
        }
        RightSideComponent={<HiringProfessionalNavBar />}
      /> 
       
      <SectionContentTitle title="Pessoas nas suas áreas de interesse" />

      <Grid>
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
      </Grid>
    </AppLayout>
  );
}