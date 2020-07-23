import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import { autoInjectable, inject } from 'tsyringe';
import { Logger } from '../shared/logger';
import { Resolvers } from './resolvers';
import { TypeDefs } from './schema';

@autoInjectable()
export class Server {
  private apollo: ApolloServer;
  private app: express.Express;
  private httpServer: http.Server;

  constructor(
    @inject(TypeDefs)  typeDefs?: TypeDefs,
    @inject(Resolvers)  resolvers?: Resolvers,
    @inject(Logger) private logger?: Logger,
  ) {
    this.apollo = new ApolloServer({
      typeDefs,
      resolvers,
      context: async ({ req }) => {
        try {
          const bearerToken = req.headers.authorization;
          const token = bearerToken.split(' ')[1];

          // try to retrieve a user with the token
          // const user = await auhService.getUser(token);

          // add the user to the context
          // return { user };
          return {};
        } catch (err) {
          logger.warn('Could not get auth data.');
        }
      },

      playground: true,
      introspection: true,
    });

    this.app = express();
    this.app.use(morgan('combined'));
    this.apollo.applyMiddleware({ app: this.app });
  }

  start({ port, host }: { port?: number; host?: string } = {}) {
    const options = {
      port: port ?? 4000,
      host: host ?? '0.0.0.0',
    };
    this.httpServer = http.createServer(this.app);
    this.httpServer.listen(options, () => {
      this.logger.info(
        `🚀 Server ready at http://${options.host}:${options.port}${this.apollo.graphqlPath}`
      );
    });
  }
}

