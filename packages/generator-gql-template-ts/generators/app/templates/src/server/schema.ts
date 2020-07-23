import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

export const typeDefs = gql`
  type Query {
    hello: String!
  }
`;

export const TypeDefs = Symbol('TypeDefs');
export type TypeDefs = string | DocumentNode | DocumentNode[] | string[];
