import { useLocation } from "react-router-dom";
import * as S from "./styles";
import { useMemo } from "react";

export type NavBarItem = {
  label: string;
  path: string;
}

type NavBarProps = {
  navItems: NavBarItem[];
}

export const NavBar = ({ navItems }: NavBarProps) => {
  const location = useLocation();

  const currentPath = useMemo(() => {
    if(location.pathname === ""){
      return "/";
    }

    return location.pathname;
  }, [location]);

  return (
    <S.NavBar>
      <S.NavContent>
        {
          navItems.map((navItem) => (
            <S.NavItem key={String(navItem.path)}>
              <S.NavLink 
                selected={currentPath === navItem.path} 
                to={navItem.path}>{navItem.label}
              </S.NavLink>
            </S.NavItem>
          ))
        }
      </S.NavContent>
    </S.NavBar>
  );
}