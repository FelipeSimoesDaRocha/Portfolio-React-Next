
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import "Fonts/Spaece-Grotesk.css";

html,
body {
  padding: 0;
  margin: 0;
  background-color: #646464;
  font-family: "Space Grotesk", sans-serif;
  -webkit-font-smoothing: subpixel-antialiased;
  font-feature-settings: "case" 1, "cpsp" 1, "dlig" 1, "cv01" 1, "cv02", "cv03" 1, "cv04" 1;
  font-variation-settings: "wght" 450;
  font-variant: common-ligatures contextual;
  letter-spacing: -0.02em;
}

a {
  color: inherit;
  text-decoration: none;
}

@media screen and (min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx) {
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

* {
  box-sizing: border-box;
}

::selection {
  background-color: transparent;
  color: #11a36a;
  text-shadow: 2px 2px #000;
}

::-webkit-scrollbar {
  width: 0.5svw;
  background: #777;
}

::-webkit-scrollbar-thumb {
  background: -webkit-gradient(transparent, #11a36a);
  background: linear-gradient(transparent, #11a36a);
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background: -webkit-gradient(transparent, #113188);
  background: linear-gradient(transparent, #390faa);
}
`

export default GlobalStyle