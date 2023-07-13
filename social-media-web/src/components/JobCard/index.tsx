import { JobModel } from "../../models";
import * as S from "./styles";

type JobCardProps = {
  data: JobModel;
}

export const JobCard = ({ data: job }: JobCardProps) => {
  return (
    <S.JobCard>
      <S.JobTitle>{job.title}</S.JobTitle>
      <S.JobDescription>{job.description}</S.JobDescription>
    </S.JobCard>
  );
}