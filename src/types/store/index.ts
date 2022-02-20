import { IPeopleState } from "@/types/People";

export interface IStore {
    modules: {
        [key: string]: IPeopleState,
    }
}