import { Either } from 'purify-ts/Either';
import { Config, ConfigLoadError } from './shared';

export const getPort = (fromConfig: () => Either<ConfigLoadError, Config>) =>
  fromConfig()
    .map((config) => config.port)
    .map(parseInt);
