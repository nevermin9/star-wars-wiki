export type ActionName = string;

export interface IPayloads {
    [key: ActionName | string]: number | Record<string, unknown> | string | boolean | [],
}