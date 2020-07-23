import winston from 'winston';
import { FactoryFunction } from 'tsyringe';

export const createLogger: FactoryFunction<winston.Logger> = () => {
  const level = process.env.LOG_LEVEL || 'info';
  return winston.createLogger({
    level,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    transports: [new winston.transports.Console()],
  });
};

export const Logger = Symbol('Logger');
export type Logger = winston.Logger;
