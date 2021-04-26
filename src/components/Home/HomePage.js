import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

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
  RequirementsSectionWrapper,
  MoneyImage,
  TaskListImage,
  SectionTitle,
  RequirementsInfo,
  HowItWorksBtn,
  RequirementsSubtitle,
  RequirementsList,
  // Referral Section
  ReferralSection,
  ReferralSectionWrapper,
  ReferralSectionTitle,
  ReferralInfo,
  ReferrealTiny,
  FriendsImage,
  RegisterBtn,
  // Testimonies section
  TestimoniesSection,
  TestimoniesSectionWrapper,
  TestimoniesSectionTitle,
  TestimoniesInfo,
  TestimoniesCardWrapper,
  TestimonyCard,
  Testimony,
  Author,
  Membership,
  TestimoniesNav,
  TestimoniesNavLink,
} from "../../styles/HomePageStyles";

// Assets
import phone from "../../assets/svgs/cellphone-in-hand.svg";
import money from "../../assets/images/money.png";
import task_list from "../../assets/images/tasks-list.png";
import friends_chatting from "../../assets/svgs/friends-chatting.svg";

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
      "¡La confirmación demora de 3 a 5 días hábiles!* (¡Por lo general, en 48 horas!)",
    disclaimer: (
      <p>
        <span>*</span> Después del primer inicio de sesión
      </p>
    ),
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

const testimonies = [
  {
    number: "1",
    testimony:
      "He colaborado con fbangel durante más de un año, no he tenido ningún problema. El dinero siempre llega a tiempo y siempre recibo respuestas a todas mis preguntas. Es genial que no tenga que hacer nada y, además, no afecta a mi perfil en absoluto. Digamos que simplemente gano dinero alquilando mi cuenta de Facebook. Se lo recomiendo a todo el mundo!",
    author: "Ana Martín",
    membership: "mayo 2019",
    country: "",
  },
  {
    number: "2",
    testimony:
      "Decidí intentar ganar dinero con FbAngel, ya que me interesaba saber cómo funciona. Puedo decir que es una gran manera de tener ingresos adicionales. ¡Simplemente he tenido que rellenar el formulario Y NADA MAS! Los chicos se encargan del resto yo simplemente me limito a recoger mi dinero en mi cuenta PayPal",
    author: "Tony Smith",
    membership: "octubre 2019",
    country: "",
  },
  {
    number: "3",
    testimony:
      "Cuando en mi país tuvimos que ir al encierro debido a covid-19, me quedé sin trabajo, y sin ingresos, una amiga me explicó que tenía un ingreso extra alquilando su facebook para anunciar publicidad, yo era un poco escéptica pero decidí probar, y la verdad es que hasta ahora no he tenido ningún problema , los pagos son siemprepuntuales, y siempre me han pagado por todos los amigos que he traído. ¡Lo recomiendo!",
    author: "Alena Due",
    membership: "marzo 2020",
    country: "",
  },
];

const testimoniesNavVariants = {};

const HomePage = () => {
  const [currentTestimony, setCurrentTestimony] = useState(0);
  const testimoniesNavAnimation = useAnimation();
  const handleTestimoniesNav = (to) => {
    const translate = (to) => (400 + 50) * -to;
    testimoniesNavAnimation.start({
      x: translate(to),
      transition: {
        esae: "esaeInOut",
      },
    });
    setCurrentTestimony(to);
  };

  return (
    <Home className="Home" id="Home">
      <BannerSection>
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
          <Card key={number}>
            <Number>{number}</Number>
            <CardTitle>{title}</CardTitle>
            <CardInfo>{info}</CardInfo>
            {disclaimer && <Disclaimer>{disclaimer}</Disclaimer>}
          </Card>
        ))}
      </ProcessSection>

      <RequirementsSection>
        <RequirementsSectionWrapper>
          <MoneyImage src={money} />
          <SectionTitle>¿Cuánto ganarás?</SectionTitle>
          <TaskListImage src={task_list} />
          <RequirementsInfo>
            <p>
              <span>! Gana 30 dólares cada mes !</span> Confirma que cumples los
              y prepara tu perfil, haz clic en el botón y aprende cómo.
            </p>
          </RequirementsInfo>
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
        </RequirementsSectionWrapper>
      </RequirementsSection>

      <ReferralSection>
        <ReferralSectionWrapper>
          <ReferralSectionTitle>Programa de referidos</ReferralSectionTitle>
          <ReferralInfo>
            <p>
              ¡ Tenemos un programa de referidos para ti ! Si nos traes
              familiares o amgios puedes ganar más de <span> 1000 dólares</span>{" "}
              al mes.
            </p>
            <p>
              Activa tu código de referente y gana <span> 5 dólares</span> por
              cada referido válido. ¡ Sin límite !
            </p>
          </ReferralInfo>
          <RegisterBtn to="programa-referidos">Regístrate aquí</RegisterBtn>
          <ReferrealTiny>
            <p>
              <span>*</span> Los planes se pagarán después de que nuestro equipo
              haya confirmado el perfil como válido.
            </p>
            <p>
              <span>*</span> En todos los planes, nuestro equipo debe poder
              contactar a los propietarios para resolver cualquier eventual
              problema que pueda ocurrir.
            </p>
          </ReferrealTiny>
          <FriendsImage src={friends_chatting} />
        </ReferralSectionWrapper>
      </ReferralSection>

      <TestimoniesSection>
        <TestimoniesSectionWrapper>
          <TestimoniesSectionTitle>
            ¿Qué es lo que dice la gente?
          </TestimoniesSectionTitle>
          <TestimoniesInfo>
            ¡Gente que se unió a nosotros y ya está ganando dinero!
          </TestimoniesInfo>
          <TestimoniesCardWrapper>
            {testimonies.map(
              ({ testimony, author, country, membership }, i) => (
                <TestimonyCard
                  key={i}
                  as={motion.div}
                  animate={testimoniesNavAnimation}
                >
                  <Testimony>{testimony}</Testimony>
                  <Author>{author}</Author>
                  {/* <Country></Country> */}
                  <Membership>{`Miembro desde ${membership}`}</Membership>
                </TestimonyCard>
              )
            )}
          </TestimoniesCardWrapper>
          <TestimoniesNav>
            {testimonies.map((e, i) => (
              <TestimoniesNavLink
                key={i}
                active={i == currentTestimony}
                onClick={() => handleTestimoniesNav(i)}
              />
            ))}
          </TestimoniesNav>
        </TestimoniesSectionWrapper>
      </TestimoniesSection>

      {/*  */}
    </Home>
  );
};

export default HomePage;
