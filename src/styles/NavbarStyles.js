import styled from "styled-components";

export const NavbarSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 20px 40px;
`;

export const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${(props) => props.theme.color.gray300};

  span {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const NavLinks = styled.div`
  justify-self: end;
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
`;

export const NavLink = styled.div`
  margin: 0 15px;
`;
