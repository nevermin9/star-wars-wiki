<template>
    <section>
        <div v-if="!isLoading && !isError">
            <slot />
        </div>

        <div v-else-if="isLoading">
            <slot name="loader" />
        </div>

        <div v-else-if="!isLoading && isError">
            <slot name="error" />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, toRefs } from "vue";
import { useDataLoading } from "@/composition/DataLoading";
import { makeRequest } from "@/composition/DataLoading/helpers";
import { ActionName, IPayloads } from "@/types/DataLoading";

export default defineComponent({
    props: {
        actionNames: {
            type: [ String, Array ] as PropType<ActionName | ActionName[]>,
            required: true,
        },
        payloads: {
            type: Object as PropType<IPayloads>,
            default: () => ({}),
        },
    },
    setup(props) {
        const { actionNames, payloads } = toRefs(props);
        const { isLoading, isError } = useDataLoading();

        onMounted(async () => {
            isLoading.value = true;

            try {
                await makeRequest(actionNames.value, payloads.value);
            } catch (error) {
                isError.value = true;
            } finally {
                isLoading.value = false;
            }
        });

        return {
            isLoading,
        }
    },
})
</script>
