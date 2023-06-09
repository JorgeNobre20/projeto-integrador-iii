import styled from "styled-components";
import { Link } from "react-router-dom";

import { Text } from "../Text";

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 300px;
  width: 45%;
  max-width: 400px;
`;

export const FormTitle = styled(Text).attrs({
  as: "h2"
})`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.formTitle};
  margin-bottom: 2rem;
`;

export const ComplementText = styled(Text)`
  color: ${({ theme }) => theme.colors.formTitle};
  font-weight: 500;
  margin: 0.5rem 0px;
`;


export const SecondaryActionLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondaryAction};
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

