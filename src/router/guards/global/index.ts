import { Router } from "vue-router";
import { resetDataLoadingState } from "./resetDataLoadingState";

const beforeEachGuards = [
    resetDataLoadingState
];

function init(router: Router): void {
    for (const guard of beforeEachGuards) {
        router.beforeEach(guard);
    }
}

export default {
    init,
}
