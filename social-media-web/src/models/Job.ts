import { InterestingAreaModel } from "./InterestingArea";

export type JobModel = {
  id: number;
  title: string;
  description: string;
  interestingAreas: InterestingAreaModel[];
}