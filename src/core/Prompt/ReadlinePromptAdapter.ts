import * as RL from 'readline';
import { IPromptAdapter, IPromptAdapterOptions, noopFn } from './models';

export class ReadlinePromptAdapter implements IPromptAdapter {
  private readonly readline = RL.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  query(query: string, nextQuestion: (answer: string) => void, options: IPromptAdapterOptions): void {
    this.readline.question(query, (answer: string) => {
      if (options.closeAfterQuery || nextQuestion === noopFn) {
        return void this.close();
      }

      nextQuestion.call(this, answer);
    });
  }

  resume(): this {
    throw new Error('Method not implemented.');
  }
  pause(): this {
    throw new Error('Method not implemented.');
  }

  close(): void {
    this.readline.close();
  }
}
