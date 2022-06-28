export const noopFn = () => undefined;

export interface IPromptAdapter {
/*     read(data: string, ...args: any[]): any;
    write(data: string, ...args: any[]): any; */
    query(query: string, callback: (answer: string) => void, options: IPromptAdapterOptions): any;

    close(): void;
    resume(): this;
    pause(): this;
}

export interface IPromptAdapterOptions {
    abortale: boolean;
    closeAfterQuery: boolean;
}

export type noopFnType = typeof noopFn;
