import styled from "styled-components";

import { Text } from "../Text";

export const ContentTitleContainer = styled.div`
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  padding: 0.2rem 0px;
  display: flex;
  align-items: center;
`;

export const ContentTitle = styled(Text).attrs({ as: "h1" })`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 0.6rem;
`;

