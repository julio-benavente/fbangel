import React from "react";
import { Link } from "react-router-dom";
import ModalImage from "react-modal-image";

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
  // Configuration section
  ConfigurationSection,
  ConfigurationSectionWrapper,
  ConfigurationSectionTitle,
  ConfigurationImage,
  ConfigurationInfo,
  ConfigurationList,
  StepOne,
  StepOneTitle,
  Options,
  OptionOne,
  OptionOneTitle,
  OptionTwo,
  OptionTwoTitle,
  StepTwo,
  StepTwoTitle,
  // Registration section
  RegistrationSection,
  RegistrationSectionWrapper,
  RegistrationImage,
  RegistrationSectionTitle,
  RegistrationInfo,
  // Payment section
  PaymentSection,
  PaymentSectionWrapper,
  PaymentImage,
  PaymentSectionTitle,
  PaymentInfo,
  // Support section
  SupportSection,
  SupportSectionWrapper,
  SupportImage,
  SupportSectionTitle,
  SupportInfo,
} from "../../styles/HowItWorksPageStyles";

// Assets
import girl_getting_off from "../../assets/svgs/girl-getting-off.svg";
import todo_list from "../../assets/svgs/todo-list.svg";
import browser_girl from "../../assets/svgs/browser-girl.svg";
import watching_laptop from "../../assets/svgs/watching-laptop.svg";
import drinking_coffe from "../../assets/svgs/drinking-coffe.svg";
import sending_email from "../../assets/svgs/sending-email.svg";
import op1img1 from "../../assets/images/option-one-img-one.jpg";
import op1img2 from "../../assets/images/option-one-img-two.jpg";
import op2img1 from "../../assets/images/option-two-img-one.jpg";
import op2img2 from "../../assets/images/option-two-img-two.jpg";

