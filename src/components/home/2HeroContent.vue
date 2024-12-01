<template>
    <div class="hero-content">
        <div class="hero-text">
            <div class="hero-text-top-row">
                <div class="hero-text-top">
                    <ul>
                        <li>Zawsze jest</li>
                        <li>powód, aby</li>
                    </ul>
                </div>
            </div>
            <div class="hero-text-bottom-row">
                <p
                    class="hero-text-bottom-slider"
                    :class="{ fadeOut: isFading }"
                >
                    {{ currentWord }}
                </p>
            </div>
        </div>
        <div class="hero-buttons">
            <button class="contact" @click="showModal">Napisz do nas</button>
            <Modal2 :isVisible="isModalVisible" @close="closeModal"></Modal2>
            <RouterLink to="/oferta" class="offer"
                >Przeglądaj ofertę</RouterLink
            >
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import Modal2 from "./Modal2.vue";

export default {
    name: "HeroContent",
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

        // Słowa do wyświetlania
        const words = ["zacząć", "kontynuować", "wrócić", "powstać"];
        const currentWord = ref(words[0]);
        const isFading = ref(false);
        let wordIndex = 0;

        const startWordRotation = () => {
            wordIndex = 0;
            const interval = setInterval(() => {
                // Zacznij proces fade out
                isFading.value = true;

                // Po 0,5 sekundy zmień słowo i fade in
                setTimeout(() => {
                    wordIndex = (wordIndex + 1) % words.length;
                    currentWord.value = words[wordIndex];
                    isFading.value = false; // Wyłącz efekt fade out
                }, 500); // Czas fade-out
            }, 2500); // Cały cykl trwa 2,5 sekundy

            // Oczyść interwał przy demontażu komponentu
            onUnmounted(() => {
                clearInterval(interval);
            });
        };

        onMounted(() => {
            startWordRotation();
        });

        return {
            isModalVisible,
            showModal,
            closeModal,
            currentWord,
            isFading,
        };
    },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@media (max-width: 867px) {
    .hero-text-bottom-slider {
        font-size: 2rem; /* Zmniejsz rozmiar tekstu dla lepszej responsywności */
    }
}
/* wersja mobilna */
@media (max-width: 640px) {
    .hero-content {
        display: flex;
        width: calc(100vw - var(--scrollbarWidth));
        height: 46.25rem;
        padding: 0rem var(--space-200, 1rem);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10rem;
        flex-shrink: 0;
        background: linear-gradient(
                0deg,
                var(--Background-shade-Moderate, rgba(0, 0, 0, 0.6)) 0%,
                var(--Background-shade-Moderate, rgba(0, 0, 0, 0.6)) 100%
            ),
            url(/public/images//promo/CAŁA\ EKIPA.png) lightgray 50% / cover
                no-repeat;
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-self: stretch;
    }

    .hero-text-top-row {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }

    .hero-text-top {
        color: var(--Text-Inverse-primary, #fff);

        /* Headings/Mobile/XXL */
        font-family: "Montserrat";
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3.375rem; /* 135% */
        letter-spacing: 0.05rem;
        text-transform: uppercase;
    }

    .hero-text-bottom-row {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
        white-space: nowrap;
    }

    .hero-text-bottom-slider {
        /* Headings/Mobile/XXL */
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--Border-Secondary, #fff);
        font-family: "Montserrat";
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3.375rem; /* 135% */
        letter-spacing: 0.05rem;
        text-transform: uppercase;
        color: transparent;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .hero-buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        /* align-self: stretch; */
    }

    button.contact {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background: var(--Surface-Brand, #e30613);
        border-color: #e30613;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        align-self: stretch;

        /* Action/Large/Bold */
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem; /* 133.333% */
        text-transform: uppercase;
    }

    .offer {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border: 2px solid var(--Border-Secondary, #fff);
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;

        /* Action/Large/Bold */
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem; /* 133.333% */
        text-transform: uppercase;
        background-color: transparent;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    .hero-text-bottom-slider {
        opacity: 1;
        transition: opacity 0.5s ease-in-out; /* Przejście płynne przez 0.5 sekundy */
    }

    .hero-text-bottom-slider.fadeOut {
        opacity: 0; /* Ukrycie tekstu (zanikanie) */
    }
}

/* wersja na tablet */
@media (min-width: 640px) and (max-width: 960px) {
    .hero-content {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        height: 48.25rem;
        padding: 0rem 4.5rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4.5rem;
        /* flex-shrink: 0; */
        background: linear-gradient(
                0deg,
                var(--Background-shade-Moderate, rgba(0, 0, 0, 0.6)) 0%,
                var(--Background-shade-Moderate, rgba(0, 0, 0, 0.6)) 100%
            ),
            url(/public/images//promo/CAŁA\ EKIPA.png) lightgray 50% / cover
                no-repeat;
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: stretch;
    }

    .hero-text-top-row {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 6rem;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
    }

    .hero-text-bottom-row {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
        white-space: nowrap;
    }

    .hero-text-bottom-slider {
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--Border-Secondary, #fff);
        font-family: "Montserrat";
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 6rem; /* 150% */
        letter-spacing: 0.08rem;
        text-transform: uppercase;
        color: transparent;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .hero-buttons {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-start;
        gap: 2rem;
        align-self: stretch;
        flex-wrap: wrap;
    }

    button.contact {
        display: flex;
        width: 20rem;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background: var(--Surface-Brand, #e30613);
        border: 2px solid var(--Border-Primary, #e30613);
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        cursor: pointer;

        /* Action/Large/Bold */
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem; /* 133.333% */
        text-transform: uppercase;
    }

    .offer {
        display: flex;
        width: 20rem;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border: 2px solid var(--Border-Secondary, #fff);
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        background-color: transparent;

        /* Action/Large/Bold */
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem; /* 133.333% */
        text-transform: uppercase;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    .hero-text-bottom-slider {
        opacity: 1;
        transition: opacity 0.5s ease-in-out; /* Przejście płynne przez 0.5 sekundy */
    }

    .hero-text-bottom-slider.fadeOut {
        opacity: 0; /* Ukrycie tekstu (zanikanie) */
    }
}

/* wersja na komputer */
@media (min-width: 960px) {
    .hero-content {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        height: 48.25rem;
        padding: 0rem 4.5rem;
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

    .hero-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: stretch;
    }

    .hero-text-top-row {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 6rem;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
    }

    .hero-text-bottom-row {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }

    .hero-text-bottom-slider {
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--Border-Secondary, #f5f5f5);
        font-family: "Montserrat";
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 6rem;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
        color: transparent;
    }

    .hero-buttons {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-start;
        gap: 2rem;
        align-self: stretch;
        flex-wrap: wrap;
    }

    button.contact {
        display: flex;
        width: 20rem;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background: var(--Surface-Brand, #e30613);
        border: 2px solid var(--Border-Primary, #e30613);
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        cursor: pointer;

        /* Action/Large/Bold */
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem; /* 133.333% */
        text-transform: uppercase;
    }

    .offer {
        display: flex;
        width: 20rem;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        border: 2px solid var(--Border-Secondary, #fff);
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        background-color: transparent;

        /* Action/Large/Bold */
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem; /* 133.333% */
        text-transform: uppercase;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    .hero-text-bottom-slider {
        opacity: 1;
        transition: opacity 0.5s ease-in-out; /* Przejście płynne przez 0.5 sekundy */
    }

    .hero-text-bottom-slider.fadeOut {
        opacity: 0; /* Ukrycie tekstu (zanikanie) */
    }
}
</style>
