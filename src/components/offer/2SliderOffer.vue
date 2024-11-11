<template>
    <div class="offer-slider">
        <OfferCard
            v-for="(offer, index) in offers"
            :key="index"
            :service="offer.service"
            :subtitle="offer.subtitle"
            :imgSrc="offer.imgSrc"
            :description="offer.description"
        />
    </div>
</template>

<script>
import { offerData } from "@/data/offerData";
import OfferCard from "../OfferCards/OfferCard.vue";

export default {
    name: "OfferSlider",
    components: {
        OfferCard,
    },
    data() {
        return {
            offers: offerData,
        };
    },
};
</script>

<style scoped>
.offer-slider {
    display: flex;
    padding: 6rem 4.5rem;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 2rem;
    align-self: stretch;
    flex-wrap: wrap;
}
</style>
