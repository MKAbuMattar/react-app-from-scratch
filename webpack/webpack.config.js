const webpack = require('webpack')
const { merge } = require('webpack-merge')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const commonConfig = require('./webpack.common.js')

module.exports = (envVars, env) => {
  const envConfig = require(`./webpack.${envVars.env}.js`)

  const currentPath = path.join(__dirname, '..')

  const basePath = currentPath + '/.env'

  const envPath = basePath + '.' + env.ENVIRONMENT

  const finalPath = fs.existsSync(envPath) ? envPath : basePath

  const fileEnv = dotenv.config({ path: finalPath }).parsed

  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next])
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
