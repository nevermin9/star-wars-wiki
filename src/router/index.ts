import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import routeNames from "./route-names";
import guards from "./guards"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: routeNames.peoplePage,
        component: () => import(/* webpackChunkName: "people" */ "@/pages/People/index.vue"),
    },
    {
        path: "/hero/:id",
        name: routeNames.heroPage,
        props: true,
        component: () => import(/* webpackChunkName: "hero" */ "@/pages/Hero/index.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

guards.init(router);

export default router
