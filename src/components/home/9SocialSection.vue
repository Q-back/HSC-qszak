<template>
    <section class="social">
        <div class="section-header">
            <div class="section-title">
                <div class="promo-text">Sociale</div>
                <div class="title">Nasza społeczność</div>
            </div>
            <div class="text">
                Działając od wielu lat na rynku, zebraliśmy sporo osób wokół, z
                którymi działamy nieprzerwanie nawet przez kilkanaście lat.
                Naszą misją jest tworzenie "holistycznej" społeczności, która
                będzie z nami wspólnie dzielić miłe chwilę na siłowni oraz poza
                nią. Zapraszamy do zapoznania się z naszym codziennym życiem w
                socjalach na Facebooku oraz Instagramie!
            </div>
        </div>

        <div class="gallery">
            <div class="box"><instagram1 /></div>
            <div class="box"><instagram2 /></div>
            <div class="box"><instagram3 /></div>
            <div class="box"><instagram4 /></div>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import instagram1 from "../instagram/instagram1.vue";
import instagram2 from "../instagram/instagram2.vue";
import instagram3 from "../instagram/instagram3.vue";
import instagram4 from "../instagram/instagram4.vue";

export default {
    name: "SocialSection",
    components: {
        Swiper,
        SwiperSlide,
        instagram1,
        instagram2,
        instagram3,
        instagram4,
    },

    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>

<style scoped>
@media (max-width: 640px) {
    section.social {
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
        align-items: flex-start;
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
        color: var(--Text-Background-text, #f5f5f5);
        font-family: Montserrat;
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4rem;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
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
        max-width: 37.5rem;
        align-self: stretch;
        color: var(--Text-Secondary, #484848);

        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }
    .gallery {
        display: flex;
        align-items: center;
        align-content: center;
        gap: 1rem var(--space-200, 1rem);
        align-self: center;
        flex-wrap: wrap;
    }

    .box {
        margin: 0 auto;
    }

    .swiper-slide {
        display: flex;
        align-self: flex-start;
        justify-self: flex-start;
        text-align: center;

        justify-content: center;
        align-items: center;
    }
}

@media (min-width: 640px) and (max-width: 960px) {
    section.social {
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
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--Border-Idle, #c2c2c2);
        font-family: "Montserrat";
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4rem;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
        color: transparent;
    }
    .title {
        align-self: stretch;
        color: var(--Text-Primary, #181818);
        text-align: center;

        font-family: "Montserrat";
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }
    .text {
        max-width: 37.5rem;
        align-self: stretch;
        color: var(--Text-Secondary, #484848);
        text-align: center;

        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
        margin: 0 auto;
    }

    .gallery {
        display: flex;
        align-items: center;
        align-content: center;
        gap: 1rem var(--space-200, 1rem);
        /* align-self: stretch; */
        flex-wrap: wrap;
    }
    .box {
        margin: 0 auto;
    }

    .swiper-slide {
        display: flex;
        align-self: flex-start;
        justify-self: flex-start;
        text-align: center;

        justify-content: center;
        align-items: center;
    }
}

@media (min-width: 960px) {
    section.social {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 6rem 4.5rem;
        flex-direction: column;
        align-items: center;
        gap: 4.5rem;
    }
    .section-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }
    .section-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: -5rem;
        align-self: stretch;
    }
    .promo-text {
        color: var(--Text-Background-text, #f5f5f5);
        font-family: "Montserrat";
        font-size: 10rem;
        font-style: normal;
        font-weight: 700;
        line-height: 10rem;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
    }
    .title {
        align-self: stretch;
        color: var(--Text-Primary, #181818);

        font-family: "Montserrat";
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

        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem; /* 155.556% */
        letter-spacing: -0.00563rem;
    }
    .gallery {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        align-self: stretch;
        flex-wrap: wrap;
    }

    .swiper-slide {
        display: flex;
        align-self: flex-start;
        justify-self: flex-start;
        text-align: center;

        justify-content: center;
        align-items: center;
    }
}
</style>
