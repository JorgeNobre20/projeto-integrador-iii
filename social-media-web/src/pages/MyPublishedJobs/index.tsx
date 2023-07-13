import { useState } from "react";

import { AppLayout, Grid, HiringProfessionalNavBar, PersonCard, SectionContentHeader, SectionContentTitle, SelectionFilter } from "../../components";


export const MyPublishedJobs = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppLayout isLoading={isLoading}>
      <SectionContentHeader 
        LeftSideComponent={
          <SectionContentTitle title="Minhas Vagas" />
        }
        RightSideComponent={<HiringProfessionalNavBar />}
      /> 

      <Grid>
        <PersonCard />
        <PersonCard />
        <PersonCard />
        <PersonCard />
      </Grid>
    </AppLayout>
  );
}