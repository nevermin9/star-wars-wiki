import { ActionContext } from "vuex"
import { IPeopleState } from "@/types/People";
import { IStore } from "@/types/store";
import api from "@/api";

const actions = {
    async LOAD_PEOPLE_BY_PAGE(
        { commit, getters }: ActionContext<IPeopleState, IStore>,
        { page }: { [key: string]: string }
    ): Promise<void> {
        const currentPage = getters.GET_CURRENT_PAGE;
        const peopleDict = getters.GET_PEOPLE_DICT;

        if (page > currentPage || peopleDict === null) {
            const { results, count } =  await api.people.getPeopleByPage({ page });
            commit("SET_PEOPLE_TO_DICT", { people: results });
            commit("SET_TOTAL_PEOPLE", { count })
            commit("SET_TOTAL_PAGES", { count, currentPageCount: Object.keys(results).length })
        }
    }
};

export default actions;