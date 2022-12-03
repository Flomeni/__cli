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
        const argsArray = args.slice();
        const getCurrentArg = () => argsArray[pointer];
        const getNextArg = () => argsArray[pointer++];

        const argsTuple: string[][] = [];
        do {
            const isCliArg = this.config.isCLIArgument(getCurrentArg());
            const tuple = [];

            if (isCliArg) {
                tuple.push(getCurrentArg(), getNextArg());
            }

            argsTuple.push(tuple);
        } while (getNextArg());

        console.log(argsTuple);
    }
}
