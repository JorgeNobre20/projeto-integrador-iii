import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: scroll;
  padding-bottom: 0.2rem;
  margin-top: 0.6rem;

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
`;
