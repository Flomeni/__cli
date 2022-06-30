
/* 
_________               _______________                                ________________                                                    ___________  
| Parser| parse    Tree| Tree Analyzer| analyze     SuggestionsTree   | ChoiseWizard   | Pick closest schema    Incove schema's executor  | Executor |  
|_______|------------->|______________|----------------------------> |________________|------------------------------------------------->|___________|

*/
export class Parser {
    public parse(args: string[]): any {
        console.log('args: ', args);
    }
}
