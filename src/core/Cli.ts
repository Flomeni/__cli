import { CliMessageFactory } from '../utils/CliMessageFactory';
import { Parser } from './Parser';
import { Prompt, ReadlinePromptAdapter } from './prompt';

export class Cli {
    private readonly massageFactory: CliMessageFactory = new CliMessageFactory();
    private readonly prompt: Prompt = new Prompt(new ReadlinePromptAdapter());
    private readonly parser: Parser = new Parser();

    public run(argv: string[]): void {
        if (!argv?.length) {
            return void this.massageFactory.showHelloMessageIfNoArgs();
        }
        /*
            1. Parse args into Tree with Parser
            2. Analyze whether we have a proper args set to fetch proper config using Analyzer
            3. If we dont have proper schema, but user input values, that are close to the accetpable args set,
             show its array
             4. If we dont have proper schema and args are out of the tree, return list of schemas to use
             5. If we have correct schema, fetch it.
             6. Invoke schema's executor file with Generator  (show how would it looked like in virtual system)
        */
        /* this.prompt
        .query('What Schema would you like to use \n', (schema: string) => {
            // todo: find searched shema
            const schemas: any[] = [];
            const schemaFound = schemas.find((sschema) => schema === sschema);
            console.log(schema);

            if (schemaFound) {
                this.prompt.query('next question', undefined, Prompt.Options.NoAbortClose);
            }
            // what needs to be prompted if no schema for provided name were found
        }, Prompt.Options.NoAbortNoClose); */
        this.parser.parse(argv);
    }
}
