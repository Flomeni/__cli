import * as RL from 'readline';
import { PropmptQuestion } from './models/PromptAdapter.models';

export class PromptAdapter {
    private readonly readline = RL.createInterface({
        input: process.stdin,
        output: process.stdout
      });

    public question(question: string, nextQuestion?: PropmptQuestion): void {
      this.readline.question(question, (answer: string) => {
        if (nextQuestion) {
          return void nextQuestion.call(this, answer);
        }

        this.close();
      });
    }

    public close(): void {
      this.readline.close();
    }
}
