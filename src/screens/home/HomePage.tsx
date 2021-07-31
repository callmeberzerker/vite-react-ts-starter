import type { ReactElement } from 'react'
import { Query_Root } from 'src/@types/gen/graphql'
import styled from 'styled-components/macro'
import { gql, useQuery } from 'urql'

const Header = styled.h1``

const TodoFrag = gql`
  fragment TodoShared on todo {
    id
    description
    done
  }
`

const fetchTodos = gql`
  query MyQuery {
    todo {
      id
      ...TodoShared
    }
  }
  ${TodoFrag}
`

export const HomePage = (): ReactElement => {
  const [{ data }] = useQuery<{ todo: Query_Root['todo'] }>({ query: fetchTodos })
  return (
    <div>
      <Header>Welcome to my home page</Header>
      <p>Home Page</p>
      <ul>{data && data.todo.map((todo, i) => <li key={i}>{todo.description}</li>)}</ul>
    </div>
  )
}
