import { Either, Left } from 'purify-ts/Either';
import { getPort } from '../../src/purify-ts/either';
import {
  Config,
  ConfigLoadError,
  SourceNotFound
} from '../../src/purify-ts/shared';

describe('getPort', () => {
  it('should return a correct port from config', () => {
    const fromConfig: () => Either<ConfigLoadError, Config> = jest.fn(() => {
      return Either.of<ConfigLoadError, Config>({
        host: 'localhost',
        port: '9000'
      });
    });

    const port = getPort(fromConfig).orDefault(1);
    expect(port).toBe(9000);
    expect(fromConfig).toHaveBeenCalledTimes(1);
  });

  it('should wrap an error within the Left projection of Either', () => {
    const fromConfig: () => Either<ConfigLoadError, Config> = jest.fn(() => {
      return Left<ConfigLoadError>(new SourceNotFound());
    });

    expect(getPort(fromConfig)).toStrictEqual(
      Left<ConfigLoadError>(new SourceNotFound())
    );
    expect(fromConfig).toHaveBeenCalledTimes(1);
  });
});
