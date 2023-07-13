import { InterestingAreaModel } from "../models";

const data: InterestingAreaModel[] = [
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

export class InterestingAreaService {
  public static loadAll(): Promise<InterestingAreaModel[]>{
    return new Promise((resolve, reject) => {
      return resolve(data);
    });
  }
}