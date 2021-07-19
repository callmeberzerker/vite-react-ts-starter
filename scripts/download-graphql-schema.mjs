import dotenv from 'dotenv'
import { writeFileSync } from 'fs'
import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql'
import fetch from 'node-fetch'
import { dirname, format, join } from 'path'
import { fileURLToPath } from 'url'

// current file is in <root>/scripts
const currentFile = fileURLToPath(import.meta.url)

// get the absolute path to <root>/scripts
const scriptsFolder = dirname(currentFile)

// get back one level to get to the project root dir
const projectRootDir = join(scriptsFolder, '..')

const dotenvPath = format({ dir: projectRootDir, base: '.env.local' })
dotenv.config({ path: dotenvPath })

const SCHEMA_FILE_NAME = 'schema.graphql'
const HASURA_ENDPOINT = process.env.VITE_HASURA_ENDPOINT
const HASURA_ADMIN_PASSWORD = process.env.VITE_HASURA_ADMIN_PASSWORD

const response = await fetch(HASURA_ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'x-hasura-admin-secret': HASURA_ADMIN_PASSWORD },
  body: JSON.stringify({ query: getIntrospectionQuery() }),
})
const graphqlSchemaObj = buildClientSchema((await response.json()).data)
const sdlString = printSchema(graphqlSchemaObj)

const finalDestination = format({ dir: projectRootDir, base: SCHEMA_FILE_NAME })
writeFileSync(finalDestination, sdlString)
