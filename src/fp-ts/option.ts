import { identity, pipe } from 'fp-ts/lib/function';
import * as O from 'fp-ts/Option';
import { constant } from 'fp-ts/function';
import { Config } from '../purify-ts/shared';

export const getPort = (fromConfig: () => O.Option<Config>): number =>
  pipe(
    fromConfig(),
    O.map((config) => config.port),
    O.map(parseInt),
    O.fold(constant<number>(8080), identity)
  );
