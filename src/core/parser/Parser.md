# Parsers

### Static parser
            
| 1  Parser.parse(args) |---IKeyValue[]--->| 2  ArgsAnalyzer.analyze(IKeyValue[]) |----IParsedSchema-->| 3 Executor.execute(schema) |-----Resulting Files------> END

### Dynamic parser
    TBD

## Predefined Schema Parsing using Static Parser

###      Parameters:

```::<schema_custom_param>``` - special syntax created by developer and consumed by schema to customize the output binary with additional input options

1) Command:

```sh
  nodebp -schema "express" ::type "basic"
```
2) Nodejs converts command into an args array string[]:
```sh
  const args = ["-schema", "express", "::type", "basic"];
```
3) WHERE The args relates in the next ways, creating key-value pairs:
```sh
  const args = [["-schema", "express"], ["::type", "basic"]];
```
4) Parser (1) takes args and produces key-value array ```IKeyValue[]```:
```sh
    const keyValueArray: IKeyValue[] = [
                {
                    name: '-schema',
                    value: ['express'],
                    isSchema: true,
                },
                {
                    name: '::type',
                    value: ['basic'],
                }
    ];
```
5) Args Analyzer (2) takes key-value array ```IKeyValue[]``` and converts it into ```IParsedSchema``` schema details object:
```sh
    const parsedShema: IParsedSchema = {
        name: 'express'
        def: ExpressSchema;
        args: [

        ];
    };
```
## Custom Schema Parsing using Static Parser                    

1) Command:
```sh
    nodebp --s "./custom_schemas_dir/angular_webserver.json"
```
2) Nodejs converts command into an args array string[]:
```sh
    const args = ["--s", "./custom_schemas_dir/angular_webserver.json"];
```
3) WHERE The args relates in the next ways, creating key-value pairs:
```sh
    const args = [["--s", "./custom_schemas_dir/angular_webserver.json"]];
```
4) Parser (1) takes args and produces key-value array ```IKeyValue[]```::
```sh
    const keyValueArray: IKeyValue[] = [
                    {
                        name: '--s',
                        value: ['./custom_schemas_dir/angular_webserver.json'],
                        isSchema: true,
                    },
        ];
```
5) Args Analyzer (2) takes key-value array ```IKeyValue[]``` and converts it into ```IParsedSchema``` schema details object:
```sh
    const parsedShema: IParsedSchema = { ...require('angular_webserver.json') };
```
                   