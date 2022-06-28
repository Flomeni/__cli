import { CliMessageFactory } from '../utils/CliMessageFactory';
import { Parser } from './Parser';
import { Prompt } from './Prompt/Prompt';
import { ReadlinePromptAdapter } from './Prompt/ReadlinePromptAdapter';

export class Cli {
    private readonly massageFactory: CliMessageFactory = new CliMessageFactory();
    private readonly prompt: Prompt = new Prompt(new ReadlinePromptAdapter());
    private readonly parser: Parser = new Parser();

    public run(argv: string[]): void {
        if (!argv?.length) {
            return void this.massageFactory.showHelloMessageIfNoArgs();
        }
        /* 
            1. Parse args into Tree
            2. Analyze whether we have a proper args in the dynamic args schemas
        */
        this.prompt
        .query('What Schema would you like to use \n', (schema: string) => {
            // todo: find searched shema
            const schemas: any[] = [];
            const schemaFound = schemas.find((sschema) => schema === sschema);
            console.log(schema);

            if (schemaFound) {
                this.prompt.query('next question', undefined, Prompt.Options.NoAbortClose);
            }
            // what needs to be prompted if no schema for provided name were found
        }, Prompt.Options.NoAbortNoClose);

        console.log('argv: ', argv);
    }
}
