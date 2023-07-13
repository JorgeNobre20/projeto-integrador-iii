import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  margin-top: 1rem;
  padding: 0px;
  grid-gap: 1rem;
  width: 100%;
`;