import styled from "styled-components";
import { transparentize } from "polished";
import { Link } from "react-router-dom";

// Styles
import { Container, Tiny } from "./GlobalStyles";

export const FooterSection = styled.div`
  background-color: ${(props) => props.theme.color.primary};

  > * {
    color: ${(props) => props.theme.color.white};
  }
`;
export const FooterSectionWraper = styled(Container)`
  grid-auto-rows: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const Contact = styled(Link)`
  font-weight: 700;
  color: ${(props) => props.theme.color.white};
  text-decoration: none;
  margin-bottom: 1rem;
`;
export const UseConditions = styled(Link)`
  font-weight: 700;
  color: ${(props) => props.theme.color.white};
  text-decoration: none;
  margin-bottom: 3rem;
`;

export const Copyright = styled.div`
  font-weight: 300;
  justify-self: center;
  margin-bottom: 2rem;
`;
export const Detach = styled(Tiny)`
  max-width: none;
  font-weight: 200;
  color: ${(props) => transparentize(0.6, props.theme.color.white)};
`;
