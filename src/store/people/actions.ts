import api from "@/api";

const actions = {
    async LOAD_PEOPLE_BY_PAGE({ commit }: any, { page }: any) {
        const { results, count } =  await api.people.getPeopleByPage({ page });
        commit("SET_PEOPLE_TO_DICT", { people: results });
        commit("SET_TOTAL_PEOPLE", { count })
        commit("SET_TOTAL_PAGES", { count, currentPageCount: Object.keys(results).length })
    }
};

export default actions;