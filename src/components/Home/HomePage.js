import React from "react";

// Styles
import {
  HomeSection,
  LeftSide,
  Headline,
  Subheadline,
  StartButton,
  Image,
} from "../../styles/HomePageStyles";

// Assets
import phone from "../../assets/svgs/cellphone-in-hand.svg";

const HomePage = () => {
  return (
    <HomeSection className="HomeSection" id="Home" fluid>
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
    </HomeSection>
  );
};

export default HomePage;
