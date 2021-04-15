import styled, { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
    /* Box sizing rules */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    /* Remove default padding */
    ul[class],
    ol[class] {
      padding: 0;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    ul[class],
    ol[class],
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
      /* line-height: 1.5; */
      font-weight: 300;
      font-family: Roboto ,'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }

    /* Remove list styles on ul, ol elements with a class attribute */
    ul[class],
    ol[class] {
      list-style: none;
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
`;
export const H2 = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.color.primary};
`;
export const H3 = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.primary};
`;
export const H4 = styled.h1`
  font-size: 1rem;
  color: ${(props) => props.theme.color.primary};
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
`;
