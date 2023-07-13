import styled from "styled-components";

export const Content = styled.main`  
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme.colors.contentWrapperBackground};
  padding: 2rem 3rem;
  align-items: flex-start;
  flex-direction: column;

  height: 100%;
`;

export const SignOutButton = styled.button`
  font-family: "Roboto", sans-serif;
  background: ${({ theme }) => theme.colors.light};
  
  font-size: 1rem;
  border-radius: ${({ theme }) => theme.radius.button};
  border: 1px solid ${({ theme }) => theme.colors.inputBackground};
  color: gray;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.danger};
  padding: 0.4rem 1.6rem;
`;



export const LoadingContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;