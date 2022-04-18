import * as O from 'fp-ts/Option';
import { getPort } from '../../src/fp-ts/option';
import { Config } from '../../src/shared/model';

describe('getPort', () => {
  it('should return a correct port from config', () => {
    const fromConfig: () => O.Option<Config> = jest.fn(() =>
      O.of<Config>({
        host: 'localhost',
        port: '9000'
      })
    );

    const port = getPort(fromConfig);
    expect(port).toBe(9000);
    expect(fromConfig).toBeCalled;
  });
});
