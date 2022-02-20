import { RouteLocationNormalized } from "vue-router";

export function hasQueryParams(route: RouteLocationNormalized): boolean {
    return Boolean(Object.keys(route.query).length);
}