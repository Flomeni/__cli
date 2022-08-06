import { IStaticConfigJSON, IStaticConfigArg, IStaticConfigArgumentsLookup, IStaticConfigArgNameAliasesLookup } from 'src/config/IStaticConfig.models';
import json from './config.json';

export class StaticConfig {
    public static readonly configArgumentsLookup: IStaticConfigArgumentsLookup = new Map();
    public static readonly argNameAliasesLookup: IStaticConfigArgNameAliasesLookup = new Map();
    public static readonly configJSON: IStaticConfigJSON = { ...json } as any;

    constructor() {
        const json_m = { ...json } as any;
        this.createArgumentAndArgNameAliaseLookups(json_m);
    }

    public getArgValue(argName: string): boolean {
        return Boolean(this.findArgByName(argName).value);
    }
    
    public hasArgument(argName: string): boolean {
        return StaticConfig.configArgumentsLookup.has(argName);
    }

    public findArgByName(argName: string): IStaticConfigArg {
        const argFound = StaticConfig.configArgumentsLookup.get(argName.toLocaleLowerCase());
        if (!argFound) {
            throw new Error(`[FindArgument Error] Argument ${argName} doesnt exist.`);
        }

        return argFound;
    }

    public isSchemaArg(argName: string): boolean {
        return !!StaticConfig.configJSON.args.find((arg: IStaticConfigArg) => {
            return arg.alias.includes(argName.toLowerCase());
        });
    }

    private createArgumentAndArgNameAliaseLookups(config: IStaticConfigJSON): void {
        config.args.forEach((arg: IStaticConfigArg) => {
            StaticConfig.configArgumentsLookup.set(arg.name.toLocaleLowerCase(), arg);
            StaticConfig.argNameAliasesLookup.set(arg.name.toLocaleLowerCase(), new Set(arg.alias));
        });
    }
}
