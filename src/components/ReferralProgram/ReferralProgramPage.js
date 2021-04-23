import React from "react";
import {
  ReferralProgram,
  ReferralProgramSection,
  ReferralProgramSectionTitle,
  ReferralProgramSectionInfo,
  InformationList,
  ReferralProgramImage,
  RegistrationBtn,
} from "../../styles/ReferralProgramStyles";

// Assets
import friendsChatting from "../../assets/svgs/friends-chatting.svg";

const ReferralProgramPage = () => {
  return (
    <ReferralProgram>
      <ReferralProgramSection>
        <ReferralProgramSectionTitle>
          Conviértete en un Referente
        </ReferralProgramSectionTitle>
        <ReferralProgramSectionInfo>
          Incrementa tus ganacias seriamente y obtén{" "}
          <span className="money">5 dólares</span> por referido{" "}
          <span className="asterisk">*</span>
        </ReferralProgramSectionInfo>
        <InformationList>
          <p>
            Es muy fácil, solo tiene que compartir el enlace de nuestra página
            con tus amigos o conocidos y asegurarte que en el formulario de
            registro agreguen tu código de referente en la casilla “
            <b>Si tienes referente añade aquí su código</b>
            ”.
          </p>
          <p>
            Para obtener tu código{" "}
            <a href="https://form.jotform.com/210684831753358" target="_blank">
              sigue este enlace
            </a>{" "}
            y completa el{" "}
            <a href="https://form.jotform.com/210684831753358" target="_blank">
              formulario
            </a>{" "}
            . En el podrás solicitar un código personalizado, nuestro equipo te
            confirmará en breve el registro de tu nuevo código en nuestro
            sistema.
          </p>
          <p>
            Si tu perfil no ha sido apto para registrarse con nosotros, no te
            preocupes, aún puedes ganar dinero presentándonos amigos o
            conocidos, simplemente regístrate en{" "}
            <a href="https://form.jotform.com/210684831753358" target="_blank">
              el siguiente formulario
            </a>{" "}
            y nuestro equipo confirmará su registro.
          </p>
          <p>
            El pago de referidos se realiza siempre a fin de mes, nuestro equipo
            se comunicará contigo para confirmar el número de referidos
            registrados por tu parte y realizar el pago correspondiente.
          </p>
          <p>
            <span className="important">¡Importante!</span> Asegúrete de que tus
            referidos siempre usen tu número código al completar el formulario,
            para así saber que son referidos tuyos y podamos generar tu próximo
            pago.
          </p>
          <p></p>
          <p></p>
        </InformationList>
        <RegistrationBtn
          href="https://form.jotform.com/210684831753358"
          target="_blank"
        >
          Regístrate aquí
        </RegistrationBtn>
        <ReferralProgramImage src={friendsChatting} />
      </ReferralProgramSection>
    </ReferralProgram>
  );
};

export default ReferralProgramPage;
