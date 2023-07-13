import { Select } from "antd";

import * as S from "./styles";

export type SelectOption = {
  value: string;
  label: string;
}

type SelectFilterProps = {
  description: string;
  options: SelectOption[];
}

export const SelectionFilter = ({ description, options }: SelectFilterProps) => {
  return (
    <S.FilterContainer>
      <S.FilterDescription>{description}</S.FilterDescription>
      <Select
        defaultValue="Todas"
        bordered={false}
        style={{ width: 120 }}
        options={options}
      />
    </S.FilterContainer>
  );
}