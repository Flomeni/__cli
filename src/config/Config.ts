import { IStaticConfig } from "./IStaticConfig.models";

export enum ConfigName {
    Interactive = 'Interactive',
    Schema = 'Schema',
    ExecutorArg = 'ExecutorArg',
}

export const Config: IStaticConfig = {
    "args": [
        {
            "__id": ConfigName.Interactive,
            "desc": "Interactive mode for the cli",
            "name": ConfigName.Interactive,
            "alias": [
                "-interactive", "--interactive", "-int", "--int", "-i", "--i" 
            ],
            "value": 0
        },
        {
            "__id": ConfigName.Schema,
            "desc": "Name of a schema",
            "name": ConfigName.Schema,
            "alias": [
                "-s", "--s", "---s", "-schema", "--schema"
            ]
        },
        {
            "__id": ConfigName.ExecutorArg,
            "desc": "Service arguments for a schema's executor",
            "name": ConfigName.ExecutorArg,
            "alias": [
                "::", ":", ":::"
            ],
            "parents": [
                "Schema"
            ]
        }
    ]
};
