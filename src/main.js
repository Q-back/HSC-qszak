import { createApp } from "vue";
import App from "./App.vue";

import { createWebHistory, createRouter } from "vue-router";

import Home from "@/pages/Home.vue";
import Offer from "@/pages/Offer.vue";
import About from "@/pages/About.vue";
import Crew from "@/pages/Crew.vue";
import Physio from "./components/gabinet/Physio.vue";
import Diet from "./components/gabinet/Diet.vue";
import Hypnotherapy from "./components/gabinet/Hypnotherapy.vue";
import CoachPage from "./components/CoachCards/CoachPage.vue";
import OfferPage from "./components/OfferCards/OfferPage.vue";
import Policy from "./components/home/policy.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/oferta", name: "Oferta", component: Offer },
    { path: "/kadra", name: "Kadra", component: Crew },
    { path: "/o-nas", name: "O-nas", component: About },
    { path: "/fizjoterapia", name: "Fizjoterapia", component: Physio },
    { path: "/dietetyka", name: "Dietetyka", component: Diet },
    { path: "/hipnoterapia", name: "Hipnoterapia", component: Hypnotherapy },
    { path: "/prywatnosc", name: "Polityka-Monitoringu", component: Policy },
    {
        path: "/kadra/:coachName",
        name: "Karta-Trenera",
        component: CoachPage,
        props: true,
    },
    {
        path: "/:service/:subtitle",
        name: "Karta-Usługi",
        component: OfferPage,
        props: true,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

const app = createApp(App);

app.use(router);

app.mount("#app");
