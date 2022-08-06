import { SchemaDefClass, SchemaDefClassArgEntry } from "src/schemas/models/ISchemaDef";

export interface IParsedSchema {
    name: string;
    def: SchemaDefClass;
    args: SchemaDefClassArgEntry[];
}
