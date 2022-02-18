import { getNumberFromString } from "@/helpers";

const mutations = {
    SET_PEOPLE_TO_DICT(store, { people }) {
        const buffer: { [key: string]: string } = {};

        for (const pers of people) {
            const regexpArr = getNumberFromString(pers.url) 

            if (regexpArr) {
                const id = regexpArr[0];
                buffer[id] = pers;
            }
        }

        store.

    }
};

export default mutations;