<template>
    <NCard
        :title="heroName"
        class="hero-card"
    >
        <template #default>
            <ul class="hero-card__content-list">
                <li class="hero-card__content-list-item">
                    <span class="hero-card__field-name">
                        Data of birth:
                    </span>

                    <span class="hero-card__field-desc">
                        {{ heroBirth }}
                    </span>
                </li>

                <li>
                    <span class="hero-card__field-name">
                        Gender:
                    </span>

                    <span class="hero-card__field-desc">
                        {{ heroGender }}
                    </span>
                </li>
            </ul>
        </template>

        <template #action>
            <router-link
                :to="routeToHeroPage"
                class="hero-card__more-link"
            >
                more info >
            </router-link>
        </template>
    </NCard>
</template>

<script lang="ts">
import routeNames from "@/router/route-names";
import { defineComponent, PropType, reactive, toRefs } from "vue";
import { useHeroData } from "@/composition/People"
import { IHero } from "@/types/People";
import { NCard } from "naive-ui";
import { getNumberFromString } from "@/helpers";

export default defineComponent({
    name: "HeroCard",

    components: {
        NCard,
    },

    props: {
        hero: {
            type: Object as PropType<IHero>,
            required: true,
        },
        heroId: {
            type: String,
            required: true,
        }
    },

    setup(props) {
        const { hero } = toRefs(props);
        const {
            heroName,
            heroBirth,
            heroGender,
        } = useHeroData(hero);

        const routeToHeroPage = reactive({
            name: routeNames.heroPage,
            params: {
                id: getNumberFromString(hero.value.url),
            }
        });

        return {
            heroName,
            heroBirth,
            heroGender,
            routeToHeroPage,
        }
    },
})
</script>

<style lang="scss">
.hero-card {
    &__content-list {
        list-style: none;
    }

    &__field-desc,
    &__field-name {
        font-size: 18px;
        line-height: 1.3;
    }

    &__field-name {
        text-decoration: underline;
        font-weight: 700;
    }

    &__more-link {
        text-decoration: none;
        color: white;
        font-weight: 700;
        line-height: 1.3;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
