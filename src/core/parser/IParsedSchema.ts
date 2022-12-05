import { SchemaFactory, SchemaFactoryArgEntry } from "src/blueprints/models/IBlueprintFactory";

export interface IParsedSchema {
    name: string;
    factory: SchemaFactory;
    args: SchemaFactoryArgEntry[];
}
