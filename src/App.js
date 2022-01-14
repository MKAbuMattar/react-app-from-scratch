import React, { Fragment } from 'react'

import { Main } from './style/Style'

import Logo from './logo.svg'

const App = () => {
  return (
    <Fragment>
      <Main>
        {/* {console.log(process.env.WORK_ENV)} */}
        <img src={Logo} alt="React Logo" />
        <h1>Mohammad Abu Mattar</h1>
      </Main>
    </Fragment>
  )
}

export default App
