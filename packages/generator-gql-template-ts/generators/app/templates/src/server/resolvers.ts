import { IResolvers } from 'apollo-server';

export const resolvers: Resolvers = [
  {
    Query: {
      hello() {
        return 'Hello World';
      },
    },
  },
];

export const Resolvers = Symbol('Resolvers');

export type Resolvers = IResolvers<any, any> | IResolvers<any, any>[];
