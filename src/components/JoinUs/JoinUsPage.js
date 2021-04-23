import React from "react";

// Styles
import {
  JoinUs,
  JoinUsSection,
  JoinUsSectionWrapper,
  JoinUsSectionTitle,
  JoinUsSectionInfo,
  JoinUsImage,
} from "../../styles/JoinUsPageStyles";
import Form from "./Form";

const JoinUsPage = () => {
  return (
    <JoinUs>
      <JoinUsSection>
        <JoinUsSectionWrapper>
          <JoinUsSectionTitle>
            ¿Es válido tu perfil de Facebook para nuestro programa de alquiler?
          </JoinUsSectionTitle>
          <JoinUsSectionInfo>
            Para saber si es válido para nuestro programa de alquiler, completa
            este sencillo cuestionario.
          </JoinUsSectionInfo>
          <Form />
          <JoinUsImage />
        </JoinUsSectionWrapper>
      </JoinUsSection>
    </JoinUs>
  );
};

export default JoinUsPage;
