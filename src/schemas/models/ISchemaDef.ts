export abstract class SchemaDefClass {
    abstract execute(...args: SchemaDefClassArgEntry[]): any;
}

export interface SchemaDefClassArgEntry {
    [key: string]: any[];
}
