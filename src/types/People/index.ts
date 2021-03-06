export interface IPeopleState {
    peopleDictionary: Record<string, IHero> | null,
    totalPages: number,
    totalPeople: number,
    currentPage: number,
    currentHero: IHero | null,
}

export type Gender = "male" | "female" | "n/a";
export interface IHero {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: Gender,
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string,
}
