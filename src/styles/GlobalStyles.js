import { createGlobalStyle } from "styled-components"
import { transitionStyles } from "./transitionStyles"

export const GlobalStyle = createGlobalStyle`

// variables
:root {
${({ theme }) => theme.colors}
--fz-heading:35px;
	--fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
	--transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  
--hamburger-width: 30px;

--ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
--ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
--ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
--ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
}


//CSS reset
html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin:0;
    padding:0;
    font-family: sans-serif;
  }

  ::selection {
    background-color: var(--primary);
    color: var(--white);
  }

  body {
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: var(--fz-xxl);
    line-height: 1.3;
    font-weight:400;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.blur {
      overflow: hidden;

      #content > * , .nav-logo{
        filter: blur(3px);
       
        pointer-events: none;
        user-select: none;
      }
    }

  }

  li {
    list-style-type: none;
  }


  a {
    display: inline-block;
    color:inherit;
    text-decoration: none;

    &:hover {
      cursor:pointer;
    }
  }

#root {
  display:grid;
  grid-template-rows: 1fr auto;
 
overflow: hidden;
}



.container, .container-hero {
  max-width:1600px;
  margin:0 auto;

}






.container {

    h1 {
      font-size: var(--fz-heading);
      margin-bottom: 25px;
    }
    p {
      font-size: var(--fz-lg);
      line-height: 1.6rem;
    }

    padding: 50px 150px;

    @media (max-width: 1080px) {
      padding: 50px 100px;
      h1 {
        font-size: var(--fz-xxl);
      }
      p {
        font-size: var(--fz-md);
      }
    }
    @media (max-width: 768px) {
      padding: 30px 50px;
      h1 {
        font-size: var(--fz-xxl);
      }
      p {
        font-size: var(--fz-sm);
      }
    }
    @media (max-width: 480px) {
      padding: 20px 25px;
      h1 {
        font-size: var(--fz-lg);
      }
      p {
        font-size: var(--fz-xs);
      }
    }

}

  .arrow {
    display: none;
  }

  .arrow-active {
    position: absolute;
    fill: var(--primary);
    top: 8px;
    width: 15px;
    /* transition: all 0, 15s ease-in-out; */
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
    animation-name: slidein;
    transition: all 0, 15s ease-in-out;
  }

  .slide-left-active {
    position: relative;

    animation-duration: 0.25s;
    animation-fill-mode: forwards;
    animation-name: slideleft;
    transition: var(--transition);
  }

  @keyframes slidein {
    from {
      right: 30px;

      opacity: 0;
    }

    to {
      right: 15px;

      opacity: 1;
    }
  }
  @keyframes slideleft {
    from {
      left: 0;
    }

    to {
      left: -15px;
    }
  }

${transitionStyles}
`
