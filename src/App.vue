<template>
    <NSpace vertical justify="center">
        <NLayout>
            <transition name="fade" appear mode="out-in">
                <NLayoutHeader :key="$route.name">
                    {{ $route.name }}
                </NLayoutHeader>
            </transition>

            <NLayoutContent>
                <router-view v-slot="{ Component }">
                    <transition name="fade" appear mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </NLayoutContent>
        </NLayout>
    </NSpace>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usePeopleStore } from "@/composition/People";
import { NSpace, NLayout, NLayoutHeader, NLayoutContent } from "naive-ui";

export default defineComponent({
    components: {
        NSpace,
        NLayout,
        NLayoutHeader,
        NLayoutContent,
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
*,
*::after,
*::before {
    box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
