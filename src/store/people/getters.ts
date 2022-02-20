import { IPeopleState, IHero } from "@/types/People";

const getters = {
    GET_PEOPLE_DICT(state: IPeopleState): Record<string, IHero> | null {
        return state.peopleDictionary;
    },

    GET_TOTAL_PAGES(state: IPeopleState): number {
        return state.totalPages;
    },

    GET_CURRENT_PAGE(state: IPeopleState): number {
        return state.currentPage;
    }
};

export default getters;