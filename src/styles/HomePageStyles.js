import styled from "styled-components";
import { Link } from "react-router-dom";
import { transparentize } from "polished";

// Styles
import { Container, H1, H4, RoundedBtn } from "./GlobalStyles";

export const Home = styled.div``;
export const BannerSection = styled(Container)`
  padding: clamp(150px, 15vh, 300px) 40px;
  /* min-height: 100vw; */
  grid-template-columns: 1fr 1fr;
  align-items: start;
  align-content: start;
`;

export const LeftSide = styled(Container)`
  padding: 0;
`;

export const Headline = styled(H1)`
  line-height: 1;
  margin-bottom: 10px;
`;

export const Subheadline = styled(H4)`
  font-weight: 400;
  margin-bottom: 40px;
`;

export const StartButton = styled(Link)`
  ${RoundedBtn}
  justify-self: start;
  font-weight: 500;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
`;

export const Image = styled.img`
  justify-self: end;
  padding-right: clamp(50px, 10vw, 100px);
  width: 400px;
`;
export const ProcessSection = styled(Container)`
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  position: relative;
`;
export const Card = styled.div`
  display: grid;
  grid-template-rows: 45px auto;
  position: relative;
`;
export const Number = styled.div`
  position: absolute;
  color: ${(props) => transparentize(0.9, props.theme.color.secondary)};
  font-weight: 800;
  font-size: 7rem;
  line-height: 1;
  transform: translate(-40px, calc(-100% + 48px));
`;
export const CardTitle = styled(H4)``;
export const CardInfo = styled.div``;
export const Disclaimer = styled.div``;
