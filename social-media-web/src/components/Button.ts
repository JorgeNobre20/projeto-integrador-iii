import styled from "styled-components";

import { SpacingProps } from "../global/styles";

export const Button = styled.button<SpacingProps & {  
  horizontalPadding?: string;
  verticalPadding?: string; 
  backgroundColor: string;
}>`
  font-family: "Roboto", sans-serif;
  background: ${({ backgroundColor }) => backgroundColor};
  
  font-size: 1rem;
  border-radius: ${({ theme }) => theme.radius.button};
  border: 1px solid ${({ theme }) => theme.colors.inputBackground};
  color: gray;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.buttonLabel};
  width: ${({ width }) => width || `100%`};
  margin-bottom: ${({ marginBottom }) => marginBottom || `0px`};
  margin-top: ${({ marginTop }) => marginTop || `0px`};
  padding: ${({ verticalPadding }) => verticalPadding || `0.4rem`} ${({ horizontalPadding }) => horizontalPadding || `2rem`};
`;

