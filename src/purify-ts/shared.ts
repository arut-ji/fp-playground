export type Config = {
  host: string;
  port: string;
};

export interface ConfigLoadError extends Error {}

export class SourceNotFound implements ConfigLoadError {
  name: string;
  message: string;

  constructor() {
    this.name = 'SourceNotFound';
    this.message = 'The source could not be found.';
  }
}
export class CannotParseConfigSource implements ConfigLoadError {
  name: string;
  message: string;

  constructor() {
    this.name = 'CannotParseConfigSource';
    this.message = 'The given source cannot be parsed into config.';
  }
}
