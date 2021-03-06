import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizelegibility;
  }

  body {
    background-color: var(--white);
    font-family: 'Roboto', sans-serif;
  }

  input.hide-clear[type=search]::-ms-clear,
  input.hide-clear[type=search]::-ms-reveal {
    display: none;
    height: 0;
    width: 0;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance:none;
  }

  img {
    border: 0;
    height: auto;
    max-width: 100%;
  }
`

export default GlobalStyle
