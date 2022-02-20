<template>
    <section>
        this is people page
        <router-link :to="{ name: 'Hero', params: { id: 1 } }"> to hero page </router-link>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { RouterLink } from "vue-router";

export default defineComponent({
    name: "PeoplePage",

    components: {

    },

    props: {
        page: {
            type: String,
            required: true,
        },
    }

})
</script>
