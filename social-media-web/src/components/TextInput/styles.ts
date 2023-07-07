import styled from "styled-components";

export const FormField = styled.input`
  font-family: "Roboto", sans-serif;
  background: ${({ theme }) => theme.colors.inputBackground};
  padding: 0.6rem 0.6rem;
  font-size: 1rem;
  border-radius: ${({ theme }) => theme.radius.input};
  border: 1px solid ${({ theme }) => theme.colors.inputBackground};
  color: gray;
  font-weight: 400;

  &::placeholder{
    color: ${({ theme }) => theme.colors.inputPlaceholder};
    font-size: 0.9rem;
  }
`; 