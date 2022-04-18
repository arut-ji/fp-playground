import { Maybe, MaybeAsync, NonEmptyList } from 'purify-ts';
import { Config } from './shared';

export const getPort = (fromConfig: () => Maybe<Config>): number =>
  fromConfig()
    .map((config) => config.port)
    .map(parseInt)
    .orDefault(8080);

export const getPortAsync = (
  fromConfig: () => MaybeAsync<Config>
): Promise<number> =>
  fromConfig()
    .map((config) => config.port)
    .map(parseInt)
    .orDefault(8080);
