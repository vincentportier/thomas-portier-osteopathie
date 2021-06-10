import React, { useRef, useEffect } from "react"
import styled from "styled-components"

import localisation from "../../images/localisation.png"
import contact from "../../images/contact.png"
import paiement from "../../images/paiement.png"
import { srConfig } from "../../config"
import sr from "../../utils/sr"

const StyledSection = styled.section`
  background: #f8f8f8;

  overflow: hidden;
  text-align: center;

  h1:first-of-type {
    margin-top: 25px;
  }
  .container {
    padding-left: 25px;
    padding-right: 25px;
    margin: 0 auto;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: row;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }
`
const StyledCard = styled.div`
  background: var(--white);
  border: 1px solid transparent;
  border-radius: 10px;
  margin: 25px;
  transition: var(--transition);
  ${({ theme }) => theme.mixins.boxShadow}
  @media (max-width: 980px) {
    margin: 15px;
  }

  @media (max-width: 480px) {
    margin-left: 0;
    margin-right: 0;
  }

  &:hover {
    ${({ theme }) => theme.mixins.boxShadowHover}

    transform: translateY(-5px) scale(1.01);
  }
  .card-text {
    padding: 0 10px 20px;

    div {
      margin-bottom: 15px;
    }

    p {
      font-size: var(--fz-md);
    }
    h1 {
      font-size: var(--fz-xxl);
      margin: 0;
      margin-bottom: 10px;
    }
    h2 {
      font-size: var(--fz-lg);
      margin: 0;
    }
    ul {
      display: inline-block;
      margin-top: 10px;
    }
    li {
      font-size: var(--fz-md);
      margin: 0 auto;
      list-style-type: disc;
      list-style-position: inside;
      text-align: left;
      span:last-of-type {
        float: right;
        margin-left: 15px;
      }
    }
  }
  .image-container {
    box-sizing: border-box;
    padding: 10px;

    img {
      display: block;
      width: 100%;
      max-width: 150px;
      margin: 0 auto;
      object-fit: contain;
    }
  }

  a {
    ${({ theme }) => theme.mixins.smallBtnPrimary}
    ${({ theme }) => theme.mixins.boxShadow}
    margin-top: 10px;
    :hover {
      ${({ theme }) => theme.mixins.boxShadowHover}
      opacity: 0.9;
      transform: scale(1.03);
    }
  }
`

export const Informations = () => {
  const revealTitle = useRef(null)
  const revealCards = useRef([])

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig())
    revealCards.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(500 + i * 100, 0.25))
    )
  }, [])
  return (
    <>
      <StyledSection id="infos">
        <h1 ref={revealTitle}>Informations</h1>
        <div className="container">
          <StyledCard ref={card => (revealCards.current[0] = card)}>
            <div className="image-container">
              <img src={localisation} alt="localisation" />
            </div>
            <div className="card-text">
              <h1>Informations d'accès</h1>
              <div>
                <h2>Adresse:</h2>
                <p>12 Pl. de L’europe</p>
                <p> 35530, Noyal-sur-Vilaine</p>
              </div>

              <div>
                <h2>Informations pratiques:</h2>
                <ul>
                  <li>15 minutes de Rennes</li>
                  <li>Rez-de-chaussée</li>
                  <li>Accès handicapé </li>
                  <li>Parking gratuit</li>
                </ul>
              </div>
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    title="carte accès"
                    width="200"
                    height="200"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=thomas%20portier&t=&z=9&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </StyledCard>
          <StyledCard ref={card => (revealCards.current[1] = card)}>
            <div className="image-container">
              <img src={contact} alt="contact" />
            </div>
            <div className="card-text">
              <h1>Horaires et contacts</h1>
              <div>
                <h2>Secrétariat téléphonique:</h2>
                <p>06 37 12 04 85</p>
              </div>
              <div>
                <h2>Réservation en ligne:</h2>
                <a
                  href="https://www.doctolib.fr/osteopathe/noyal-sur-vilaine/thomas-portier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  role="button"
                >
                  Réservez en ligne
                </a>
              </div>
              <div>
                <h2>Horaires d'ouverture du secrétariat:</h2>
                <ul>
                  <li>
                    <span>Lundi:</span> <span>9h - 19h</span>
                  </li>
                  <li>
                    <span>Mardi:</span> <span>9h - 19h</span>
                  </li>
                  <li>
                    <span>Mercredi:</span> <span>9h - 19h</span>
                  </li>
                  <li>
                    <span>Jeudi:</span> <span>9h - 19h</span>
                  </li>
                  <li>
                    <span>Vendredi:</span> <span>9h - 19h</span>
                  </li>
                </ul>
              </div>
            </div>
          </StyledCard>
          <StyledCard ref={card => (revealCards.current[2] = card)}>
            <div className="image-container">
              <img src={paiement} alt="paiement" />
            </div>
            <div className="card-text">
              <h1>Tarifs et moyens de paiements</h1>
              <div>
                <h2>Tarif consultation:</h2>
                <p>50 euros</p>
              </div>
              <div>
                <h2>Moyens de paiement et remboursement:</h2>
                <ul>
                  <li>Chèques et espèces </li>
                  <li>Factures disponibles</li>
                  <li>Cartes bancaires non acceptées </li>
                  <li>Carte Vitale non acceptée</li>
                </ul>
              </div>
            </div>
          </StyledCard>
        </div>
      </StyledSection>
    </>
  )
}
