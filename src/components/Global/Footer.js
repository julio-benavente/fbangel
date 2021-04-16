import React from "react";
import {
  FooterSection,
  FooterSectionWraper,
  Contact,
  UseConditions,
  Copyright,
  Detach,
} from "../../styles/FooterStyles";

const Footer = () => {
  return (
    <FooterSection>
      <FooterSectionWraper>
        <Contact to="/contacto">Contacto</Contact>
        <UseConditions to="/terminos-condiciones">
          Condiciones de uso
        </UseConditions>
        <Copyright>
          Copyright {new Date().getFullYear()}. All rights reserved fbangel
        </Copyright>
        <Detach>
          Este sitio no forma parte de Facebook o Facebook Inc. Además, este
          sitio NO está respaldado por Facebook de ninguna manera. Facebook es
          un marca registrada de Facebook Inc.
        </Detach>
      </FooterSectionWraper>
    </FooterSection>
  );
};

export default Footer;
