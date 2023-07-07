import styled from "styled-components";

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
