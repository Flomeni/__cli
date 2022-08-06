import { InteractiveParser } from './InteractiveParser';
import { IInteractiveParser } from './IInteractiveParser';
import { StaticConfig } from '../../config/StaticConfig';
              
export default class Parser {
    private readonly config: StaticConfig = new StaticConfig();
    private readonly interactiveModule: IInteractiveParser = new InteractiveParser();

    constructor() {}

    public parse(args: string[]): any {
        console.log('Parser::parse.args: ', args);
        // todo: add possibility to read interactive from args list
        if (this.config.isInteractive()) {
            return this.interactiveModule.parse(args);
        }

        let pointer = 0;
        const getCurrentArg = () => args[pointer];
        const getNextArg = () => args[pointer++];

        do {
            
        } while (getNextArg());
    }
}
