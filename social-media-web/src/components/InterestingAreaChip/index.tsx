import { InterestingAreaModel } from "../../models";

import * as S from "./styles";

type IntestingAreaChipProps = {
  data: InterestingAreaModel;
  selected?: boolean;
}

export const InterstingAreaChip = ({ data: interestingArea, selected }: IntestingAreaChipProps) => {
  return (
    <S.Container 
      selected={selected}
    >
      {interestingArea.name}
    </S.Container>
  );
}