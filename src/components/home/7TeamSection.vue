<template>
    <section class="team">
        <div class="section-header">
            <div class="section-title">
                <div class="promo-text">KADRA</div>
                <div class="title">NASI TRENERZY</div>
            </div>
            <div class="text">
                W naszej kadrze znajdują się pasjonaci różnych dziedzin czy
                dyscyplin sportowych tj. sporty siłowe, kulturystyczne,
                kickboxingu, boksu piłki nożnej czy kalisteniki. W naszej
                siłowni prowadzi zajęcia wielu doświadczonych trenerów, gotowych
                wesprzeć Cię w procesie treningowym. Zapoznaj się z naszą kadrą
                poniżej!
            </div>
            <div class="team-slider">
                <swiper
                    :grabCursor="true"
                    :centeredSlides="true"
                    :slidesPerView="1"
                    :pagination="true"
                    :modules="modules"
                    :loop="true"
                    :spaceBetween="auto"
                    :initialSlide="0"
                    class="swiper-dynamic"
                    :breakpoints="{
                        740: {
                            slidesPerView: 2,
                        },
                    }"
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
                <div
                    class="static"
                    v-for="(coach, index) in selectedCoaches"
                    :key="index"
                >
                    <CoachCards
                        :coachName="coach.name"
                        :coachPosition="coach.position"
                        :imgSrc="coach.imgSrc"
                        :imgAlt="coach.imgAlt"
                    />
                </div>
            </div>
        </div>
        <RouterLink to="/kadra" class="meet-crew"
            >Poznaj naszą kadrę</RouterLink
        >
    </section>
</template>

<script>
import { RouterLink } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CoachCards from "../CoachCards/CoachCards.vue";
import { coachData } from "@/data/coachData";

export default {
    name: "TeamSection",
    components: {
        Swiper,
        SwiperSlide,
        RouterLink,
        CoachCards,
    },
    setup() {
        // Tablica trenerów, których chcesz wybrać
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
            modules: [Pagination],
            selectedCoaches,
        };
    },
};
</script>

<style scoped>
@media (max-width: 640px) {
    section.team {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 3rem var(--space-200, 1rem);
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    .section-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
    }
    .section-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: -2rem;
        align-self: stretch;
    }
    .promo-text {
        color: var(--Text-Primary, #181818);
        text-align: center;
        font-family: Montserrat;
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4rem;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
        opacity: 0.08;
    }
    .title {
        align-self: stretch;
        color: var(--Text-Primary, #181818);
        text-align: center;

        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: 0.0225rem;
        text-transform: uppercase;
    }
    .text {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);
        text-align: center;

        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 300;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }
    .team-slider {
        display: flex;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
        flex-wrap: wrap;
    }
    .meet-crew {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        /* align-self: stretch; */
        background: var(--Surface-Brand, #e30613);
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        border-color: #e30613;

        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        text-transform: uppercase;
        text-decoration: none;
    }

    .swiper-dynamic {
        display: block;
        overflow: hidden;
    }

    .swiper-slide {
        align-self: center;
        justify-self: center;
        text-align: center;
        font-size: 18px;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .static {
        display: none;
    }
}

@media (min-width: 640px) and (max-width: 960px) {
    section.team {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 4.5rem var(--space-300, 1.5rem);
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    .section-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
    }
    .section-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: -2rem;
        align-self: stretch;
    }
    .promo-text {
        text-align: center;
        color: var(--Text-Primary, #181818);
        font-family: Montserrat;
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4rem;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
        opacity: 0.08;
    }
    .title {
        align-self: stretch;
        color: var(--Text-Primary, #181818);
        text-align: center;

        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }
    .text {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);
        text-align: center;

        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }
    .team-slider {
        display: flex;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }

    .meet-crew {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: var(--space-200, 1rem);
        background: var(--Surface-Brand, #e30613);
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        border-color: #e30613;

        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        text-transform: uppercase;
        text-decoration: none;
    }

    .swiper-dynamic {
        display: block;
        overflow: hidden;
    }

    .swiper-slide {
        align-self: center;
        justify-self: center;
        text-align: center;
        font-size: 18px;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .static {
        display: none;
    }
}

@media (min-width: 960px) {
    section.team {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 6rem 4.5rem;
        flex-direction: column;
        align-items: center;
        gap: 4.5rem;
    }
    .section-header {
        display: flex;
        max-width: 67.125rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
        margin: 0 auto;
    }
    .section-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: -5rem;
    }
    .promo-text {
        text-align: center;
        color: var(--Text-Primary, #181818);
        font-family: Montserrat;
        font-size: 10rem;
        font-style: normal;
        font-weight: 700;
        line-height: 10rem;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        opacity: 0.08;
    }
    .title {
        align-self: stretch;
        color: var(--Text-Primary, #181818);
        text-align: center;

        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }
    .text {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);
        text-align: center;

        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }
    .team-slider {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: calc(2rem + 5vw);
        align-self: stretch;
        flex-wrap: wrap;
    }

    .meet-crew {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background: var(--Surface-Brand, #e30613);
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        border-color: #e30613;

        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        text-transform: uppercase;
        text-decoration: none;
    }

    .swiper-dynamic {
        display: none;
    }
    .static {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
    }
}

@media (min-width: 1440px) {
    .team-slider {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
        flex-wrap: nowrap;
    }
}
</style>
