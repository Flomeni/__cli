export interface IStaticConfigArg {
    __id: string;
    desc: string;
    name: string;
    alias: string[];
    value: number;
    parents: IStaticConfigArg['__id'][];
}

export interface IStaticConfigJSON {
    args: IStaticConfigArg[];
}

export type IStaticConfigArgNameAliasesLookup = Map<string, Set<string>>;
export type IStaticConfigArgumentsLookup = Map<string, IStaticConfigArg>;
