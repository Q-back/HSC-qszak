<template>
    <div class="promo-content">
        <p class="promo-text">Zacznij swoją zmianę od pierwszego kroku!</p>
        <button class="primary" @click="showModal">Dołącz do nas!</button>
        <Modal2 :isVisible="isModalVisible" @close="closeModal"></Modal2>
    </div>
</template>

<script>
import { ref } from "vue";
import Modal2 from "../home/Modal2.vue";

export default {
    name: "TeamPromo",
    components: {
        Modal2,
    },

    setup() {
        const isModalVisible = ref(false);
        const showModal = () => {
            isModalVisible.value = true;
        };

        const closeModal = () => {
            isModalVisible.value = false;
        };

        return {
            isModalVisible,
            showModal,
            closeModal,
        };
    },
};
</script>

<style scoped>
@media (max-width: 640px) {
    .promo-content {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        height: 30rem;
        padding: 0rem var(--space-200, 1rem);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4.5rem;
        background: linear-gradient(
                0deg,
                var(--Background-shade-Moderate, rgba(0, 0, 0, 0.6)) 0%,
                var(--Background-shade-Moderate, rgba(0, 0, 0, 0.6)) 100%
            ),
            url(/public/images//promo/CAŁA\ EKIPA.png) lightgray 50% / cover
                no-repeat;
    }

    .promo-text {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;

        /* Headings/Mobile/L */
        font-family: Montserrat;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2rem; /* 133.333% */
        letter-spacing: 0.03rem;
        text-transform: uppercase;
    }

    .primary {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: var(--space-200, 1rem);
        /* align-self: stretch; */
        background: var(--Surface-Brand, #e30613);
        border-color: #e30613;

        color: var(--Text-Inverse-primary, #fff);
        text-align: center;

        /* Action/Large/Bold */
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem; /* 133.333% */
        text-transform: uppercase;
        cursor: pointer;
    }
}

@media (min-width: 640px) {
    .promo-content {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        height: 30rem;
        padding: 0rem 4.5rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4.5rem;
        flex-shrink: 0;
        background: linear-gradient(
                0deg,
                var(--Background-shade-Moderate, rgba(0, 0, 0, 0.6)) 0%,
                var(--Background-shade-Moderate, rgba(0, 0, 0, 0.6)) 100%
            ),
            url(/public/images//promo/CAŁA\ EKIPA.png) lightgray 50% / cover
                no-repeat;
    }

    .promo-text {
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;

        /* Headings/Desktop/L */
        font-family: Montserrat;
        font-size: 3rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4rem; /* 133.333% */
        letter-spacing: 0.06rem;
        text-transform: uppercase;
    }
    .primary {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: var(--space-200, 1rem);
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        background: var(--Surface-Brand, #e30613);
        border-color: #e30613;

        /* Action/Large/Bold */
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem; /* 133.333% */
        text-transform: uppercase;
        cursor: pointer;
    }
}
</style>
