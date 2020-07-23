import 'reflect-metadata';
import './di-registry';
import { Server } from './server/server';

const port = Number(process.env.PORT) || 4000;

const server = new Server();

server.start({ port });
