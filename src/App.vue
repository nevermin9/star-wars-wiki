<template>
    <NConfigProvider
        :theme="darkTheme"
        class="main"
    >
        <NSpace
            vertical
            :item-style="{
                'display': 'flex',
                'flex-direction': 'column',
                'flex': 1,
            }"
            class="main__n-space"
        >
            <NLayout>
                <transition name="fade" appear mode="out-in">
                    <NLayoutHeader
                        inverted
                        :key="$route.name"
                        class="main__page-header"
                    >
                        <NSkeleton
                            v-if="!Boolean($route.name)"
                            text
                            :height="32"
                            width="30%"
                        />

                        <span v-else>
                            {{ $route.name }}
                        </span>
                    </NLayoutHeader>
                </transition>

                <NLayoutContent class="main__content">
                    <router-view v-slot="{ Component }">
                        <transition name="fade" appear mode="out-in">
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </NLayoutContent>
            </NLayout>
        </NSpace>
    </NConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import {
    NSpace,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NConfigProvider,
    NSkeleton,
    darkTheme,
} from "naive-ui";

export default defineComponent({
    components: {
        NSpace,
        NLayout,
        NLayoutHeader,
        NLayoutContent,
        NConfigProvider,
        NSkeleton,
    },

    setup() {
        return {
            darkTheme,
        };
    }

});
</script>

<style lang="scss">
*,
*::after,
*::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
    line-height: 1.3;
}

body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

#app {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.main {
    display: flex;
    flex-direction: column;
    flex: 1;

    &__n-space {
        flex: 1;
    }

    &__page-header {
        padding: 16px 0;
        text-align: center;
        font-size: 32px;
        font-weight: 700;
        line-height: 1.3;
    }

    &__content {
        flex: 1;
        padding: 16px;

        @media screen and (min-width: 769px) {
            padding: 32px;
        }
    }
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
