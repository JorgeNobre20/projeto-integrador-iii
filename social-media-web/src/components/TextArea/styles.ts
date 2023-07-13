import styled from "styled-components";

export const TextArea = styled.textarea`
  font-family: "Roboto", sans-serif;
  background: ${({ theme }) => theme.colors.inputBackground};
  padding: 0.6rem 0.6rem;
  font-size: 1rem;
  border-radius: ${({ theme }) => theme.radius.input};
  border: 1px solid ${({ theme }) => theme.colors.inputBackground};
  color: gray;
  font-weight: 400;

  height: 4rem;

  min-height: 200px;
  resize: vertical;

  &::placeholder{
    color: ${({ theme }) => theme.colors.inputPlaceholder};
    font-size: 0.9rem;
  }
`; 