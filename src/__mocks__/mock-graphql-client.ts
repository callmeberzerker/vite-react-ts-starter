import { Client } from 'urql'
import { fromValue, never } from 'wonka'

export const mockGraphQLClient = (response: unknown): Client =>
  ({
    executeQuery: jest.fn(() => fromValue(response)),
    executeMutation: jest.fn(() => never),
    executeSubscription: jest.fn(() => never),
  } as unknown as Client)
