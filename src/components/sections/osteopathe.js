import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import ScrollReveal from "scrollreveal"
import { srConfig } from "../../config"

const StyledOsteopathe = styled.section`
  .container {
    display: grid;
    grid-template-columns: 40% 1fr;
    column-gap: 75px;

    .osteopathe-image {
      overflow: hidden;

      img {
        display: block;
        object-fit: cover;
      }
    }
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
      .osteopathe-image {
        grid-row-start: 2;
        max-width: 75%;
        margin: 50px auto;
      }
    }
  }
`

export const Osteopathe = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    ScrollReveal().reveal(sectionRef.current, srConfig())
  }, [])

  return (
    <StyledOsteopathe id="praticien">
      <div className="container" ref={sectionRef}>
        <div className="osteopathe-image">
          <StaticImage src="../../images/avatar.jpg" alt="avatar" />
        </div>
        <div className="osteopathe-text">
          <h1>Le praticien</h1>
          <p>
            Titulaire d'un diplôme d'ostéopathe depuis 2013 après un cursus de 5
            ans dans une école agréée par le ministère de la santé, j'exerce à
            Noyal sur Vilaine à 15 minutes de Rennes depuis 2007. Je suis formé
            en Ostéopathie viscérale et crânienne, aux différentes techniques
            structurelles ainsi qu'à une prise en charge tissulaire des
            restrictions de mobilités. Ma pratique se veut la plus globale
            possible et s'adapte aux différentes pertes de mouvements de votre
            corps dans le but de restituer un équilibre de fonctionnement.
          </p>
        </div>
      </div>
    </StyledOsteopathe>
  )
}
