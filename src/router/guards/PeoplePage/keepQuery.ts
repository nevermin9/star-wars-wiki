import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import { hasQueryParams } from "@/router/helpers";

const DEFAUL_QUERY = {
    page: 1,
};

export function keepQuery(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
): void {
    if (!hasQueryParams(to)) {
        next({ name: to.name?.toString(), query: DEFAUL_QUERY });
    } else {
        next();
    }
}