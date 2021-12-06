import React from "react"
import styled from "styled-components"
import { navLinks } from "../config"
import { Link } from "gatsby"

const StyledFooter = styled.footer`
  min-height: 100px;
  background: var(--black);

  .footer-grid {
    display: block;
    margin: 0 auto;
    color: var(--white);
    max-width: 1600px;
    text-align: left;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 25px;
    row-gap: 25px;

    p,
    a {
      font-size: var(--fz-sm);
    }
    h1 {
      font-size: var(--fz-lg);
      margin-bottom: 15px;
    }

    .mapouter {
      margin-top: 15px;
    }

    padding: 75px 75px;

    @media (max-width: 1080px) {
      padding: 75px 50px;
    }
    @media (max-width: 768px) {
      padding: 50px 50px;
    }
    @media (max-width: 480px) {
      padding: 50px 25px;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      text-align: center;
    }
  }

  .btn {
    ${({ theme }) => theme.mixins.smallBtnPrimary}
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-grid">
        <div>
          <h1>Adresse</h1>
          <p>12 place de l'Europe</p>
          <p>35530, Noyal-sur-Vilaine</p>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85238.95300380372!2d-1.625223566629376!3d48.115689290547955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ed9d5ecf4cf69%3A0xa49302c302b9c73d!2sPORTIER%20Thomas!5e0!3m2!1sfr!2sfr!4v1623925594340!5m2!1sfr!2sfr"
                width="200"
                height="200"
                frameBorder="0"
                allowfullscreen=""
                loading="lazy"
                title="carte accès"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <h1>Navigation</h1>
          <ul>
            {navLinks &&
              navLinks.map(navLink => (
                <li key={navLink.name}>
                  <Link to={navLink.url}>{navLink.name}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h1>Réservation en ligne</h1>
          <a
            className="btn"
            href="https://prendre-mon-rdv.com/portier-thomas/osteopathe/noyal-sur-vilaine"
          >
            Réservez ici
          </a>
        </div>

        <div>
          <h1>Contact</h1>
          <p>06 37 12 04 85</p>
        </div>
        <div>
          <h1>Crédits</h1>
          <p>
            Design{" "}
            <a
              href="https://vportier.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              Vincent Portier
            </a>
          </p>
          <p>
            Illustrations par{" "}
            <a
              href="https://www.ls.graphics/illustrations"
              rel="noopener noreferrer"
              target="_blank"
            >
              ls graphics
            </a>
          </p>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
