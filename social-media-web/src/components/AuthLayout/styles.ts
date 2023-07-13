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

