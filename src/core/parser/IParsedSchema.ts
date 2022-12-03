import { SchemaFactory, SchemaFactoryArgEntry } from "src/schemas/models/ISchemaFactory";

export interface IParsedSchema {
    name: string;
    factory: SchemaFactory;
    args: SchemaFactoryArgEntry[];
}
