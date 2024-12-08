<template>
    <div class="card">
        <div class="card-header">{{ header }}</div>
        <div class="card-photo">
            <img :src="photoSrc" :alt="alt" />
        </div>
        <div class="card-info">{{ info }}</div>
        <RouterLink :to="link" class="read-more">Szczegóły</RouterLink>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    header: {
        type: String,
        required: true,
    },
    photoSrc: {
        type: String,
        required: true,
    },
    alt: { type: String, required: true },
    info: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
@media (max-width: 640px) {
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }
    .card-header {
        align-self: stretch;
        color: #000;
        text-align: center;

        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }
    .card-photo {
        width: 15rem;
        height: 15rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: var(--radius-rounded, 62.5rem);
    }
    .card-info {
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
    .read-more {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
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

@media (min-width: 640px) and (max-width: 960px) {
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }
    .card-header {
        align-self: stretch;
        color: #000;
        text-align: center;

        /* Body/L/Bold */
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }
    .card-photo {
        width: 15rem;
        height: 15rem;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: var(--radius-rounded, 62.5rem);
    }
    .card-info {
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
    .read-more {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border: 2px solid var(--Border-Primary, #181818);
        color: var(--Text-Primary, #181818);
        text-align: center;

        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        text-transform: uppercase;
        background-color: transparent;
        text-decoration: none;
    }
}

@media (min-width: 960px) {
    .card {
        display: flex;
        width: 25rem;
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
    }
    .card-header {
        align-self: stretch;
        color: #000;
        text-align: center;

        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }
    .card-photo {
        width: 15rem;
        height: 15rem;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: var(--radius-rounded, 62.5rem);
    }
    .card-info {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);
        text-align: center;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
        min-height: 240px;
    }
    .read-more {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border: 2px solid var(--Border-Primary, #181818);
        color: var(--Text-Primary, #181818);
        text-align: center;

        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        text-transform: uppercase;
        background-color: transparent;
        text-decoration: none;
    }
}
</style>
