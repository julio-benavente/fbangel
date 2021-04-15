import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 20px 40px;
  position: absolute;
  width: 100%;
  top: 0;
`;

export const Logo = styled(NavLink)`
  font-size: 1.6rem;
  text-decoration: none;
  font-weight: 700;
  color: ${(props) => props.theme.color.gray300};
  span {
    display: inline-grid;
    justify-items: center;
    background-color: ${(props) => props.theme.color.primary};
    padding: 3px 7px;
    color: ${(props) => props.theme.color.white};
  }
`;

export const NavLinks = styled.div`
  justify-self: end;
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
`;

export const Link = styled(NavLink)`
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: ${(props) => props.theme.color.black};

  &::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 10px;
    background-color: ${(props) => props.theme.color.primary};
    transition: width 200ms ease-in-out;
  }

  &:hover,
  &.active {
    &::before {
      width: 100%;
    }
  }
`;
