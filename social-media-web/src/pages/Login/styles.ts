import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.main`  
  position: relative;
  height: 100%;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.contentWrapperBackground};
`;

export const PasswordFieldFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 0.6rem;
`;

export const ForgotPasswordLink = styled(Link)`
  color: ${({ theme }) => theme.colors.forgotPasswordText};
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
`;
