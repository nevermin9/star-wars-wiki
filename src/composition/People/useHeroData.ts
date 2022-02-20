import { IHero, Gender } from "@/types/People";
import { computed, Ref } from "vue";

export function useHeroData(heroObj: Ref<IHero>): { [key: string]: Ref<unknown> } {
    const heroName = computed<string>(() => {
        return heroObj.value.name;
    });

    const heroBirth = computed<string>(() => {
        return heroObj.value.birth_year;
    });

    const heroGender = computed<Gender>(() => {
        return heroObj.value.gender;
    });

    return {
        heroName,
        heroBirth,
        heroGender,
    }
}