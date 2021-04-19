import styled, { css } from "styled-components";
import { transparentize, darken } from "polished";

// Styles
import { H2, Container, Parragraph } from "./GlobalStyles";

export const JoinUs = styled.div`
  margin-top: 90px;
`;
export const JoinUsSection = styled.div``;
export const JoinUsSectionWrapper = styled(Container)``;
export const JoinUsSectionTitle = styled(H2)``;
export const JoinUsSectionInfo = styled(Parragraph)``;

export const FormsWrapper = styled.form`
  width: 100%;
  min-height: 400px;
  box-shadow: 4px 4px 10px ${(props) => props.theme.color.gray300};
  display: grid;
  grid-template-columns: 4fr 6fr;
  border-radius: 10px;
`;
export const FormLocation = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  border-radius: 10px;
  padding: 20px;
`;

export const FormLocationTitle = styled.p`
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 2rem;
`;
export const Location = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-bottom: 0.7rem;
  font-weight: 700;
  color: ${(props) => transparentize(0.8, props.theme.color.white)};

  p.number {
    line-height: 30px;
    text-align: center;
    height: 30px;
    width: 30px;
    border-radius: 100px;
    justify-self: center;
    margin-right: 1rem;
  }

  p.location {
  }
`;

const baseForm = css``;

export const Forms = styled.div`
  padding: 20px;
`;

export const InputWraper = styled.div``;

export const Question = styled.div`
  font-weight: 500;
  margin-bottom: 10px;
  span {
    color: ${(props) => props.theme.color.secondary};
  }
`;
export const Options = styled.div`
  display: grid;
  justify-content: start;
  grid-auto-columns: auto;
  grid-auto-flow: column;
`;

export const Option = styled.label`
  padding: 0 20px 0 0;
  position: relative;

  .box {
    position: absolute;
    width: 14px;
    height: 14px;
    border: 1px solid ${(props) => props.theme.color.gray300};
    top: 50%;
    transform: translateY(-50%);
    left: 0;

    &.radio {
      border-radius: 100px;
    }

    &.checkbox {
      border-radius: 3px;
    }
  }

  input:checked ~ .box {
    &::after {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: ${(props) => props.theme.color.secondary};
    }

    &.radio::after {
      border-radius: 100px;
    }

    &.checkbox::after {
      border-radius: 3px;
    }
  }
`;

export const FormOne = styled.div``;

export const FormTwo = styled.div``;

export const FormThree = styled.div``;

export const FormFour = styled.div``;

export const FormFive = styled.div``;

export const JoinUsImage = styled.div``;
