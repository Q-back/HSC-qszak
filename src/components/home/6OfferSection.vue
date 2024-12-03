<template>
    <section class="offer">
        <div class="section-header">
            <div class="title-banner">
                <div class="promo-text">OFERTA</div>
                <div class="section-title">ZNAJDŹ COŚ DLA SIEBIE</div>
            </div>
            <p class="section-text">
                W Holistic Sport Center pełnimy szeroki zakres usług, aby w
                pełni zadbać o poszczególne aspekty tj. kondycję, siłę,
                wytrzymałość, szybkość i szeroko pojętą sprawność. Wspólnie z
                wyspecjalizowaną kadrą zadbamy o Twoje zdrowie! Zapoznaj się z
                ofertą poniżej!
            </p>
        </div>
        <div class="services">
            <div class="services-title">Wybrane usługi</div>
            <div class="offer-slider">
                <swiper
                    :grabCursor="true"
                    :centeredSlides="true"
                    :slidesPerView="2"
                    :pagination="true"
                    :modules="modules"
                    :loop="true"
                    :spaceBetween="204"
                    :initialSlide="0"
                    class="swiper-dynamic"
                >
                    <swiper-slide
                        v-for="(offer, index) in selectedServices"
                        :key="index"
                    >
                        <OfferCard
                            :service="offer.service"
                            :subtitle="offer.subtitle"
                            :imgSrc="offer.imgSrc"
                            :description="offer.description"
                        />
                    </swiper-slide>
                </swiper>
                <div
                    class="static"
                    v-for="(offer, index) in selectedServices"
                    :key="index"
                >
                    <OfferCard
                        :service="offer.service"
                        :subtitle="offer.subtitle"
                        :imgSrc="offer.imgSrc"
                        :description="offer.description"
                    />
                </div>
            </div>
        </div>
        <RouterLink to="/oferta" class="full-offer"
            >Zapoznaj się z pełną ofertą</RouterLink
        >
    </section>
</template>

<script>
import { RouterLink } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import OfferCard from "../OfferCards/OfferCard.vue";
import { offerData } from "@/data/offerData";

export default {
    name: "OfferSection",
    components: {
        Swiper,
        SwiperSlide,
        RouterLink,
        OfferCard,
    },
    setup() {
        const selectedOfferServices = [
            "Trening siłowy",
            "Kickboxing",
            "Boks",
            "Stretching",
        ];

        const selectedServices = offerData.filter((service) => {
            if (selectedOfferServices.includes(service.service)) {
                if (
                    service.service === "Kickboxing" ||
                    service.service === "Boks"
                ) {
                    return service.subtitle === "Grupowy";
                }
                if (service.service === "Trening siłowy") {
                    return service.subtitle === "Personalny";
                }
                return true;
            }
            return false;
        });
        return {
            modules: [EffectCoverflow, Pagination],
            selectedServices,
        };
    },
};
</script>

<style scoped>
@media (max-width: 640px) {
    section.offer {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 3rem var(--space-200, 1rem);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        background: var(--Surface-Inverse-primary, #181818);
    }

    .section-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
    }

    .title-banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: -2rem;
    }

    .promo-text {
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4rem;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
        opacity: 0.1;
    }

    .section-title {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;

        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: 0.0225rem;
        text-transform: uppercase;
    }

    p.section-text {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;

        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }

    .services {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
    }

    .services-title {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;

        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: 0.0225rem;
        text-transform: uppercase;
    }

    .offer-slider {
        display: flex;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
        flex-wrap: wrap;
    }

    .full-offer {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        align-self: center;
        background: var(--Surface-Brand, #e30613);
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;

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
    }

    .swiper-slide {
        align-self: center;
        justify-self: center;
        text-align: center;
        font-size: 18px;
        background: var(--Surface-Inverse-primary, #181818);

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
    section.offer {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 4.5rem var(--space-300, 1.5rem);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        background: var(--Surface-Inverse-primary, #181818);
    }

    .section-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
    }

    .title-banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: -2rem;
    }

    .promo-text {
        text-align: center;
        color: var(--Text-Inverse-primary, #fff);
        font-family: Montserrat;
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4rem;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
        opacity: 0.1;
    }

    .section-title {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }

    p.section-text {
        max-width: 35rem;
        align-self: stretch;
        color: var(--Text-Inverse-secondary, #e1e1e1);
        text-align: center;

        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
        margin: 0 auto;
    }

    .services {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
    }

    .services-title {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;

        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: 0.0225rem;
        text-transform: uppercase;
    }

    .offer-slider {
        display: flex;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }

    .full-offer {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: var(--space-200, 1rem);
        background: var(--Surface-Brand, #e30613);
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;

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
    }

    .swiper-slide {
        align-self: center;
        justify-self: center;
        text-align: center;
        font-size: 18px;
        background: var(--Surface-Inverse-primary, #181818);

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
    section.offer {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 6rem 4.5rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4.5rem;
        background: var(--Surface-Inverse-primary, #181818);
    }

    .section-header {
        display: flex;
        max-width: 53.375rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
        margin: 0 auto;
    }

    .title-banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: -5rem;
    }

    .promo-text {
        text-align: center;
        color: var(--Text-Inverse-primary, #fff);
        font-family: Montserrat;
        font-size: 10rem;
        font-style: normal;
        font-weight: 700;
        line-height: 10rem;
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        opacity: 0.1;
    }

    .section-title {
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }

    p.section-text {
        align-self: stretch;
        color: var(--Text-Inverse-secondary, #e1e1e1);
        text-align: center;

        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }

    .services {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 24px;
        align-self: stretch;
    }

    .services-title {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;

        font-family: Montserrat;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2rem;
        letter-spacing: 0.03rem;
        text-transform: uppercase;
    }

    .offer-slider {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: calc(5rem + 5vw);
        align-self: stretch;
        flex-wrap: wrap;
    }

    .full-offer {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background: var(--Surface-Brand, #e30613);
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;

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
    }
}

@media (min-width: 1440px) {
    .offer-slider {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }
}
</style>
