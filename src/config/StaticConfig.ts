import * as StaticConfigs from 'src/config/IStaticConfig.models';
import { Config, ConfigName } from './Config';

export class StaticConfig {
    public static readonly configArgumentsLookup: StaticConfigs.IStaticConfigArgumentsLookup = new Map();
    public static readonly argNameAliasesLookup: StaticConfigs.IStaticConfigArgNameAliasesLookup = new Map();
    public static readonly config: StaticConfigs.IStaticConfig = { ...Config } as any;
    public readonly supportedArgs = new Set();

    constructor() {
        this.createArgumentAndArgNameAliaseLookups(Config);
    }

    public isCLIArgument(candidate: string): boolean {
        return this.hasArgument(candidate);
    }

    public isCLIArgumentsValue(candidate: string): boolean {
        return this.isCLIArgument(candidate);
    }

    public getArgValue(argName: string): boolean {
        return Boolean(this.findArgByName(argName).value);
    }

    public hasArgument(argName: string): boolean {
        return StaticConfig.configArgumentsLookup.has(argName);
    }

    public findArgByName(argName: string): StaticConfigs.IStaticConfigArg {
        const argFound = StaticConfig.configArgumentsLookup.get(argName.toLocaleLowerCase());
        if (!argFound) {
            throw new Error(`[FindArgument Error] Argument ${argName} doesnt exist.`);
        }

        return argFound;
    }

    public isSchemaAlias(argName: string): boolean {
        return this.isAliasToArg(argName, ConfigName.Schema);
    }

    public isInteractive(): boolean {
        return this.getArgValue(ConfigName.Interactive);
    }

    private isAliasToArg(candidate: string, arg: ConfigName): boolean {
        const argAliases = StaticConfig.argNameAliasesLookup.get(arg);
        return !!argAliases && argAliases.has(candidate.toLowerCase());
    }

    private createArgumentAndArgNameAliaseLookups(config: StaticConfigs.IStaticConfig): void {
        config.args.forEach((arg: StaticConfigs.IStaticConfigArg) => {
            StaticConfig.configArgumentsLookup.set(arg.name.toLocaleLowerCase(), arg);
            StaticConfig.argNameAliasesLookup.set(arg.name.toLocaleLowerCase(), new Set(arg.alias));
        });
    }
}
