import { InterestingAreaModel } from "../../models";
import { InterstingAreaChip } from "../InterestingAreaChip";

import * as S from "./styles";

type InterestingAreaListSelectorProps = {
  options: InterestingAreaModel[];
  selectedInterestingAreas: number[];
}

export const InterestingAreaListSelector = ({ options: interestingAreas, selectedInterestingAreas  }: InterestingAreaListSelectorProps) => {
  return (
    <S.Container>
      {interestingAreas.map(
        (interestingArea) => (
          <InterstingAreaChip 
            key={String(interestingArea.id)} 
            selected={selectedInterestingAreas.includes(interestingArea.id)}
            data={interestingArea} 
          />
        )
      )}
    </S.Container>
  )
}