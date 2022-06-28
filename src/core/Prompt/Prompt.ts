import { IPromptAdapter, noopFn, IPromptAdapterOptions } from "./models";

export class Prompt {

    public static readonly Options: {
        NoAbortNoClose: IPromptAdapterOptions;
        NoAbortClose: IPromptAdapterOptions;
    } = {
        NoAbortNoClose: {
            abortale: false,
            closeAfterQuery: false,
        },
        NoAbortClose: {
            abortale: false,
            closeAfterQuery: true,
        },
    };

    constructor(
        private readonly adapter: IPromptAdapter,
    ) { }

    query(
        query: string,
        callback: (answer: string) => void = noopFn,
        {abortale, closeAfterQuery}: IPromptAdapterOptions,
    ): void {
        this.adapter.query(
            query,
            callback,
            {
                abortale,
                closeAfterQuery: closeAfterQuery ?? !Boolean(callback)
            },
        );
    }

    write(): void {

    }

}
