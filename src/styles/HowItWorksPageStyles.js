import styled from "styled-components";
import { Link } from "react-router-dom";

// Styles
import {
  Container,
  H2,
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

// Configuration section

export const ConfigurationSection = styled.div``;

export const ConfigurationSectionWrapper = styled(Container)`
  grid-template-columns: 1fr 1fr;
  position: relative;

  > * {
    grid-column: 1/2;
  }
`;

export const ConfigurationSectionTitle = styled(H2)``;

export const ConfigurationInfo = styled(Parragraph)``;

export const ConfigurationImage = styled(HowItWorksImage)`
  grid-column: 2/3;
  grid-row: 1/5;
`;

export const ConfigurationList = styled.ol`
  padding-left: 20px;
  li {
    list-style: decimal;
  }
  margin-bottom: 2rem;
`;

export const StepOne = styled.div`
  ol,
  ul {
    padding-left: 20px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.link};
  }
`;

export const StepOneTitle = styled.p`
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Options = styled.div`
  grid-column: 1/-1;
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;

export const OptionOne = styled.div`
  ol,
  ul {
    padding-left: 20px;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 10px;
  }

  img {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.link};
  }
`;

export const OptionOneTitle = styled.div`
  width: 100%;
  padding: 5px 0;
  font-weight: 500;
  text-align: center;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  margin-bottom: 20px;
`;

export const OptionTwo = styled(OptionOne)``;
export const OptionTwoTitle = styled(OptionOneTitle)``;

export const StepTwo = styled(StepOne)`
  .extra {
    margin: 10px 0;
    p {
      margin-bottom: 5px;
    }
  }
`;
export const StepTwoTitle = styled(StepOneTitle)``;

// Registration section
export const RegistrationSection = styled.div`
  background-color: ${(props) => props.theme.color.gray100};
`;

export const RegistrationSectionWrapper = styled(Container)`
  grid-template-columns: 1fr 1fr;
`;

export const RegistrationSectionTitle = styled(H2)``;

export const RegistrationImage = styled(HowItWorksImage)``;

export const RegistrationInfo = styled(Parragraph)`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.link};
  }
`;

// Payment section
export const PaymentSection = styled.div``;

export const PaymentSectionWrapper = styled(Container)`
  grid-template-columns: 1fr 1fr;
  > * {
    grid-column: 2/3;
  }
`;

export const PaymentImage = styled(HowItWorksImage)`
  grid-row: 1/3;
  grid-column: 1/2;
  justify-self: start;
  align-self: center;
  margin-top: 0;
`;

export const PaymentSectionTitle = styled(H2)`
  justify-self: end;
`;

export const PaymentInfo = styled(Parragraph)`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.link};
  }
`;

// Support section
export const SupportSection = styled.div`
  background-color: ${(props) => props.theme.color.gray100};
`;

export const SupportSectionWrapper = styled(Container)`
  grid-template-columns: 1fr 1fr;
  > * {
    grid-column: 1/2;
  }
`;

export const SupportImage = styled(RequirementsImage)`
  grid-column: 2/3;
  grid-row: 1/3;
  justify-self: end;
  align-self: center;
`;

export const SupportSectionTitle = styled(H2)``;

export const SupportInfo = styled(Parragraph)`
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.link};
  }

  .important {
    font-weight: 700;
    font-size: 1.2rem;
    color: ${(props) => props.theme.color.secondary};
    margin-top: 30px;
  }
`;
