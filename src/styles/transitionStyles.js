import { css } from "styled-components"

export const transitionStyles = css`
  .fade-enter {
    opacity: 0.1;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 1000ms;
  }

  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }
`
