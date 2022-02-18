import api from "@/api";

const actions = {
    async loadPeopleByPage({ commit }, { page }) {
        const people =  await api.people.getPeopleByPage({ page });
        commit();
    }

};

export default actions;