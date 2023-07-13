import styled from "styled-components";
import { Link } from "react-router-dom";

import { Text } from "../../components";

export const Content = styled.main`  
  position: relative;
  height: 100%;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.contentWrapperBackground};
`;

export const ComplementText = styled(Text)`
  color: ${({ theme }) => theme.colors.formTitle};
  font-weight: 500;
  margin: 0.5rem 0px;
`;

export const GoToSignUpLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondaryAction};
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

