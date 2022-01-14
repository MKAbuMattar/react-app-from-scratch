const webpack = require('webpack')
const { merge } = require('webpack-merge')
const dotenv = require('dotenv')
const commonConfig = require('./webpack.common.js')

module.exports = (envVars) => {
  const envConfig = require(`./webpack.${envVars.env}.js`)

  const env = dotenv.config().parsed

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})

  const config = merge(
    {
      plugins: [new webpack.DefinePlugin(envKeys)],
    },
    commonConfig,
    envConfig,
  )

  return config
}
