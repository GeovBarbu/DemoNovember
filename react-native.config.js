const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

const BASE_DIRECTORY = __dirname

const CONFIG_FILE = path.join(BASE_DIRECTORY, 'config.json')

const ENVIRONMENT = process.env.RN_ENV || 'dev'

const envFiles = fs
  .readdirSync(`${BASE_DIRECTORY}/env`)
  .filter(v => v.startsWith('.env'))

const selectedEnvFile =
  ENVIRONMENT === 'dev'
    ? '.env'
    : envFiles.find(v => v.startsWith(`.env.${ENVIRONMENT}`)) || ''

const baseConfig = getConfig(selectedEnvFile)

const config = {...baseConfig}

fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, 0, 2))

function getConfig(file) {
  const location = path.join(`${BASE_DIRECTORY}/env`, file)
  if (fs.existsSync(location)) {
    return dotenv.config({path: location}).parsed
  }
  return {}
}

module.exports = {
  project: {
    ios: {},
    android: {} // grouped into "project"
  },
  assets: ['./src/assets/fonts/'] // stays the same
}
