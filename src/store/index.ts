import { createStore } from "vuex"
import peopleModule from "@/store/people";

export default createStore({
    modules: {
        peopleModule,
    },
});
