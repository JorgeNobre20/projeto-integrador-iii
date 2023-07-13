import { NavBar, NavBarItem } from "../NavBar";

const navItems: NavBarItem[] = [
  {
    label: "Vagas",
    path: "/"
  },
  {
    label: "Pessoas",
    path: "/people"
  },
  {
    label: "Meu Perfil",
    path: "/profile"
  }
];

export const ContractingProfessionalNavBar = () => {
  return (
    <NavBar navItems={navItems} />
  );
}