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
      height: 100%;
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
              <h1>Informations d'acc??s</h1>
              <div>
                <h2>Adresse:</h2>
                <p>12 Pl. de l???Europe</p>
                <p> 35530, Noyal-sur-Vilaine</p>
              </div>

              <div>
                <h2>Informations pratiques:</h2>
                <ul>
                  <li>15 minutes de Rennes</li>
                  <li>Rez-de-chauss??e</li>
                  <li>Acc??s PMR</li>
                  <li>Parking gratuit</li>
                </ul>
              </div>
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85238.95300380372!2d-1.625223566629376!3d48.115689290547955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ed9d5ecf4cf69%3A0xa49302c302b9c73d!2sPORTIER%20Thomas!5e0!3m2!1sfr!2sfr!4v1623925594340!5m2!1sfr!2sfr"
                    width="200"
                    height="200"
                    frameBorder="0"
                    allowfullscreen=""
                    loading="lazy"
                    title="carte acc??s"
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
                <h2>Secr??tariat t??l??phonique:</h2>
                <p>06 37 12 04 85</p>
              </div>
              <div>
                <h2>R??servation en ligne:</h2>
                <a
                  href="https://www.doctolib.fr/osteopathe/noyal-sur-vilaine/thomas-portier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  role="button"
                >
                  R??servez en ligne
                </a>
              </div>
              <div>
                <h2>Horaires d'ouverture du secr??tariat:</h2>
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
                  <li>Ch??ques et esp??ces </li>
                  <li>Factures disponibles</li>
                  <li>Cartes bancaires non accept??es </li>
                  <li>Carte Vitale non accept??e</li>
                </ul>
              </div>
            </div>
          </StyledCard>
        </div>
      </StyledSection>
    </>
  )
}
