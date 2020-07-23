import { registry } from 'tsyringe';
import './server/di-registry';
import { createLogger, Logger } from './shared/logger';

@registry([{ token: Logger, useFactory: createLogger }])
export class DIRegistry {}
