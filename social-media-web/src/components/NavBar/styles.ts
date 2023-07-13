import { NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.light};
  padding: 0.3rem 1.2rem;
  border-radius: 2px;
  width: 50%;
  max-width: 800px;
`;

export const NavContent = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 0.3rem 1.2rem;
`;

export const NavItem = styled.li`
  font-family: "Roboto", sans-serif;
`;

export const NavLink = styled(RouterNavLink)<{ selected?: boolean }>`
  color: ${({ selected, theme }) => selected ? theme.colors.primary : theme.colors.dark};
  font-weight: ${({ selected }) => selected ? "700" : "400"};
`;