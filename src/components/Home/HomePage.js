import React from "react";

// Styles
import {
  Home,
  // Banner Section
  BannerSection,
  LeftSide,
  Headline,
  Subheadline,
  StartButton,
  Image,
  // Process Section
  ProcessSection,
  Card,
  Number,
  CardTitle,
  CardInfo,
  Disclaimer,
  // Requirements Section
  RequirementsSection,
  MoneyImage,
  TaskListImage,
  RequirementsSectionWraper,
  SectionTitle,
  Info,
  HowItWorksBtn,
  RequirementsSubtitle,
  RequirementsList,
} from "../../styles/HomePageStyles";

// Assets
import phone from "../../assets/svgs/cellphone-in-hand.svg";
import money from "../../assets/images/money.png";
import task_list from "../../assets/images/tasks-list.png";
const cards = [
  {
    number: "01",
    title: "Completa el formulario",
    info:
      "Te ofrecemos unirte a nuestro programa en unos pocos clics y empezar a ganar online, sin ningún esfuerzo adicional!",
  },
  {
    number: "02",
    title: "Espera nuestra confirmación",
    info:
      "¡La confirmación demora de 3 a 5 días hábiles! (¡Por lo general, en 48 horas!)",
    disclaimer: "* Después del primer inicio de sesión",
  },
  {
    number: "03",
    title: "Recibe pagos mensuales",
    info:
      "Mientras tu haces tu vida normal, nosotros hacemos que tu cuenta de Facebook genere ganancias para ti. !",
  },
  {
    number: "04",
    title: "Comparte con tus amigos",
    info:
      "Comparte con tus amigos y aumenta tus ganancias. Recibirás un pago por cada nueva inscripción referida por ti. ¡Sin límites!",
  },
];

const HomePage = () => {
  return (
    <Home className="Home" id="Home">
      <BannerSection fluid>
        <LeftSide>
          <Headline>
            Gana dinero con tu perfil de Facebook ¡Es un juego de niños!
          </Headline>
          <Subheadline>
            Sigue disfrutando de tu cuenta de Facebook como siempre y cada mes
            obtendrás tu dinero. Nosotros lo generamos por ti.
          </Subheadline>
          <StartButton to="unete-ahora">Empieza a ganar dinero</StartButton>
        </LeftSide>
        <Image src={phone}></Image>
      </BannerSection>

      <ProcessSection>
        {cards.map(({ number, title, info, disclaimer }) => (
          <Card>
            <Number>{number}</Number>
            <CardTitle>{title}</CardTitle>
            <CardInfo>{info}</CardInfo>
            {disclaimer && <Disclaimer>{disclaimer}</Disclaimer>}
          </Card>
        ))}
      </ProcessSection>

      <RequirementsSection>
        <MoneyImage src={money} />
        <TaskListImage src={task_list} />
        <RequirementsSectionWraper>
          <SectionTitle>¿Cuánto ganarás?</SectionTitle>
          <Info>
            <span>! Gana 30 dólares cada mes !</span> Confirma que cumples los y
            prepara tu perfil, haz clic en el botón y aprende cómo.
          </Info>
          <HowItWorksBtn to="/como-funciona">¿Cómo funciona?</HowItWorksBtn>
          <RequirementsSubtitle>
            Requisitos para que el perfil sea válido
          </RequirementsSubtitle>
          <RequirementsList>
            <li>Real, activo, con foto y nombre real</li>
            <li>Con al menos 100 amigos</li>
            <li>Al menos un año de edad</li>
            <li>Contenido apropiado</li>
            <li>Ser mayor de edad</li>
            <li>
              No debe haber sido previamente utilizado o alquilado a otras
              empresas para el uso de publicidad
            </li>
            <li>Tener un email asociado a tu perfil</li>
            <li>Administrador Comercial (BM) creado​</li>
            <li>ID verificado​</li>
            <li>2FA App Activado​</li>
          </RequirementsList>
        </RequirementsSectionWraper>
      </RequirementsSection>

      {/*  */}
    </Home>
  );
};

export default HomePage;
