import styled from "styled-components";

import { Text } from "../Text";

export const JobCard = styled.button`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 1rem;
  border-radius: 4px;
  justify-content: flex-start;
  align-items: start;

  transition: 0.5s box-shadow;

  &:hover{
    box-shadow: 0px 4px 10px lightgray;
  }
`;

export const JobTitle = styled(Text).attrs({ as: "h3" })`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`; 

export const JobDescription = styled(Text).attrs({ as: "p" })`
  color: ${({ theme }) => theme.colors.filterLabel};
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;
