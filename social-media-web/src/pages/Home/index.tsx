import { AppLayout, Grid, HiringProfessionalNavBar, JobCard, SectionContentHeader, SectionContentTitle, SelectionFilter } from "../../components";

import { SelectOption } from "../../components/SelectionFilter";
import { useEffect, useState } from "react";
import { InterestingAreaService, JobService } from "../../services";
import { InterestingAreaModel, JobModel } from "../../models";

const interestingAreas: SelectOption[] = [
  { value: "Todas", label: "Todas" },
  { value: "Backend", label: "Backend" },
  { value: "Frontend", label: "Frontend" },
  { value: "DevOps", label: "DevOps" },
];

export const Home = () => {
  const [insterestingAreas, setInterestingAreas] = useState<InterestingAreaModel[]>([]);
  const [jobs, setJobs] = useState<JobModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function loadInitialData(){
    setIsLoading(true);
    
    try {
      tryLoadInitialData();
    } catch (error) {
      catchError(error);
    }finally{
      setIsLoading(false);
    }
  }

  async function tryLoadInitialData() {
    const loadedInterestingAreas = await InterestingAreaService.loadAll();
    const loadedJobs = await JobService.loadAll();

    setInterestingAreas(loadedInterestingAreas);
    setJobs(loadedJobs);
  }

  async function catchError(unknonwError: unknown) {
    const error = unknonwError as Error;
    alert(error.message);
  }

  useEffect(() => {
    loadInitialData();
  }, []);

  
  return (
    <AppLayout isLoading={isLoading} >
      <SectionContentHeader 
        LeftSideComponent={
          <SelectionFilter 
            description={"Filtrar por suas áreas de interesse"}
            options={interestingAreas} 
          />
        }
        RightSideComponent={<HiringProfessionalNavBar />}
      /> 
       
      <SectionContentTitle title="Vagas nas suas áreas de interesse" />

      <Grid>
        {jobs.map((job) => <JobCard key={String(job.id)} data={job} />)}
      </Grid>
    </AppLayout>
  );
}