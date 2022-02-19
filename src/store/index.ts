import { createStore } from "vuex"
import people from "@/store/people";

export default createStore({
    modules: {
        people,
    },
});
