import styled, { css } from "styled-components";

const selectedContainerStyle = css`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.light};
`;

const disabledContainerStyle = css`
  background-color: ${({ theme }) => theme.colors.disabledInterestingAreaChipBackground};
  color: ${({ theme }) => theme.colors.disabledInterestingAreaChip};
`;

export const Container = styled.li<{ selected?: boolean; }>`
  padding: 0.4rem 1rem;
  border-radius: 2rem;
  
  font-size: 0.9rem;
  margin-right: 0.6rem;
  cursor: pointer;

  ${({ selected }) => selected ? selectedContainerStyle : disabledContainerStyle};
`;
