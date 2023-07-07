import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 3rem;
`;

export const Logo = styled.img`
  height: 2.6rem;
  width: auto;
  margin: 0.5rem 0px;
`;
