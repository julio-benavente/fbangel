import styled, { css } from "styled-components";
import { transparentize } from "polished";

// Styles
import { H2, Container, Parragraph } from "./GlobalStyles";

export const JoinUs = styled.div`
  margin-top: 90px;
`;
export const JoinUsSection = styled.div``;
export const JoinUsSectionWrapper = styled(Container)``;
export const JoinUsSectionTitle = styled(H2)``;
export const JoinUsSectionInfo = styled(Parragraph)``;

export const FormsWrapper = styled.div`
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

  &.active {
    .number {
      color: ${(props) => props.theme.color.primary};
      background: ${(props) => props.theme.color.white};
    }

    .location {
      color: ${(props) => props.theme.color.white};
    }
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: ${(props) => (props.one ? "end" : "space-between")};
  width: 100%;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.color.secondary};
  border: none;
  color: ${(props) => props.theme.color.white};
  padding: 5px 25px 7px;
  font-weight: 600;
  border-radius: 5px;
  align-self: end;
  cursor: pointer;
  outline: none;
  justify-items: end;

  &:disabled {
    background: ${(props) => props.theme.color.gray300};
    cursor: not-allowed;
  }
`;

export const Forms = styled.form`
  padding: 20px;
  display: grid;
`;

export const InputWraper = styled.div`
  position: relative;
  input[type="text"],
  input[type="password"],
  select[name="rcrs-country"],
  select[name="rcrs-region"],
  input.form-control[type="tel"] {
    padding: 0 10px;
    border: 2px solid ${(props) => props.theme.color.gray300};
    border-radius: 2px;
    outline: none;
    width: 100%;
    max-width: 250px;
    &:focus {
      border: 2px solid ${(props) => props.theme.color.secondary};
    }
  }

  .error {
    position: absolute;
    font-size: 0.75rem;
    color: ${(props) => props.theme.color.secondary};
    max-width: 100%;
  }

  // Country and Region selectors
  select[name="rcrs-country"] {
    width: 100%;
  }

  select[name="rcrs-region"] {
    width: 100%;
  }

  // Phone input
  input.form-control[type="tel"] {
    max-height: 25.6px;
    width: 100%;
    padding-left: 48px;
  }

  // React datepicker
  .react-datepicker-wrapper {
    width: 100%;

    input {
      text-align: center;
    }
  }
`;

export const Question = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
  span {
    color: ${(props) => props.theme.color.secondary};
  }
`;
export const Options = styled.div`
  display: grid;
  justify-content: start;
  align-content: start;
  gap: 0 20px;

  ${(props) =>
    props.width == "short" &&
    css`
      grid-auto-columns: auto;
      grid-auto-flow: column;
    `}

  ${(props) =>
    props.width == "wide" &&
    css`
      grid-template-columns: 1fr 1fr;
    `}
  
  ${(props) =>
    props.width == "full" &&
    css`
      grid-template-columns: 1fr;
    `}
`;

export const Option = styled.label`
  padding: 0 20px 0 0;
  position: relative;

  .box {
    position: absolute;
    width: 14px;
    height: 14px;
    border: 1px solid ${(props) => props.theme.color.gray300};
    top: 12px;
    transform: translateY(-50%);
    left: 0;

    &.radio {
      border-radius: 100px;
    }

    &.checkbox {
      border-radius: 2px;
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
      border-radius: 1px;
    }
  }
`;

const baseForm = css`
  display: grid;
  gap: 20px;
  align-content: start;
  margin-bottom: 30px;
`;

export const FormOne = styled.div`
  ${baseForm}
`;

export const FormTwo = styled.div`
  ${baseForm}
  grid-template-columns: repeat(2, calc(((100% - 20px - 20px) / 2) + 10px));
`;

export const FormThree = styled.div`
  ${baseForm}
  grid-template-columns: 1fr 1fr;

  .frecuency,
  .devices,
  .os,
  .fbEmailIsConfirmed,
  .bmIdIsConfirmed,
  .code2FA {
    grid-column: 1/-1;
  }
`;

export const FormFour = styled.div`
  ${baseForm}
`;

export const FormFive = styled.div`
  ${baseForm}
`;

export const JoinUsImage = styled.div``;
