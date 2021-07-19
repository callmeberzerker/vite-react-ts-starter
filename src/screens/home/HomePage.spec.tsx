import { render, screen } from '@testing-library/react'
import { HomePage } from 'src/screens/home/HomePage'
import { mockGraphQLClient } from 'src/__mocks__/mock-graphql-client'
import { Client, Provider } from 'urql'

describe('HomePage', () => {
  let mockClient = {} as Client

  // jest will reset mocks after each test - that's why we re-initialize the mock client
  // see `jest.config.js` -> `resetMocks` configuration property
  beforeEach(() => {
    mockClient = mockGraphQLClient({
      data: {
        todo: [
          { id: 1, description: 'Post title 1', done: false },
          { id: 3, description: 'Post title 2', content: true },
        ],
      },
    })
  })
  it('should render a list of todos', () => {
    const { container } = render(
      <Provider value={mockClient}>
        <HomePage />
      </Provider>,
    )
    const firstTodo = screen.getByText('Post title 1')
    const secondTodo = screen.getByText('Post title 2')

    expect(mockClient.executeQuery).toBeCalledTimes(1)
    expect(container).toContainElement(firstTodo)
    expect(container).toContainElement(secondTodo)
  })
})
