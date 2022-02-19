<template>
    <DataLoadContainer
        action-names="people/LOAD_PEOPLE_BY_PAGE"
        :payloads="{ page: 1 }"
    >
        <template #default>
            {{ peopleDict }}
        </template>

        <template #loader>
            Loading....
        </template>

        <template #error>
            error...
        </template>
    </DataLoadContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataLoadContainer from "@/components/DataLoadContainer/index.vue";
import { usePeopleStore } from "@/composition/People";

export default defineComponent({
    components: {
        DataLoadContainer,
    },

    setup() {
        const { peopleDict } = usePeopleStore();

        return {
            peopleDict,
        };
    }

});
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
