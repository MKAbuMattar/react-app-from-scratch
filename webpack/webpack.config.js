const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = (envVars, env) => {
  const envConfig = require(`./webpack.${envVars.env}.js`)

  const config = merge(commonConfig, envConfig)

  return config
}
