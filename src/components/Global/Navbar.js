import { logDOM } from "@testing-library/dom";
import React from "react";
import {
  NavbarSection,
  Logo,
  NavLinks,
  NavLink,
} from "../../styles/NavbarStyles";

const Navbar = () => {
  return (
    <NavbarSection>
      <Logo>
        <span>fb</span> fbangel
      </Logo>
      <NavLinks>
        <NavLink>Inicio</NavLink>
        <NavLink>Cómo funciona</NavLink>
        <NavLink>Únete ahora</NavLink>
        <NavLink>Programa de referidos</NavLink>
        <NavLink>FAQ</NavLink>
        <NavLink>Contanct</NavLink>
      </NavLinks>
    </NavbarSection>
  );
};

export default Navbar;
