<template>
    <DataLoadingContainer
        class="people-page"
        :action-names="actionName"
        :payloads="actionPayload"
    >
        <template #default>
            <section>
                this is people page
                <router-link :to="{ name: 'Hero', params: { id: 1 } }"> to hero page </router-link>
                {{ 
                    peopleDict
                }}
            </section>
        </template>

        <template #loader>
            Loading....
        </template>

        <template #error>
            Ooops!
        </template>
    </DataLoadingContainer>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import DataLoadingContainer from "@/components/DataLoadContainer/index.vue";
import { usePeopleStore } from "@/composition/People";

export default defineComponent({
    name: "PeoplePage",

    components: {
        DataLoadingContainer,
    },

    props: {
        page: {
            type: String,
            required: true,
        },
    },

    setup(props) {
        const { page } = toRefs(props);
        const { peopleDict } = usePeopleStore();
        const actionName = "people/LOAD_PEOPLE_BY_PAGE";
        const actionPayload = reactive({ page })

        return {
            actionName,
            actionPayload,
            peopleDict,
        }
    }
})
</script>
