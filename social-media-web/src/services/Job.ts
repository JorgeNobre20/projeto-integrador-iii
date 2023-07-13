import { InterestingAreaModel, JobModel } from "../models";

const interestingAreas: InterestingAreaModel[] = [
  {
    id: 1,
    name: "Backend"
  },
  {
    id: 2,
    name: "Frontend"
  },
  {
    id: 3,
    name: "DevOps"
  },
  {
    id: 4,
    name: "Gestão"
  },
  {
    id: 5,
    name: "Mobile"
  },
]

const data: JobModel[] = [
  {
    id: 1,
    title: "Dev Backned",
    description: "Descfrição aqui",
    interestingAreas: [interestingAreas[0]]
  },
  {
    id: 2,
    title: "Vafa Frontend",
    description: "Descfrição aqui",
    interestingAreas: [interestingAreas[1], interestingAreas[4]]
  },
  {
    id: 3,
    title: "Dev DevOps",
    description: "Descfrição aqui",
    interestingAreas: [interestingAreas[1], interestingAreas[4]]
  },
  {
    id: 4,
    title: "Gestore",
    description: "Descfrição aqui",
    interestingAreas: [interestingAreas[3]]
  },
  {
    id: 5,
    title: "Vaga Mobile",
    description: "Descfrição aqui",
    interestingAreas: [interestingAreas[1], interestingAreas[4]]
  },
]

export class JobService {
  public static loadAll(): Promise<JobModel[]>{
    return new Promise((resolve, reject) => {
      return resolve(data);
    });
  }
}