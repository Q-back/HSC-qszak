<template>
    <section class="about-us">
        <div class="title-banner">
            <div class="promo-text">O nas</div>
            <div class="section-title">
                ZAPOZNAJ SIĘ Z NASZYM CENTRUM, STWORZONYM Z PASJI DO SPORTU ORAZ
                ZAMIŁOWANIA DO POMOCY INNYM
            </div>
        </div>
        <div class="about-us-content">
            <img src="\images\photo\maingym.jpg" alt="Siłka" />
            <div class="content">
                <p class="text">
                    Nasze holistyczne centrum sportu znajduje się bardzo blisko
                    centrum Wrocławia i spełnia wszystkie wymagania, aby
                    kompletnie zadbać o każdego podopiecznego. Będąc trenerami
                    na rynku już kilkanaście lat, zapoznaliśmy się z szerokim
                    zakresem potrzeb osób, które przychodzą do nas na treningi.
                    Dzięki zdobytemu doświadczeniu, zadbaliśmy o każdy szczegół
                    współpracy, aby móc go nazwać - holistycznym. W naszym
                    studiu treningowym KAŻDY będzie mógł się poczuć w pełni
                    zaopiekowany! Zapoznaj się z naszą ofertą!
                </p>
                <RouterLink to="/o-nas" class="read-more"
                    >Dowiedz się więcej</RouterLink
                >
            </div>
        </div>
    </section>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
    name: "AboutUsSection",
    components: {
        RouterLink,
    },
};
</script>

<style scoped>
@media (max-width: 640px) {
    .about-us {
        display: flex;
        width: calc(100vw - var(--scrollbarWidth));
        padding: 3rem var(--space-200, 1rem);
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .title-banner {
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

    .section-title {
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

    .about-us-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }

    img {
        width: 80%;
        height: 30%;
        margin: 0 auto;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
        flex: 1 0 0;
    }

    p.text {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);
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
        cursor: pointer;
    }
}

@media (min-width: 640px) and (max-width: 960px) {
    .about-us {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 4.5rem var(--space-200, 1rem);
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .title-banner {
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

    .section-title {
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

    .about-us-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }

    img {
        width: 70%;
        height: 30%;
        margin: 0 auto;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        flex: 1 0 0;
    }

    p.text {
        color: var(--Text-Secondary, #484848);
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
        align-self: center;
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
}

/* wersja na komputer */
@media (min-width: 961px) {
    .about-us {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 6rem 4.5rem;
        flex-direction: column;
        align-items: center;
        gap: 4.5rem;
    }

    .title-banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: -5rem;
        align-self: stretch;
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

    .section-title {
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

    .about-us-content {
        display: flex;
        align-items: center;
        align-content: center;
        gap: 2rem;
        align-self: stretch;
        flex-wrap: wrap;
    }

    img {
        height: 26.4375rem;
        min-width: 25rem;
        max-width: 50rem;
        flex: 1 0 0;
        margin: 0 auto;
    }

    .content {
        display: flex;
        /* width: 39.375rem; */
        /* max-width: 50rem;
        height: 26.4375rem; */
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        margin: 0 auto;
    }

    p.text {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }

    .read-more {
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
}

@media (min-width: 1230px) {
    .about-us-content {
        align-items: flex-start;
        align-content: flex-start;
    }

    .content {
        display: flex;
        /* width: 39.375rem; */
        width: 36.375rem;
        height: 26.4375rem;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
    }

    p.text {
        flex: 1 0 0;
    }
}
</style>
