<template>
    <div
        class="offer-card"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <div
            class="offer-card-top"
            :style="{
                backgroundImage: `url(${imgSrc})`,
                filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
                transition: 'filter 0.3s ease',
            }"
        >
            <div class="service-name">{{ service }}</div>
            <div class="subtitle">{{ subtitle }}</div>
        </div>
        <div class="offer-card-bottom">
            <div class="text">{{ description }}</div>
            <RouterLink
                class="more"
                :to="{
                    name: 'Karta-Usługi',
                    params: { service: service, subtitle: subtitle },
                }"
                >Szczegóły usługi</RouterLink
            >
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { RouterLink } from "vue-router";

export default {
    name: "OfferCard",
    props: {
        service: String,
        subtitle: String,
        imgSrc: String,
        imgAlt: String,
        description: String,
    },
    components: [RouterLink],
    setup() {
        const isHovered = ref(false); // Zmienna śledząca hover

        return {
            isHovered,
        };
    },
};
</script>

<style scoped>
@media (max-width: 960px) {
    .offer-card {
        display: flex;
        width: 18.75rem;
        height: 27rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0.25rem;
        background: var(--Surface-Secondary, #f5f5f5);
        background-image: cover;
    }

    .offer-card-top {
        display: flex;
        padding: 3rem 0rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--space-050, 0.25rem);
        flex: 1 0 0;
        align-self: stretch;
        background: linear-gradient(
            0deg,
            var(--Background-shade-Moderate, rgba(0, 0, 0, 0.6)) 0%,
            var(--Background-shade-Moderate, rgba(0, 0, 0, 0.6)) 100%
        );
        filter: grayscale(100%);
        transition: filter 0.3s ease;
    }

    .offer-card-top:hover {
        filter: grayscale(0%);
    }

    img {
        width: 100%;
        height: auto;
        display: block;
    }

    .service-name {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.25rem;
        letter-spacing: 0.02rem;
        text-transform: uppercase;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .subtitle {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .offer-card-bottom {
        display: flex;
        padding: var(--space-300, 1.5rem);
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }

    .text {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        align-self: stretch;
        overflow: hidden;
        color: var(--Text-Secondary, #484848);
        text-align: center;
        text-overflow: ellipsis;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }

    .more {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: var(--space-200, 1rem);
        align-self: stretch;
        border: 2px solid var(--Border-Primary, #181818);

        color: var(--Text-Primary, #181818);
        text-align: center;
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        text-transform: uppercase;
        text-decoration: none;
    }
}

@media (min-width: 960px) {
    .offer-card {
        display: flex;
        width: 18.75rem;
        height: 27rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0.25rem;
        background: var(--Surface-Secondary, #f5f5f5);
    }

    .offer-card-top {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--space-050, 0.25rem);
        flex: 1 0 0;
        align-self: stretch;
        background: linear-gradient(
            0deg,
            var(--Background-shade-Moderate, rgba(0, 0, 0, 0.6)) 0%,
            var(--Background-shade-Moderate, rgba(0, 0, 0, 0.6)) 100%
        );
    }

    .service-name {
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
        background-color: rgba(0, 0, 0, 0.3);
    }

    .subtitle {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .offer-card-bottom {
        display: flex;
        padding: var(--space-300, 1.5rem);
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }

    .text {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        align-self: stretch;
        overflow: hidden;
        color: var(--Text-Secondary, #484848);
        text-align: center;
        text-overflow: ellipsis;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }

    .more {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: var(--space-200, 1rem);
        align-self: stretch;
        border: 2px solid var(--Border-Primary, #181818);

        color: var(--Text-Primary, #181818);
        text-align: center;
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        text-transform: uppercase;
        text-decoration: none;
    }
}
</style>
