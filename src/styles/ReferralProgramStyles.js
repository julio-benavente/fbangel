import styled from "styled-components";

// Styles
import {
  Container,
  H2,
  Parragraph,
  RoundedBtn,
  Tiny,
  liBullets,
} from "./GlobalStyles";

export const ReferralProgram = styled.div`
  padding-top: 90px;
`;

export const ReferralProgramSection = styled(Container)`
  grid-template-columns: 1fr 1fr;

  > * {
    grid-column: 1/2;
  }
`;

export const ReferralProgramSectionTitle = styled(H2)``;

export const ReferralProgramSectionInfo = styled(Parragraph)`
  .money {
    color: ${(props) => props.theme.color.green};
    font-weight: 700;
  }

  .asterisk {
    color: ${(props) => props.theme.color.secondary};
  }
`;

export const InformationList = styled(Parragraph)`
  position: relative;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.link};
  }

  .important {
    color: ${(props) => props.theme.color.secondary};
  }

  p {
    margin-left: 14px;
    position: relative;
    ${liBullets}
  }
`;

export const ReferralProgramImage = styled.img`
  grid-column: 2/3;
  grid-row: 1/4;
  justify-self: end;
  align-self: center;
  width: clamp(200px, 25vw, 350px);
`;

export const RegistrationBtn = styled.a`
  ${RoundedBtn}
  margin-bottom: 4rem;
`;

export const TinyLetter = styled(Tiny)``;
