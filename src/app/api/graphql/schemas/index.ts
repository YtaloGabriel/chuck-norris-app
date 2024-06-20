import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type ChuckNorrisFact {
    id: String!
    icon_url: String!
    url: String!
    value: String!
  }

  type Query {
    getRandomFact: ChuckNorrisFact
  }
`