const HowItWorksPage = () => {
  return (
    <HowItWorks>
      {/* HowItWorks section starts */}
      <HowItWorksSection>
        <HowItWorksSectionTitle>¿Cómo funciona?</HowItWorksSectionTitle>
        <HowItWorksImage src={girl_getting_off} />
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
      </HowItWorksSection>
      {/* HowItWorks section ends */}

      {/* Requirements section starts */}
      <RequirementsSection>
        <RequirementsSectionWrapper>
          <RequirementsSectionTitle>
            Requisitos del perfil
          </RequirementsSectionTitle>
          <RequirementsImage src={todo_list} />

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
        </RequirementsSectionWrapper>
      </RequirementsSection>
      {/* Requirements section ends */}

      {/* Configuration section starts */}
      <ConfigurationSection>
        <ConfigurationSectionWrapper>
          <ConfigurationImage src={browser_girl} />
          <ConfigurationSectionTitle>Configuración</ConfigurationSectionTitle>
          <ConfigurationInfo>
            Si y solo si tu cuenta de Facebook cumple con <b>TODOS</b> los
            requistos anteriormente expuestos debes completar 2 sencillos pasos
            antes de poder completar el formulario de registro.
          </ConfigurationInfo>
          <ConfigurationList>
            <li>Crear un Administrador Comercial (BM)</li>
            <li>Activar autenticación en dos pasos via App</li>
          </ConfigurationList>
          <StepOne>
            <StepOneTitle>
              Paso 1: Crear un Administrador Comercial (BM)
            </StepOneTitle>
            <ol>
              <li>
                Ve a{" "}
                <a
                  href="https://business.facebook.com/overview#/"
                  target="_blank"
                >
                  business.facebook.com/overview
                </a>
              </li>
              <li>
                Haz clic en <b>Crear cuenta</b>
              </li>
              <li>
                Ingresa un nombre para tu negocio, tu nombre y una dirección de
                correo electrónico haz clic en <b>Enviar</b>. -<b> Listo</b>
              </li>
              <li>
                Después de hacer clic en <b>Listo</b> Facebook te puede mostrar
                las siguientes opciones.
              </li>
            </ol>
          </StepOne>
          <Options>
            <OptionOne>
              <OptionOneTitle>
                Opción 1 (no requiere verificar ID)
              </OptionOneTitle>
              <p>
                Según la versión de tu facebook verás una de las siguientes
                imágenes.
              </p>
              <a>
                <ModalImage
                  small={op1img1}
                  large={op1img1}
                  hideDownload={true}
                  alt="Option one image one"
                />
              </a>
              {/* <img src={op1img1} alt="Option one image one" /> */}
              <p>
                Para obtener el Identificador del administrador comercial (BM
                Id) que debes enviar en el formulario de registro sigue los
                siguientes pasos.
              </p>
              <ol>
                <li>
                  Clic en <b>Configuración del negocio</b>
                </li>
                <li>
                  Desciende hasta <b>Información del negocio</b>
                </li>
                <li>
                  Haz una foto o captura de pantalla de tu{" "}
                  <b>Identificador del administrador comercial</b>
                </li>
              </ol>
              <a>
                <ModalImage
                  small={op1img2}
                  large={op1img2}
                  hideDownload={true}
                  alt="Option one image two"
                />
              </a>
              <p>
                Primero cierra la ventana emergente, haz clic en la X superior
                izquierda.
              </p>
              <p>
                Para obtener el <b>Identificador del administrador comercial</b>{" "}
                (BM Id) que debes enviar en el formulario de registro sigue los
                siguientes pasos.
              </p>
              <ol>
                <li>
                  Haz clic en <b>Más herramientas</b>
                </li>
                <li>
                  Clic en <b>Configuración del negocio</b>
                </li>
                <li>
                  Desciende hasta <b>Información del negocio</b>
                </li>
                <li>
                  Haz una foto o captura de pantalla de tu{" "}
                  <b>Identificador del administrador comercial</b>
                </li>
              </ol>
            </OptionOne>

            <OptionTwo>
              <OptionTwoTitle>Opción 2 (requiere verificar ID)</OptionTwoTitle>
              <a>
                <ModalImage
                  small={op2img1}
                  large={op2img1}
                  hideDownload={true}
                  alt="Option two image one"
                />
              </a>
              <p>
                Primero cierra la ventana emergente, haz clic en la X superior
                izquierda.
              </p>
              <p>
                Debes seguir los siguientes pasos para verificar tu identidad.
              </p>
              <ol>
                <li>
                  Haz clic en <b>Ver detalles</b>
                </li>
                <li>
                  Clic en <b>Solicitar Revisión</b>
                </li>
                <li>
                  Clic en <b>Continuar</b>
                </li>
                <li>Subir tu documento de identificación</li>
                <li>
                  Clic en <b>Continuar</b>
                </li>
              </ol>

              <p>
                En 24 o 48 horas Facebook suele confirmar tu identidad y te
                avisa a tu email si algo es incorrecto.
              </p>
              <p>
                Puedes comprobar si tu identidad ha sido verificada usando el
                siguiente enlace{" "}
                <a
                  href="https://business.facebook.com/accountquality/"
                  target="_blank"
                >
                  business.facebook.com/accountquality
                </a>
              </p>
              <a>
                <ModalImage
                  small={op2img2}
                  large={op2img2}
                  hideDownload={true}
                  alt="Option one image two"
                />
              </a>
              <p>
                Solo una vez que Facebook te ha confirmado que tu identidad está
                verificada, sigue estos pasos para obtener el{" "}
                <b>Identificador del administrador comercial</b> (BM Id) que
                debes enviar en el formulario de registro
              </p>
              <ol>
                <li>
                  Ve a{" "}
                  <a
                    href="https://business.facebook.com/settings/"
                    target="_blank"
                  >
                    business.facebook.com/settings
                  </a>
                </li>
                <li>
                  Desciende hasta <b>Información del negocio</b>
                </li>
                <li>
                  Haz una foto o captura de pantalla de tu{" "}
                  <b>Identificador del administrador comercial</b>
                </li>
              </ol>
            </OptionTwo>
          </Options>

          <StepTwo>
            <StepTwoTitle>
              Paso 2: Activar la autenticación en dos pasos (2FA) via App
            </StepTwoTitle>
            <ol>
              <li>
                Ve a <b>Configuración y privacidad</b>
              </li>
              <li>
                Selecciona <b>Configuración</b>
              </li>
              <li>
                Selecciona <b>Seguridad en inicio de sesion</b>
              </li>
              <li>
                Busca “Usar autenticación en dos pasos” – <b>Editar</b>
              </li>
              <li>
                Selecciona <b>Usar app de autenticación</b>
              </li>
              <li>
                Copiar código - Token – Continuar y nos pide código de
                confirmación
              </li>
              <div className="extra">
                <p>Código de confirmación</p>
                <p>
                  Sin cerrar la página abrir otra http://2fa.live,pega tu Token
                  y haz clic en “Submit”. Copia los ultimos 6 números del
                  resultado.
                </p>
                <p>
                  <a
                    href="https://www.facebook.com/help/358336074294704?helpref=faq_content"
                    target="_blank"
                  >
                    También, si prefieres, puedes usar una App como Google
                    Authenticator, Duo Mobile o LastPass
                  </a>
                </p>
              </div>
              <li>
                Regresa a fb y completa el código de confirmación – <b>Listo</b>
              </li>
            </ol>
          </StepTwo>
        </ConfigurationSectionWrapper>
      </ConfigurationSection>
      {/* Configuration section ends */}

      {/* Registration section starts */}
      <RegistrationSection>
        <RegistrationSectionWrapper>
          <RegistrationImage src={watching_laptop} />
          <RegistrationSectionTitle>Registro</RegistrationSectionTitle>
          <RegistrationInfo>
            <p>
              Utiliza <Link to="/unete-ahora">este formulario</Link> para
              registrarse.
            </p>
            <p>
              Antes de tener acceso a llenar tus datos, tendrás que respondera a
              unas sencillas preguntas sobre tu perfil de Facebook para
              preevaluar si tu perfil cumple con los requisitos, cosas como
              “¿Qué edad tiene tu cuenta?”, “¿Cuántos amigos tienes en tu perfil
              de Facebook?”, etc.
            </p>
            <p>
              No te preocupes, se hace en <b>menos de 1 minuto</b>.
            </p>
            <p>
              Si tu perfil califica, tendrás que rellenar tus datos y adjuntar
              una foto de un documento para verificar que tu perfil es real y
              que eres mayor de edad.
            </p>
            <p>
              Necesitaremos una foto de tu documento en alta resolución y
              legible, puedes cubrir cualquier detalle que desees, excepto la
              foto, el nombre completo y la fecha de nacimiento.
            </p>
            <p>
              Si decides cubrir algún dato no lo haga editando la foto o
              Facebook no la admitirá, usa los dedos por ejemplo, o trozo de
              papel.
            </p>
            <p>
              Puedes usar, DNI, pasaporte o licencia de conducir, si no tienes
              ninguno de ellos por favor{" "}
              <a
                href="https://www.facebook.com/help/159096464162185"
                target="_blank"
              >
                haz clic aquí para obtener una guía con opciones alternativas
              </a>
              .
            </p>
            <p>
              Durante el proceso de registro deberás adjuntar también una foto
              tu <b>Identificador del administrador comercial</b> que creaste en
              el paso 1 e introducir el{" "}
              <b>código de autenticación de 32 caracteres </b>
              (Token) que has obtenido en el paso 2
            </p>
            <p></p>
          </RegistrationInfo>
        </RegistrationSectionWrapper>
      </RegistrationSection>
      {/* Registration section ends */}

      {/* Payment section starts */}
      <PaymentSection>
        <PaymentSectionWrapper>
          <PaymentImage src={drinking_coffe} />
          <PaymentSectionTitle>Recibe el pago</PaymentSectionTitle>
          <PaymentInfo>
            <p>
              Una vez que nuestro equipo verifique que podemos acceder a tu
              perfil mediante 2FA y que efectivamente el Admistrador comercial
              (BM) está creado y sin restringir, nuestro equipo terminará de
              configurar el BM y se procesará tu primer pago a través de Paypal.
            </p>
            <p>
              Normalemente de 4 a 5 días hábiles después de haber recibido su
              formulario, siempre que los datos sean correctos y podamos acceder
              a su perfil y el Business Manager no esté restringido.
            </p>
            <p>
              Ah, y si nos envias a tus amigos obtienes más dinero por cada
              referido, echa un vistazo a nuestro{" "}
              <Link to="programa-referidos">Programa de Referidos</Link>
            </p>
            <p>
              <b>
                Recibirás el primer pago una vez que la cuenta se haya revisado
                y se haya configurado correctamente un Business Manager.
              </b>
            </p>
            <p>
              Después del primer pago los siguientes pagos mesuales se realizan
              de la siguiente manera:
            </p>
            <p>
              Los perfiles activados en la primera quincena del mes (primeras 2
              semanas) se pagarán la semana del 15 del mes siguiente.
            </p>
            <p>
              Los perfiles activados en la segunda quincena del mes (2 últimas
              semanas) se pagarán a fin de mes.
            </p>
            <p>
              El pago de referidos se realiza siempre a fin de mes, nuestro
              equipo se comunicará contigo para confirmar el número de referidos
              registrados por tu parte y realizar el pago correspondiente.
            </p>
          </PaymentInfo>
        </PaymentSectionWrapper>
      </PaymentSection>
      {/* Payment section ends */}

      {/* Support section starts */}
      <SupportSection>
        <SupportSectionWrapper>
          <SupportImage src={sending_email} />
          <SupportSectionTitle>Soporte</SupportSectionTitle>
          <SupportInfo>
            <p>
              Puedes ponerte en contacto con nosotros en cualquier momento para
              resolver cualquier pregunta, y también podría ser que
              eventualmente necesitemos ponernos en contacto contigo para
              resolver cualquier cosa.
            </p>
            <p className="important">Importante</p>
            <p>
              Tarde o temprano Facebook te pedirá que cambie la contraseña o tal
              vez tu decidas cambiarla, si esto sucede,{" "}
              <b>comunicate con nosotros inmediatamente</b>, de lo contrario
              podrás crearnos problemas ya que no podremos usar la cuenta y no
              podremos pagarte.
            </p>
            <p>
              <Link to="/contact">Contáctanos</Link>
            </p>
          </SupportInfo>
        </SupportSectionWrapper>
      </SupportSection>
      {/* Support section ends */}
    </HowItWorks>
  );
};

export default HowItWorksPage;
