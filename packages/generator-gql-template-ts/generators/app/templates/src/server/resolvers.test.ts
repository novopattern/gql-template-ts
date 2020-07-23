import { ApolloServer, gql } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';

describe('Query', () => {
  const setup = () => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    return createTestClient(server);
  };
  describe('hello', () => {
    it('returns successful response', async () => {
      expect.assertions(1);
      const HELLO = gql`
        query hello {
          hello
        }
      `;
      const { query } = setup();
      const res = await query({ query: HELLO });
      expect(res).toMatchInlineSnapshot(`
        Object {
          "data": Object {
            "hello": "Hello World",
          },
          "errors": undefined,
          "extensions": undefined,
          "http": Object {
            "headers": Headers {
              Symbol(map): Object {},
            },
          },
        }
      `);
    });
  });
});
