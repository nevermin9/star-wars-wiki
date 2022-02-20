<template>
    <DataLoadingContainer
        class="people-page"
        :action-names="actionName"
        :payloads="actionPayload"
    >
        <template #default>
            <NGrid
                x-gap="12"
                y-gap="12"
                cols="1 s:3 m:3 l:3 xl:4 2xl:5"
                responsive="screen"
            >
                <NGi
                    v-for="id in Object.keys(peopleDict)"
                    :key="id"
                >
                    <HeroCard
                        :hero="peopleDict[id]"
                        :hero-id="id"
                    />
                </NGi>
            </NGrid>
        </template>

        <template #loader>
            <NGrid
                x-gap="12"
                y-gap="12"
                cols="1 s:3 m:3 l:3 xl:4 2xl:5"
                responsive="screen"
            >
                <NGi
                    v-for="i in 4"
                    :key="i"
                >
                    <HeroCardSkeleton />
                </NGi>
            </NGrid>
        </template>

        <template #error>
            Ooops! Something went wrong :(
        </template>
    </DataLoadingContainer>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import DataLoadingContainer from "@/components/DataLoadContainer/index.vue";
import { usePeopleStore } from "@/composition/People";
import HeroCard from "@/components/HeroCard/Card/index.vue";
import HeroCardSkeleton from "@/components/HeroCard/Skeleton/index.vue";
import { NGrid, NGi } from "naive-ui"

export default defineComponent({
    name: "PeoplePage",

    components: {
        DataLoadingContainer,
        HeroCard,
        HeroCardSkeleton,
        NGrid,
        NGi,
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
