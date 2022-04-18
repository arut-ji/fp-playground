export interface GreetingWordGenerator {
  getWord(): Promise<string>;
}
