import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import sr from "../../utils/sr"
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
      margin-bottom: 15px;
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
    sr.reveal(sectionRef.current, srConfig())
  }, [])

  return (
    <>
      <StyledOsteopathy id="osteo">
        <div className="container" ref={sectionRef}>
          <h1>L'ostéopathie</h1>
          <p>
            L’ostéopathie est une approche thérapeutique manuelle douce qui se
            fonde sur une vision globale de la structure du corps humain.
          </p>
          <p>
            Je pratique des manipulations manuelles du système
            musculo-squelettique et utilise des techniques de relâchement
            myofascial afin de soulager les tensions, les déséquilibres et les
            douleurs.
          </p>
          <p>
            L’ostéopathie est à visée préventive et curative. Par exemple, je
            peux prendre en charge les maux de dos, les entorses, le stress, les
            règles douloureuses ou encore les migraines.
          </p>
          <p>
            Je peux recevoir différents types de patients : des nourrissons, des
            enfants, des sportifs, des femmes enceintes ou encore des seniors.
          </p>
        </div>
      </StyledOsteopathy>
    </>
  )
}
