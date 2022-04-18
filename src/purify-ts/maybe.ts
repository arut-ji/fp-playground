import { Maybe, MaybeAsync } from 'purify-ts';

export type Config = {
  host: string;
  port: string;
};

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
