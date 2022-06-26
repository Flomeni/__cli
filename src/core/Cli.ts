import { CliMessageFactory } from '../utils/CliMessageFactory';
import { PromptAdapter } from './PromptAdapter';

export class Cli {
    private readonly massageFactory: CliMessageFactory = new CliMessageFactory();
    private readonly prompt: PromptAdapter = new PromptAdapter();

    public run(argv: string[]): void {
        if (!argv?.length) {
            return void this.massageFactory.showHelloMessage();
        }
        /* 
            1. Parse args into Tree
            2. Analyze whether we have a proper args in the dynamic args schemas
        */
        this.prompt
        .question('What Schema would you like to use \n', (schema: string) => {
            // todo: find searched shema
            const schemas: any[] = [];
            const schemaFound = schemas.find((sschema) => schema === sschema);
            console.log(schema);

            if (schemaFound) {
                this.prompt.question('next question');
            }
            // what needs to be prompted if no schema for provided name were found
        });

        console.log('argv: ', argv);
    }
}
