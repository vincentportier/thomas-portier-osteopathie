import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import IconExternal from "../icons/external"

const StyledHero = styled.section`
  position: relative;
  background: var(--primary);

  display: flex;
  align-items: center;
  min-height: calc(100vh - 85px);
  top: -1px;
  .container-hero {
    position: relative;
    width: 100%;
    padding: 25px 100px;

    display: grid;
    grid-template-columns: 1fr 1fr;

    .hero-text {
      color: var(--white);
      margin: auto 50px;
      white-space: nowrap;
      h1 {
        font-size: var(--fz-heading);
      }
      h2 {
        font-size: var(--fz-xxl);
      }
      a {
        ${({ theme }) => theme.mixins.btnWhite}
        position:relative;
        white-space: nowrap;
        margin-top: 25px;
        font-size: 20px;
        fill: var(--primary);
      }
    }

    .hero-image {
      width: 100%;

      img {
        display: block;
        object-fit: contain;
        width: 100%;
      }
    }
    @media (max-width: 1080px) {
      padding: 25px 50px;
    }

    @media (max-width: 780px) {
      grid-template-columns: 1fr;
      .hero-text {
        margin: 0 auto 50px;
        text-align: center;
        white-space: normal;

        h1 {
          font-size: var(--fz-xl);
        }
        h2 {
          font-size: var(--fz-md);
        }
      }
    }
  }
`
export const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true)
    }, 1000)
    return () => clearTimeout()
  }, [])

  return (
    <>
      <StyledHero>
        <div className="container-hero">
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={1000}>
                <div className="hero-text" style={{ transitionDelay: "100ms" }}>
                  <h1>THOMAS PORTIER</h1>
                  <h2>
                    CABINET D’ OSTEOPATHIE <br /> A NOYAL SUR VILAINE
                  </h2>

                  <a
                    href="https://prendre-mon-rdv.com/portier-thomas/osteopathe/noyal-sur-vilaine"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                    onMouseEnter={() => setShowArrow(true)}
                    onMouseLeave={() => setShowArrow(false)}
                  >
                    <span className={showArrow ? "slide-left-active" : ""}>
                      Réservez en ligne
                    </span>
                    <span className={showArrow ? "arrow-active" : "arrow"}>
                      <IconExternal />
                    </span>
                  </a>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={1000}>
                <div
                  className="hero-image"
                  style={{ transitionDelay: "100ms" }}
                >
                  <StaticImage
                    src="../../images/hero-image.png"
                    alt="a doctor and patient illustration"
                    placeholder="blurred"
                  />
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
      </StyledHero>
    </>
  )
}
