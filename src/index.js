import React, { Fragment, StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style/normalize.css'
import { GlobalStyle } from './style/Style'

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
