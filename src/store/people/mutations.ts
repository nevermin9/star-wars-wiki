import { getNumberFromString } from "@/helpers";

const mutations = {
    SET_PEOPLE_TO_DICT(state: any, { people }: any) {
        const buffer: { [key: string]: string } = {};

        for (const pers of people) {
            const regexpArr = getNumberFromString(pers.url) 

            if (regexpArr) {
                const id = regexpArr[0];
                buffer[id] = pers;
            }
        }

        state.peopleDictionary = { ...state.peopleDictionary, ...buffer };
    },

    SET_TOTAL_PEOPLE(state: any, { count }: any) {
        state.totalPeople = count;
    },

    SET_TOTAL_PAGES(state: any, { count, currentPageCount }: any) {
        const totalPages = Math.ceil(count / currentPageCount);
        state.totalPages = totalPages;
    },

    SET_CURRENT_PAGE(state: any, { page }: any) {
        state.currentPage = page;
    }
};

export default mutations;