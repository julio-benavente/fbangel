import styled from "styled-components";
import { Link } from "react-router-dom";
import { transparentize } from "polished";

// Styles
import { Container, H1, H2, H4, RoundedBtn } from "./GlobalStyles";

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
export const CardInfo = styled.p`
  margin-bottom: 10px;
`;
export const Disclaimer = styled.span`
  font-weight: 200;
  font-size: 0.875rem;
  font-style: italic;
`;

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
export const Info = styled.div`
  grid-column: 1/-1;
  max-width: 500px;
  margin-bottom: 30px;
  span {
    font-weight: 700;
    color: ${(props) => props.theme.color.green};
  }
`;
export const HowItWorksBtn = styled(Link)`
  ${RoundedBtn}
  grid-column: 1/-1;
  justify-self: start;
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
