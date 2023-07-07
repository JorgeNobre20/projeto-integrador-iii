import styled from "styled-components";

import { SpacingProps } from "../../global/styles";
import { Text } from "../Text";

export const FormFieldWrapper = styled.div<SpacingProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) =>  width || `100%`};
  margin-bottom: ${({ marginBottom }) =>  marginBottom || `0px`};
  margin-top: ${({ marginTop }) =>  marginTop || `0px`};
`;

export const FormFieldLabel = styled(Text).attrs({ as: "label" })`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.inputLabel};
  margin-bottom: 0.4rem;
`;
