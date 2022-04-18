import { Maybe, MaybeAsync } from 'purify-ts';
import { Config } from '../shared/model';

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
