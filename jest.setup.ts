// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
// jest doesn't run in a browser we don't have fetch 🤡
import 'isomorphic-unfetch'

process.env.VITE_HASURA_ADMIN_PASSWORD = 'JEST_HASURA_ADMIN_PASSWORD'
process.env.VITE_HASURA_ENDPOINT = 'JEST_HASURA_ENDPOINT'
