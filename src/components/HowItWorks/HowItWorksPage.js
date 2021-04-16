import React from "react";
import {
  // How it works section
  HowItWorks,
  HowItWorksSection,
  HowItWorksSectionTitle,
  HowItWorksSectionInfo,
  FAQLink,
  HowItWorksImage,
  // Requirements section
  RequirementsSection,
  RequirementsSectionWrapper,
  RequirementsSectionTitle,
  RequirementsList,
  RequirementsImage,
} from "../../styles/HowItWorksPageStyles";

// Assets
import girl_getting_off from "../../assets/svgs/girl-getting-off.svg";
import todo_list from "../../assets/svgs/todo-list.svg";

const HowItWorksPage = () => {
  return (
    <HowItWorks>
      {/* HowItWorks section starts */}
      <HowItWorksSection>
        <HowItWorksSectionTitle>¿Cómo funciona?</HowItWorksSectionTitle>
        <HowItWorksSectionInfo>
          <p>
            El proceso es realmente simplemente. Si tienes una cuenta de
            Facebook, probablemente estés familiarizado con anuncios y banners
            en Facebook. Están en todas partes, todo el tiempo, y mucha gente
            está haciendo dinero con ello.
          </p>
          <p>
            Lo que no sabes es que usted también puedes, y muy fácil, alquilando
            tu cuenta de Facebook, sin hacer nada.
          </p>
          <p>
            Dado que Facebook es una entidad de corporación protegida, que
            protege la actividad y los derechos de sus usuarios, esto no te
            afectará a ti ni a tu actividad en línea en absoluto.
          </p>
          <p>
            Ninguno de tus amigos recibirá spam o verá tus anuncios, y aún así
            te pagaremos, solo por utilizar la parte publicitaria de tu perfil.
          </p>
          <FAQLink to="/faq">
            Consulta nuestra sección F.A.Q para obtener más información
          </FAQLink>
        </HowItWorksSectionInfo>
        <HowItWorksImage src={girl_getting_off} />
      </HowItWorksSection>
      {/* HowItWorks section ends */}

      {/* Requirements section starts */}
      <RequirementsSection>
        <RequirementsSectionWrapper>
          <RequirementsSectionTitle>
            Requisitos del perfil
          </RequirementsSectionTitle>
          <RequirementsList>
            <li>
              Debe ser real, activo, con foto y nombre real que coincida con el
              nombre de tu documento
            </li>
            <li>Con al menos 100 amigos</li>
            <li>Al menos un año de antigüedad</li>
            <li>
              Con contenido apropiado, no se adminten fotos que muestren
              cualquier tipo de violencia contra humanos o animales, fotos de
              contenido sexual, apología del terrorismo o de alto significado
              político, así como cualquier otro tipo que pueda ser considerado
              socialmente ofensivo
            </li>
            <li>Debe ser mayor de edad</li>
            <li>
              No debe haber sido previamente utilizado o alquilado a otras
              empresas para el uso de publicidad
            </li>
            <li>Debes tener un email asociado a tu perfil</li>
          </RequirementsList>
          <RequirementsImage src={todo_list} />
        </RequirementsSectionWrapper>
      </RequirementsSection>
      {/* Requirements section ends */}
    </HowItWorks>
  );
};

export default HowItWorksPage;
