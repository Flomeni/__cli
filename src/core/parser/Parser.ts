import { InteractiveParser } from './InteractiveParser';
import { IStaticConfig, IStaticConfigArg } from '../../config/IStaticConfig.models';
              
export default class Parser {
    private readonly config: IStaticConfig;
    private readonly interactiveModule: IInteractiveParser = new InteractiveParser();
    private readonly configArgumentsLookup: Map<string, IStaticConfigArg>;

    constructor() {
        this.config = { ...json } as any;
        this.configArgumentsLookup = this.createArgumentsLookup(this.config);
    }

    public parse(args: string[]): any {
        console.log('Parser::parse.args: ', args);
        // todo: add possibility to read interactive from args list
        if (this.isInteractive()) {
            return this.interactiveModule.parse(args);
        }

        let pointer = 0;
        const getCurrentArg = () => args[pointer];
        const getNextArg = () => args[pointer++];

        do {
            
        } while (getNextArg());
    }

    private isInteractive(): boolean {
        return this.getStaticArgValue(this.config, 'interactive')
    }
}
