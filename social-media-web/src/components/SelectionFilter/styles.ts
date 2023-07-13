import styled from "styled-components";

import { Text } from "../Text";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.light};
  padding: 0.3rem 1.2rem;
  border-radius: 2px;
  width: 50%;
  max-width: 400px;
`;

export const FilterDescription = styled(Text).attrs({ as: "h2" })`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.filterLabel};
  font-weight: 400;
`;