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
    }
};

export default mutations;