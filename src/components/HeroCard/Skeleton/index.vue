<template>
    <NSpace vertical>
        <NCard>
            <template #header>
                <NSkeleton text height="18px" width="100%" :sharp="false" />
            </template>

            <template #default>
                <NSkeleton text height="18px" width="100%" :sharp="false" />
                <NSkeleton text height="18px" width="100%" :sharp="false" />
            </template>

            <template #action>
                <NSkeleton text height="18px" width="100%" :sharp="false" />
            </template>
        </NCard>
    </NSpace>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NSkeleton, NSpace, NCard } from "naive-ui";

export default defineComponent({
    name: "HeroCardSkeleton",
    components: {
        NSkeleton,
        NSpace,
        NCard,
    }
})
</script>