import styled from "styled-components";

import { Text } from "../../components";

export const Content = styled.main`  
  position: relative;
  height: 100%;
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.contentWrapperBackground};
`;

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


