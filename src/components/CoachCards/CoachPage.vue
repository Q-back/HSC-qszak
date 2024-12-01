<template>
    <div class="coach-promo" v-if="coach">
        <div class="photo">
            <img :src="coach.imgSrc" :alt="coach.imgAlt" />
        </div>
        <div class="coach-info">
            <div class="coach-data">
                <p class="coach-position">{{ coach.position }}</p>
                <p class="coach-name">{{ coach.name }}</p>
            </div>
        </div>
    </div>
    <div class="coach-section">
        <div class="coach-section-header">
            <div class="coach-section-header-title">
                <p class="header-title-text">Profil Trenera</p>
            </div>
            <div class="coach-description">
                <div
                    v-for="(line, index) in coach.description.split('\n')"
                    :key="index"
                >
                    {{ line }}
                </div>
            </div>
        </div>
    </div>
    <div class="coach-section-offer">
        <div class="coach-section-offer-header">
            <p
                class="offer-header-text"
                :class="{ hidden: ['ŁS1', 'NZ1'].includes(coach?.id) }"
            >
                Oferowane usługi
            </p>
        </div>
        <div class="offer-slider">
            <div v-for="(offer, index) in filteredOffers" :key="index">
                <OfferCard
                    :service="offer.service"
                    :subtitle="offer.subtitle"
                    :imgSrc="offer.imgSrc"
                    :imgAlt="offer.imgAlt"
                    :description="offer.description"
                />
            </div>
        </div>
    </div>

    <TeamPromo />
    <Footer />
</template>

<script>
import { coachData } from "@/data/coachData";
import { offerData } from "@/data/offerData";
import TeamPromo from "../crew/3TeamPromo.vue";
import Footer from "../home/15Footer.vue";
import OfferCard from "../OfferCards/OfferCard.vue";

export default {
    name: "CoachPage",
    components: {
        TeamPromo,
        Footer,
        OfferCard,
    },
    props: {
        coachName: String,
    },
    data() {
        return {
            coach: null,
        };
    },
    created() {
        this.coach = coachData.find((coach) => coach.name === this.coachName);
    },
    computed: {
        filteredOffers() {
            return offerData.filter((offer) =>
                offer.coach.includes(this.coachName)
            );
        },
    },
};
</script>

<style scoped>
.hidden {
    display: none;
}
@media (max-width: 640px) {
    .coach-promo {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 0rem var(--space-200, 1rem) 3rem var(--space-200, 1rem);
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        background: var(--Surface-Inverse-secondary, #000);
    }
    .photo {
        align-self: center;
    }
    img {
        width: 21.4375rem;
        height: 21.4375rem;
        object-fit: cover;
    }
    .coach-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }
    .coach-data {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-050, 0.25rem);
        align-self: stretch;
    }
    .coach-position {
        align-self: stretch;
        color: #fff;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }
    .coach-name {
        align-self: stretch;
        color: #fff;
        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }
    .coach-section {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 3rem var(--space-200, 1rem);
        flex-direction: column;
        align-items: center;
        gap: 4.5rem;
    }
    .coach-section-header {
        display: flex;
        max-width: 67.125rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--space-200, 1rem);
        align-self: stretch;
    }
    .coach-section-header-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: -5rem;
        align-self: stretch;
    }
    .header-title-text {
        align-self: stretch;
        color: var(--Text-Primary, #181818);
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: 0.0225rem;
        text-transform: uppercase;
    }
    .coach-description {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }
    .coach-section-offer {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 3rem var(--space-200, 1rem);
        flex-direction: column;
        align-items: center;
        gap: var(--space-200, 1rem);
    }
    .coach-section-offer-header {
        display: flex;
        max-width: 67.125rem;
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }
    .offer-header-text {
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
    .offer-slider {
        display: flex;
        max-width: 67.125rem;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 2rem;
        align-self: stretch;
        flex-wrap: wrap;
    }
}

@media (min-width: 640px) and (max-width: 960px) {
    .coach-promo {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 0rem var(--space-300, 1.5rem);
        align-items: center;
        flex-direction: row-reverse;
        gap: var(--space-300, 1.5rem);
        background: var(--Surface-Inverse-secondary, #000);
    }
    .photo {
        align-self: center;
    }
    img {
        width: 23.8125rem;
        height: 23.8125rem;
        object-fit: cover;
    }
    .coach-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        flex: 1 0 0;
    }
    .coach-data {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-200, 1rem);
        align-self: stretch;
    }
    .coach-position {
        align-self: stretch;
        color: #fff;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }
    .coach-name {
        align-self: stretch;
        color: #fff;
        font-family: Montserrat;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3.375rem;
        letter-spacing: 0.05rem;
        text-transform: uppercase;
    }
    .coach-section {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 4.5rem var(--space-300, 1.5rem);
        flex-direction: column;
        align-items: center;
        gap: 4.5rem;
    }
    .coach-section-header {
        display: flex;
        max-width: 67.125rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
    }
    .coach-section-header-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: -5rem;
        align-self: stretch;
    }
    .header-title-text {
        align-self: stretch;
        color: var(--Text-Primary, #181818);
        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }
    .coach-description {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }
    .coach-section-offer {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 4.5rem var(--space-300, 1.5rem);
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    .coach-section-offer-header {
        display: flex;
        max-width: 67.125rem;
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }
    .offer-header-text {
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
    .offer-slider {
        display: flex;
        max-width: 67.125rem;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 2rem;
        align-self: stretch;
        flex-wrap: wrap;
    }
}

@media (min-width: 960px) {
    .coach-promo {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 0rem 11.4375rem;
        align-items: center;
        flex-direction: row-reverse;
        gap: 2.375rem;
        background: var(--Surface-Inverse-secondary, #000);
    }
    .photo {
        align-self: center;
    }
    img {
        width: 32.1875rem;
        height: 32.1875rem;
        object-fit: cover;
    }
    .coach-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4.5rem;
        flex: 1 0 0;
    }
    .coach-data {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }
    .coach-position {
        align-self: stretch;
        color: #fff;
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }
    .coach-name {
        align-self: stretch;
        color: #fff;
        font-family: Montserrat;
        font-size: 3.375rem;
        font-style: normal;
        font-weight: 700;
        line-height: 5rem;
        letter-spacing: 0.0675rem;
        text-transform: uppercase;
    }
    .coach-section {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 6rem 4.5rem;
        flex-direction: column;
        align-items: center;
        gap: 4.5rem;
    }
    .coach-section-header {
        display: flex;
        max-width: 67.125rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
        margin: 0 auto;
    }
    .coach-section-header-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: -5rem;
        align-self: stretch;
    }
    .header-title-text {
        align-self: stretch;
        color: var(--Text-Primary, #181818);
        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }
    .coach-description {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }
    .coach-section-offer {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 6rem 0rem;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    .coach-section-offer-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }
    .offer-header-text {
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
    .offer-slider {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 2rem;
        align-self: stretch;
        flex-wrap: wrap;
    }
}
</style>
