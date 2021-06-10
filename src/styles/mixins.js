import { css } from "styled-components"

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  btnWhite: css`
    padding: 6px 25px;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: var(--white);
    color: var(--primary);
    user-select: none;
  `,
  btnPrimary: css`
    padding: 6px 15px;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: var(--primary);
    color: var(--white);
    user-select: none;
  `,
  smallBtnPrimary: css`
    padding: 6px 15px;
    border: 1px solid transparent;
    font-size: var(--fz-sm);
    border-radius: 5px;
    background-color: var(--primary);
    color: var(--white);
    user-select: none;
  `,

  boxShadow: css`
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07), 0 0 26px 0 rgba(0, 0, 0, 0.1);
  `,
  boxShadowHover: css`
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
  `,
}

export default mixins
