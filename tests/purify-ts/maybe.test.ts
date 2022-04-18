import { Maybe, MaybeAsync } from 'purify-ts';
import { getPort, getPortAsync } from '../../src/purify-ts/maybe';
import { Config } from '../../src/shared/model';

describe('getPort', () => {
  it('should return a correct port from config', () => {
    const fromConfig: () => Maybe<Config> = jest.fn(() =>
      Maybe.of<Config>({
        host: 'localhost',
        port: '9000'
      })
    );

    const port = getPort(fromConfig);
    expect(port).toBe(9000);
    expect(fromConfig).toBeCalled;
  });
});

describe('getPortAsync', () => {
  it('should return a correct from an async config source', () => {
    const fromConfig: () => MaybeAsync<Config> = jest.fn(() =>
      MaybeAsync.liftMaybe(
        Maybe.of<Config>({
          host: 'localhost',
          port: '9000'
        })
      )
    );

    getPortAsync(fromConfig).then((result) => {
      expect(result).toBe(9000);
      expect(fromConfig).toBeCalled;
    });
  });
});
