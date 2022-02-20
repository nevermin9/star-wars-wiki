import { computed, Ref } from "vue";
import { useStore } from "vuex";
import { IHero } from "@/types/People";

function sortPeopleDict(obj: Record<string, IHero>): IHero[] {
    const sorted: IHero[] = [];

    return Object.keys(obj).sort((keyA, keyB) => {
        const keyNumA = parseInt(keyA, 10);
        const keyNumB = parseInt(keyB, 10);

        return keyNumA - keyNumB;
    }).reduce((acc: IHero[], curr: string): IHero[] => {
        acc.push(obj[curr]);
        return acc;
    }, sorted);
}


export function usePeopleStore(): { [key:string]: Ref<unknown> } {
    const store = useStore();
    const DISPLAY_PEOPLE_BY = 10;

    const peopleDict = computed<Record<string, IHero>>(() => {
        return store.getters["people/GET_PEOPLE_DICT"];
    });

    const totalPages = computed<number>(() => {
        return store.getters["people/GET_TOTAL_PAGES"];
    });

    const sortedPeopleList = computed<IHero[]>(() => {
        return sortPeopleDict(peopleDict.value);
    });

    const currentPage = computed<number>({
        get(): number {
            return store.getters["people/GET_CURRENT_PAGE"];
        },
        set(value: number): void {
            store.commit("people/SET_CURRENT_PAGE", { page: value });
        }
    });

    const peopleListToDisplay = computed<IHero[]>(() => {
        const from = (currentPage.value - 1) * DISPLAY_PEOPLE_BY;
        const to = DISPLAY_PEOPLE_BY * currentPage.value;

        return sortedPeopleList.value.slice(from, to);
    });

    return {
        sortedPeopleList,
        peopleDict,
        totalPages,
        currentPage,
        peopleListToDisplay,
    }
}
