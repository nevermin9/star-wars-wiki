import { useStore } from "vuex";
import { ActionName, IPayloads } from "@/types/DataLoading";

export async function makeRequest(actionsNames: ActionName | ActionName[], payloads: IPayloads): Promise<void[]> {
    const store = useStore();

    if (Array.isArray(actionsNames)) {
        const promiseList = actionsNames.map((actionName) => {
            store.dispatch(actionName, payloads[actionName as keyof IPayloads]);
        });

        return await Promise.all(promiseList);
    }

    return await store.dispatch(actionsNames, payloads);
}