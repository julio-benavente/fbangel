import styled, { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
    /* Box sizing rules */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    /* Remove default padding */
    ul,
    ol {
      padding: 0;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    ul,
    ol,
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
      margin: 0;
    }

    /* Set core body defaults */
    body {
      min-height: 100vh;
      scroll-behavior: smooth;
      text-rendering: optimizeSpeed;
      font-family: Roboto ,'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      overflow-x: hidden;
      min-width: 100vw;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
      text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img {
      max-width: 100%;
      display: block;
    }

    /* Natural flow and rhythm in articles by default */
    article > * + * {
      margin-top: 1em;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
      font: inherit;
    }
  
`;

export const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: 960px;
  max-width: ${(props) => props.fluid && "none"};
  margin: auto;
  padding: clamp(70px, 15vw, 100px) 32px;
  grid-template-columns: ${(props) => props.grid12 && "repeat(12, 1fr)"};
`;

export const H1 = styled.h1`
  font-size: clamp(2rem, 3vw, 2.5rem);
  margin-bottom: 40px;
`;
export const H2 = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.color.primary};
  margin-bottom: 30px;
`;
export const H3 = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.primary};
  margin-bottom: 25px;
`;
export const H4 = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme.color.primary};
  margin-bottom: 20px;
`;

export const RoundedBtn = css`
  border: none;
  outline: none;
  text-decoration: none;
  border-radius: 1000px;
  padding: 7px 20px;
  font-weight: 400;
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.white};
  cursor: pointer;
  justify-self: start;
`;

export const Tiny = styled.p`
  font-weight: 200;
  font-size: 0.875rem;
  font-style: italic;
  max-width: 500px;
  span {
    color: ${(props) => props.theme.color.secondary};
  }
`;

export const Parragraph = styled.div`
  max-width: 500px;
  margin-bottom: 30px;
  p {
    span {
      font-weight: 700;
      color: ${(props) => props.theme.color.green};
    }
  }

  p:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const PLink = css`
  color: ${(props) => props.theme.color.link};
  text-decoration: none;
`;

export const liBullets = css`
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
`;
