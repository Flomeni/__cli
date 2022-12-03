export abstract class SchemaFactory {
    abstract execute(...args: SchemaFactoryArgEntry[]): any;
}

export interface SchemaFactoryArgEntry {
    [key: string]: any[];
}
