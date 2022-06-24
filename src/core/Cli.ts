import { CliMessageFactory } from '../utils/CliMessageFactory';
import { env, argv } from 'process';

export class Cli {
    private readonly massageFactory: CliMessageFactory = new CliMessageFactory();
    private readonly args: string[] = argv.slice(2);

    public run(): void {
        if (!this.args.length) {
            return void this.massageFactory.showHelloMessage();
        }
    }
}
