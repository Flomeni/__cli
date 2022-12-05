export abstract class BlueprintFactory {
    abstract execute(...args: BlueprintFactoryArgEntry[]): any;
}

export interface BlueprintFactoryArgEntry {
    [key: string]: any[];
}
