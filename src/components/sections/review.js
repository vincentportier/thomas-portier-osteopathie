import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const ReviewSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .review-image {
    max-width: 400px;
  }
  .review-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  a {
    ${({ theme }) => theme.mixins.btnPrimary}
  }
`
export const Review = () => {
  return (
    <ReviewSection>
      <div className="review-image">
        <StaticImage src="../../images/review.png" alt="reviews" />
      </div>
      <div className="review-text">
        <h1>Votre avis m'intéresse!</h1>
        {/* <a href="#" role="button" target="_blank" rel="noopener noreferrer">
          Laissez moi votre avis
        </a> */}
      </div>
    </ReviewSection>
  )
}
