import styled from "styled-components";
import { Container, H1, H4, RoundedBtn } from "./GlobalStyles";
import { Link } from "react-router-dom";

export const HomeSection = styled(Container)`
  padding: clamp(150px, 15vh, 300px) 40px;
  min-height: 100vw;
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
