const getters = {
    GET_PEOPLE_DICT(state: any) {
        return state.peopleDictionary;
    },

    GET_TOTAL_PAGES(state: any) {
        return state.totalPages;
    }
};

export default getters;