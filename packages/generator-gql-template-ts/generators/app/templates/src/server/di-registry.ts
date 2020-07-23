import { registry } from 'tsyringe';
import { TypeDefs, typeDefs } from './schema';
import { Resolvers, resolvers } from './resolvers';

@registry([
  { token: TypeDefs, useValue: typeDefs },
  { token: Resolvers, useValue: resolvers },
])
export class ServerRegistry {}
