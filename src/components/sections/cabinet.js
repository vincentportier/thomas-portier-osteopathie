import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const StyledCabinet = styled.section`
  .container {
    h1 {
      text-align: center;
    }
    .cabinet-image-grid {
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 20px;
      @media (max-width: 780px) {
        grid-template-columns: 1fr;
      }
    }
  }
`

export const Cabinet = () => {
  return (
    <>
      <StyledCabinet id="cabinet">
        <div className="container">
          <h1>Le cabinet</h1>
          <div className="cabinet-image-grid">
            <StaticImage
              src="../../images/cabinet1.jpeg"
              alt="cabinet osteopathe"
            />
          </div>
        </div>
      </StyledCabinet>
    </>
  )
}
