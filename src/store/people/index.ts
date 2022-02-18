import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const peopleModule = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};

export default peopleModule;