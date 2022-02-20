import { useDataLoading } from "@/composition/DataLoading";

export function resetDataLoadingState() {
    const { isError, isLoading } = useDataLoading();

    if (isError.value) {
        isError.value = false;
    }

    if (!isLoading.value) {
        isLoading.value = true;
    }
}