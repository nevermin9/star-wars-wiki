import { IHero, IPeopleState } from "@/types/People"
import { getNumberFromString } from "@/helpers";


const mutations = {
    SET_PEOPLE_TO_DICT(state: IPeopleState, { people }: { [key: string]: IHero[] }): void {
        const buffer: Record<string, IHero> = {};

        for (const pers of people) {
            const regexpArr = getNumberFromString(pers.url) 

            if (regexpArr) {
                const id = regexpArr[0];
                buffer[id] = pers;
            }
        }

        state.peopleDictionary = { ...state.peopleDictionary, ...buffer };
    },

    SET_TOTAL_PEOPLE(state: IPeopleState, { count }: { [key: string]: string }): void {
        state.totalPeople = parseInt(count, 10);
    },

    SET_TOTAL_PAGES(state: IPeopleState, { count, currentPageCount }: { [key: string]: string }): void {
        const totalPages = Math.ceil(parseInt(count, 10) / parseInt(currentPageCount, 10));
        state.totalPages = totalPages;
    },

    SET_CURRENT_PAGE(state: IPeopleState, { page }: { [key: string]: number }): void {
        state.currentPage = page;
    }
};

export default mutations;