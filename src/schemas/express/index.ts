import { SchemaFactory } from "../models/ISchemaFactory";

export class ExpressFactory implements SchemaFactory {
    execute(..._args: any[]) {
        throw new Error("Method not implemented.");
    }
}
