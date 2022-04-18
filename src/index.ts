import { GreetingWordGenerator } from "./greeting-generator"

export class GreeterService {

  private greetingWordGenerator: GreetingWordGenerator

  constructor(params: { greetingWordGenerator: GreetingWordGenerator }) { 
    this.greetingWordGenerator = params.greetingWordGenerator
  }

  async greet(thing: string): Promise<string> {
    const greetingWord = await this.greetingWordGenerator.getWord()
    return `${greetingWord} ${thing}`
  }
}
