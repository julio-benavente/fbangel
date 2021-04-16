import styled from "styled-components";
import { Link } from "react-router-dom";

// Styles
import {
  Container,
  H4,
  H2,
  Tiny,
  Parragraph,
  PLink,
} from "../styles/GlobalStyles";

export const HowItWorks = styled.div`
  padding-top: calc(90px);
`;

export const HowItWorksSection = styled(Container)`
  grid-template-columns: 1fr 1fr;

  > * {
    grid-column: 1/2;
  }
`;

export const HowItWorksSectionTitle = styled(H2)``;

export const HowItWorksSectionInfo = styled(Parragraph)``;

export const FAQLink = styled(Link)`
  ${PLink}
  display: block;
  margin-top: 10px;
`;

export const HowItWorksImage = styled.img`
  grid-column: 2/3;
  grid-row: 1/3;
  justify-self: end;
  width: clamp(200px, 20vw, 350px);
  margin-top: 2rem;
`;

export const RequirementsSection = styled.div`
  background-color: ${(props) => props.theme.color.gray100};
`;

export const RequirementsSectionWrapper = styled(Container)`
  grid-template-columns: 1fr 1fr;
  > * {
    grid-column: 2/3;
  }
`;

export const RequirementsSectionTitle = styled(H2)`
  justify-self: end;
`;

export const RequirementsList = styled.ul`
  position: relative;

  li {
    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 14px;
      height: 14px;
      border-radius: 100px;
      border: 1px solid ${(props) => props.theme.color.gray300};
      top: 7px;
      left: -22px;
    }

    &::after {
      width: 10px;
      height: 10px;
      top: 9px;
      left: -20px;
      background-color: ${(props) => props.theme.color.secondary};
    }
  }
`;

export const RequirementsImage = styled.img`
  grid-column: 1/2;
  grid-row: 1/3;
  width: clamp(200px, 20vw, 350px);
  margin-top: 2rem;
`;
