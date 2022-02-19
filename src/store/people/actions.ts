import api from "@/api";

const actions = {
    async loadPeopleByPage({ commit }: any, { page }: any) {
        const people =  await api.people.getPeopleByPage({ page });
        commit("SET_PEOPLE_TO_DICT", people);
    }
};

export default actions;