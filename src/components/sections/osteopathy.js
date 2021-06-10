import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import ScrollReveal from "scrollreveal"
import { srConfig } from "../../config"

const StyledOsteopathy = styled.section`
  .container {
    max-width: 1600px;

    h1 {
      font-size: var(--fz-heading);
      margin-bottom: 25px;
    }
    p {
      font-size: var(--fz-lg);
      line-height: 1.6rem;
    }

    padding: 100px 150px;

    @media (max-width: 1080px) {
      padding: 75px 100px;
      h1 {
        font-size: var(--fz-xxl);
      }
      p {
        font-size: var(--fz-md);
      }
    }
    @media (max-width: 768px) {
      padding: 75px 50px;
      h1 {
        font-size: var(--fz-xxl);
      }
      p {
        font-size: var(--fz-sm);
      }
    }
    @media (max-width: 480px) {
      padding: 50px 25px;
      h1 {
        font-size: var(--fz-lg);
      }
      p {
        font-size: var(--fz-xs);
      }
    }
  }
`

export const Osteopathy = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    ScrollReveal().reveal(sectionRef.current, srConfig())
  }, [])

  return (
    <>
      <StyledOsteopathy id="osteo">
        <div className="container" ref={sectionRef}>
          <h1>L'Ostéopathie</h1>
          <p>
            L’ostéopathie est une approche thérapeutique manuelle douce qui se
            fonde sur une vision globale de la structure du corps humain.
            L’ostéopathe va pratiquer des manipulations manuelles du système
            musculo-squelettique et utiliser des techniques de relâchement
            myofascial afin de soulager les tensions, les déséquilibres et les
            douleurs. Par exemple l’ostéopathe peut soigner les maux de dos, les
            entorses, le stress, les règles douloureuses ou encore les
            migraines. L’ostéopathie est à visée préventive et curative. Un
            ostéopathe peut recevoir différents types de patients : des
            nourrissons, des enfants, des sportifs, des femmes enceintes ou
            encore des seniors.
          </p>
        </div>
      </StyledOsteopathy>
    </>
  )
}
