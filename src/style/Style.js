import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
  --font-family: 'Source Code Pro', monospace;
  --bg-color: rgba(37, 37, 37, 1.0);
  --font-color: rgba(238, 238, 238, 1.0);
}

html {
  font-size: 100%;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}

body {
  background: var(--bg-color);
  color: var(--font-color);
  font-family: var(--font-family);
}

`

export const Main = styled.main`
  display: grid;
  align-content: center;
  justify-items: center;
  height: 100vh;
`
