import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-size: 112.5%;
  font-family: sans-serif;
  background-color: turquoise;
}

input,
button {
  font-size: inherit;
  padding: 5px;
}
`
