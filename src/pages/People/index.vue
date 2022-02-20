<template>
    <DataLoadingContainer
        class="people-page"
        :action-names="actionName"
        :payloads="actionPayload"
    >
        <template #default>
            <NSpace vertical align="center" item-style="width: 100%;">
                <NGrid
                    x-gap="12"
                    y-gap="12"
                    cols="1 s:3 m:3 l:3 xl:4 2xl:5"
                    responsive="screen"
                    class="people-page__grid"
                >
                    <NGi
                        v-for="hero in peopleListToDisplay"
                        :key="hero.url"
                    >
                        <HeroCard :hero="hero" />
                    </NGi>
                </NGrid>

                <div class="people-page__pagination-wrapper">
                    <NPagination v-model:page="currentPage" :page-count="totalPages"/>
                </div>
            </NSpace>
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
import routeNames from "@/router/route-names";
import { defineComponent, reactive, toRefs, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import DataLoadingContainer from "@/components/DataLoadContainer/index.vue";
import { usePeopleStore } from "@/composition/People";
import HeroCard from "@/components/HeroCard/Card/index.vue";
import HeroCardSkeleton from "@/components/HeroCard/Skeleton/index.vue";
import { NGrid, NGi, NPagination, NSpace } from "naive-ui";

export default defineComponent({
    name: "PeoplePage",

    components: {
        DataLoadingContainer,
        HeroCard,
        HeroCardSkeleton,
        NGrid,
        NGi,
        NPagination,
        NSpace,
    },

    props: {
        page: {
            type: String,
            required: true,
        },
    },

    setup(props) {
        const { page } = toRefs(props);
        const router = useRouter();
        const {
            peopleDict,
            totalPages,
            currentPage,
            peopleListToDisplay,
        } = usePeopleStore();
        const actionName = "people/LOAD_PEOPLE_BY_PAGE";
        const actionPayload = reactive({ page });

        // I would like to change logic of the page changing and people request
        // and get rid of calling "people/LOAD_PEOPLE_BY_PAGE" every time you change the page
        // It's better to controll isLoading & isError states here, and make request to /api/people/ here too
        // BUT!
        // swapi.dev doesn't work becouse of expired https certs :(((
        // and i cannot to test another approach
        // so i had left worked one
        watch(
            () => currentPage.value,
            (val, oldVal) => {
                if (val !== oldVal) {
                    return router.push({ name: routeNames.peoplePage, query: { page: val as number } })
                }
            }
        );

        onMounted(() => {
            currentPage.value = parseInt(page.value, 10);
        });

        return {
            peopleListToDisplay,
            currentPage,
            actionName,
            actionPayload,
            peopleDict,
            totalPages,
        }
    }
})
</script>

<style lang="scss">
.people-page {
    &__pagination-wrapper {
        display: flex;
        justify-content: center;
    }
}
</style>
