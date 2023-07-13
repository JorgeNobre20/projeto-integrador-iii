import { NavBar, NavBarItem } from "../NavBar";

const navItems: NavBarItem[] = [
  {
    label: "Vagas Divulgadas",
    path: "/my-published-jobs"
  },
  {
    label: "Cadastrar Vaga",
    path: "/publish-job"
  },
];

export const HiringProfessionalNavBar = () => {
  return (
    <NavBar navItems={navItems} />
  );
}