<template>
    <div class="slider">
        <swiper
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="2"
            :pagination="true"
            :modules="modules"
            :loop="true"
            :spaceBetween="304"
            :initialSlide="0"
            class="mySwiper"
        >
            <swiper-slide
                v-for="(coach, index) in selectedCoaches"
                :key="index"
            >
                <CoachCards
                    :coachName="coach.name"
                    :coachPosition="coach.position"
                    :imgSrc="coach.imgSrc"
                    :imgAlt="coach.imgAlt"
                />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import CoachCards from "../CoachCards/CoachCards.vue";
import { coachData } from "@/data/coachData";

export default {
    name: "SwiperTeam",
    components: {
        Swiper,
        SwiperSlide,
        CoachCards,
    },
    setup() {
        const selectedCoachNames = [
            "Michał Kulej",
            "Jakub Kulej",
            "Filip Krasiński",
            "Sandra Cieślik-Kulej",
        ];

        const selectedCoaches = coachData.filter((coach) =>
            selectedCoachNames.includes(coach.name)
        );

        return {
            modules: [EffectCoverflow, Pagination],
            selectedCoaches,
        };
    },
};
</script>

<style scoped>
.mySwiper {
    max-width: 90vw;
    display: flex;
    align-items: center;
    gap: var(--space-300, 1.5rem);
}
.swiper-slide {
    align-self: flex-start;
    justify-self: flex-start;
    text-align: center;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
