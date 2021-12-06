import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { navLinks } from "../config"
import { Menu } from "./menu"
import IconExternal from "./icons/external"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Link } from "gatsby"

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 50px;
  width: 100vw;
  height: 85px;
  background: var(--primary);
  overflow: hidden;
  z-index: 10;
  @media screen and (max-width: 980px) {
    padding: 25px 20px;
  }
`
const Navigation = styled.nav`
  display: flex;
  align-items: center;

  justify-content: space-between;
  width: 100%;
  max-width: 1600px;
  font-size: var(--fz-md);

  .nav-logo {
    color: var(--white);
    font-weight: 900;

    .logo-firstLine {
      letter-spacing: 0.07rem;
    }
    .logo-secondLine {
      letter-spacing: 0.35rem;
    }
  }

  .nav-navLinks {
    margin-left: auto;
    margin-right: 50px;
    color: var(--white);
    ul {
      display: flex;

      li {
        list-style: none;
        margin-right: 35px;
        position: relative;

        :hover {
          &:after {
            position: absolute;
            display: block;
            content: "";
            height: 1px;
            background-color: var(--white);
            width: 100%;
            transition: var(--transition);
          }
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
    @media screen and (max-width: 980px) {
      display: none;
    }
  }

  .btn {
    position: relative;

    ${({ theme }) => theme.mixins.btnWhite}
    ${({ theme }) => theme.mixins.boxShadow}
      @media (max-width: 980px) {
      display: none;
    }
  }
`

export const Nav = () => {
  const [showArrow, setShowArrow] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 100)

    return () => clearTimeout()
  }, [])

  const navLinksMarkup = navLinks && navLinks.length !== 0 && (
    <ul>
      <TransitionGroup component={null}>
        {isMounted &&
          navLinks.map((navLink, i) => (
            <CSSTransition
              key={navLink.name}
              classNames="fadedown"
              timeout={1000}
            >
              <li style={{ transitionDelay: `${i * 100}ms` }}>
                <Link to={navLink.url}>{navLink.name}</Link>
              </li>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </ul>
  )

  return (
    <StyledHeader>
      <Navigation>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={1000}>
              <div className="nav-logo">
                <span className="logo-firstLine">THOMAS PORTIER</span>
                <br />
                <span className="logo-secondLine">OSTÉOPATHE</span>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
        <div className="nav-navLinks">{navLinksMarkup}</div>
        <div className="nav-buttons">
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames="fadedown" timeout={1000}>
                <a
                  href="https://prendre-mon-rdv.com/portier-thomas/osteopathe/noyal-sur-vilaine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  role="button"
                  onMouseEnter={() => setShowArrow(true)}
                  onMouseLeave={() => setShowArrow(false)}
                  style={{
                    transitionDelay: `${(navLinks.length + 1) * 100}ms`,
                  }}
                >
                  <span className={showArrow ? "slide-left-active" : ""}>
                    Réservez en ligne
                  </span>
                  <span className={showArrow ? "arrow-active" : "arrow"}>
                    <IconExternal />
                  </span>
                </a>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
      </Navigation>

      <Menu />
    </StyledHeader>
  )
}
