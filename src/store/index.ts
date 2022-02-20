import { createStore } from "vuex"
import { IStore } from "@/types/store";
import people from "@/store/people";

export default createStore<IStore>({
    modules: {
        people,
    },
});
