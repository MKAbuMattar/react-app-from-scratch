const webpack = require('webpack')
const { merge } = require('webpack-merge')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const commonConfig = require('./webpack.common.js')

module.exports = (envVars, env) => {
  const envConfig = require(`./webpack.${envVars.env}.js`)

  const config = merge(
    {
      plugins: [
        new webpack.DefinePlugin(
          Object.keys(dotenv.config().parsed).reduce((prev, next) => {
            prev[`process.env.${next}`] = JSON.stringify(
              dotenv.config().parsed[next],
            )
            return prev
          }, {}),
        ),
      ],
    },
    commonConfig,
    envConfig,
  )

  return config
}
