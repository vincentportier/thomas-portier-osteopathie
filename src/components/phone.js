import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { IconPhone } from "./icons/phone"

const StyledPhone = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #0344a6;
  fill: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-size: var(--fz-sm);
  height: 60px;
  font-weight: bold;
  width: ${({ showNumber }) => (showNumber ? "auto" : "60px")};
  border-radius: 50px;
  padding: ${({ showNumber }) => (showNumber ? "5px 30px" : "10px")};
  transition: all 500ms ease;
  cursor: pointer;
  svg {
    display: block;
    width: 20px;
  }

  @media (max-width: 780px) {
    height: 40px;
    font-size: var(--fz-xs);
    width: ${({ showNumber }) => (showNumber ? "auto" : "40px")};
    svg {
      width: 15px;
    }
  }
`

export const Phone = () => {
  const [showNumber, setShowNumber] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 1500)
    return () => clearTimeout()
  }, [])
  return (
    <>
      {isMounted && (
        <StyledPhone
          onMouseEnter={() => setShowNumber(true)}
          onMouseLeave={() => setShowNumber(false)}
          showNumber={showNumber}
          role="button"
          aria-label="call"
        >
          {!showNumber ? (
            <p>
              <IconPhone />
            </p>
          ) : (
            <a href="tel:0637120485">06 37 12 04 85</a>
          )}
        </StyledPhone>
      )}
    </>
  )
}
