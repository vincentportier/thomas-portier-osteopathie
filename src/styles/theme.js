import mixins from "./mixins"
import { css } from "styled-components"

const theme = {
  mixins,
  colors: css`
    --black: #2b2b2b;
    --white: #ffffff;
    --primary: #0696de;
    --danger: #fe5b5b;
    --grey: #4a4a4a;
    --light-grey: #767676;
  `,
}

export default theme
