import styled from "styled-components";
import { Link } from "react-router-dom";
import { transparentize } from "polished";

// Styles
import {
  Container,
  H1,
  H2,
  H4,
  RoundedBtn,
  Tiny,
  Parragraph,
} from "./GlobalStyles";

export const Home = styled.div``;

// Banner section
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

export const CardInfo = styled.p`
  margin-bottom: 10px;
`;
export const Disclaimer = styled(Tiny)``;

// Requirements section
export const RequirementsSection = styled.div`
  background-color: ${(props) => props.theme.color.gray100};
  position: relative;
`;

export const MoneyImage = styled.img`
  position: absolute;
  height: clamp(100px, 16vw, 200px);
  transform: rotate(90deg) translate(-50%, 20%);
`;

export const TaskListImage = styled.img`
  position: absolute;
  height: clamp(10px, 20vw, 300px);
  bottom: 0;
  right: 0;
  transform: translate(30%, 0%);
`;

export const RequirementsSectionWraper = styled(Container)`
  grid-template-columns: 1fr 1fr;
`;
export const SectionTitle = styled(H2)`
  grid-column: 1/-1;
`;

export const RequirementsInfo = styled(Parragraph)`
  grid-column: 1/-1;
  p {
    span {
      color: ${(props) => props.theme.color.green};
    }
  }
`;

export const HowItWorksBtn = styled(Link)`
  ${RoundedBtn}
  grid-column: 1/-1;
  margin-bottom: 50px;
`;
export const RequirementsSubtitle = styled(H4)``;
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

// Referral section
export const ReferralSection = styled.div``;

export const ReferralSectionWraper = styled(Container)`
  grid-template-columns: 1fr 1fr;

  > * {
    grid-column: 1/2;
  }
`;
export const ReferralSectionTitle = styled(H2)``;
export const ReferralInfo = styled(Parragraph)``;
export const RegisterBtn = styled(Link)`
  ${RoundedBtn}
`;

export const ReferrealTiny = styled(Tiny)`
  margin-top: 100px;
`;
export const FriendsImage = styled.img`
  grid-column: 2/-1;
  grid-row: 1/5;
  width: clamp(240px, 100%, 350px);
  justify-self: end;
  margin-top: clamp(50px, 10vh, 150px);
`;

// Testimonies section
export const TestimoniesSection = styled.div`
  background-color: ${(props) => props.theme.color.gray100};
  overflow-x: hidden;
`;
export const TestimoniesSectionWraper = styled(Container)`
  position: relative;
`;
export const TestimoniesSectionTitle = styled(H2)``;
export const TestimoniesInfo = styled(Parragraph)``;
export const TestimoniesCardWraper = styled.div`
  display: grid;
  grid-auto-columns: 400px;
  grid-auto-flow: column;
  gap: 50px;
  /* position: relative; */
`;
export const TestimonyCard = styled.div`
  padding: 24px;
  box-shadow: 4px 4px 10px ${(props) => props.theme.color.gray300};
  overflow-x: hidden;
`;
export const Testimony = styled.div`
  height: 220px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: calc(100% + 100px);
    left: -40px;
    height: 0.5px;
    background-color: ${(props) =>
      transparentize(0.6, props.theme.color.gray300)};
  }
`;
export const Author = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  margin-top: 20px;
`;
export const Membership = styled.div`
  font-weight: 300;
  font-size: 0.875rem;
`;
export const TestimoniesNav = styled.div`
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  justify-content: center;
  justify-items: center;
  gap: 5px;
`;
export const TestimoniesNavLink = styled.div`
  height: 10px;
  width: 30px;
  background-color: ${(props) => props.theme.color.secondary};
`;
