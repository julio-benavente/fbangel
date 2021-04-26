import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  NavbarSection,
  Logo,
  NavLinks,
  Link,
  NavbarWrapper,
} from "../../styles/NavbarStyles";

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
  const [navIsOpen, setNavIsOpen] = useState(false);
  const handleNavbar = () => setNavIsOpen(!navIsOpen);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const _900 = innerWidth < 901;

  const size = useWindowSize();

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, [size]);

  return (
    <NavbarSection>
      <NavbarWrapper>
        <Logo to="/">
          <span>fb</span> fbangel
        </Logo>
        {!_900 && navIsOpen && (
          <NavLinks>
            {navLinks.map(({ link, to, active }) => (
              <Link to={to} exact activeClassName={active}>
                {link}
              </Link>
            ))}
          </NavLinks>
        )}
        <div className="hamburger" onClick={handleNavbar}>
          ham
        </div>
      </NavbarWrapper>
    </NavbarSection>
  );
};

export default Navbar;

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
