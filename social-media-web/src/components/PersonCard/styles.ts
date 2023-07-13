import styled from "styled-components";

import { Text } from "../Text";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.light};
  padding: 1rem;
  border-radius: 4px;
  justify-content: flex-start;
  align-items: start;

  transition: 0.5s box-shadow;

  cursor: pointer;

  &:hover{
    box-shadow: 0px 4px 10px lightgray;
  }
`;

export const Title = styled(Text).attrs({ as: "h3" })`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1.4rem;
`; 

export const Description = styled(Text).attrs({ as: "p" })`
  color: ${({ theme }) => theme.colors.filterLabel};
  font-size: 1rem;
  text-align: left;
  margin-bottom: 0.5rem;
`;

export const EmphasisText = styled(Text).attrs({ as: "span" })`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  text-align: left;
  font-weight: bold;
`;

