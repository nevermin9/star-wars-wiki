import { ref, Ref } from "vue";

export function useDataLoading(): { [key: string]: Ref<boolean> } {
    const isLoading = ref(true);
    const isError = ref(false);

    return {
        isLoading,
        isError,
    }
}