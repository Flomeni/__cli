import { IPromptAdapter, noopFn, IPromptAdapterOptions } from "./models";

export class Prompt {

    public static readonly Options: {
        NoAbortNoClose: IPromptAdapterOptions;
        NoAbortClose: IPromptAdapterOptions;
    } = {
        NoAbortNoClose: {
            abortable: false,
            closeAfterQuery: false,
        },
        NoAbortClose: {
            abortable: false,
            closeAfterQuery: true,
        },
    };

    constructor(
        private readonly adapter: IPromptAdapter,
    ) { }

    query(
        query: string,
        callback: (answer: string) => void = noopFn,
        {abortable, closeAfterQuery}: IPromptAdapterOptions,
    ): void {
        this.adapter.query(
            query,
            callback,
            {
                abortable,
                closeAfterQuery: closeAfterQuery ?? !Boolean(callback)
            },
        );
    }

    write(): void {

    }

}
