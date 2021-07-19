const dotenv = require('dotenv')
const path = require('path')
const projectRootDir = path.resolve(__dirname)

const dotenvPath = path.format({ dir: projectRootDir, base: '.env.local' })
dotenv.config({ path: dotenvPath })

module.exports = {
  schema: {
    [process.env.VITE_HASURA_ENDPOINT]: {
      headers: {
        'x-hasura-admin-secret': process.env.VITE_HASURA_ADMIN_PASSWORD,
      },
    },
  },
  extensions: {
    endpoints: {
      default: {
        url: process.env.VITE_HASURA_ENDPOINT,
        headers: { 'x-hasura-admin-secret': process.env.VITE_HASURA_ADMIN_PASSWORD },
      },
    },
  },
}
