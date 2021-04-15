import React from "react";
import { NavbarSection, Logo, NavLinks, Link } from "../../styles/NavbarStyles";

const navLinks = [
  {
    link: "Inicio",
    to: "/",
    active: "active",
  },
  {
    link: "Cómo funciona",
    to: "/como-funciona",
    active: "active",
  },
  {
    link: "Únete ahora",
    to: "/unete-ahora",
    active: "active",
  },
  {
    link: "Programa de referidos",
    to: "/programa-referidos",
    active: "active",
  },
  {
    link: "FAQ",
    to: "/faq",
    active: "active",
  },
  {
    link: "Contanct",
    to: "/contact",
    active: "active",
  },
];

const Navbar = () => {
  return (
    <NavbarSection>
      <Logo to="/">
        <span>fb</span> fbangel
      </Logo>
      <NavLinks>
        {navLinks.map(({ link, to, active }) => (
          <Link to={to} exact activeClassName={active}>
            {link}
          </Link>
        ))}
      </NavLinks>
    </NavbarSection>
  );
};

export default Navbar;
