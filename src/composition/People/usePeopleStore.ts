import { computed } from "vue";
import { useStore } from "vuex";

export function usePeopleStore() {
    const store = useStore();

    const peopleDict = computed(() => {
        return store.getters["people/GET_PEOPLE_DICT"];
    });

    return {
        peopleDict,
    }
}
