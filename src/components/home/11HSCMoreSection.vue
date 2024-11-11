<template>
    <section class="hsc-more">
        <div class="section-header">
            <div class="section-title">
                <div class="promo-text">HSC</div>
                <div class="title">To nie tylko sport</div>
            </div>
            <div class="text">
                W naszej holistycznej koncepcji, chcemy zadbać o każdy aspekt
                zdrowia fizycznego jak i psychicznego klientów, którzy do nas
                przychodzą. W związku z tym, serdecznie zachęcamy do zapoznania
                się z naszymi odrębnymi usługami w naszym Centrum w odrębnym,
                przystosowanym do tego gabinecie.
            </div>
        </div>
        <div class="cards">
            <HSCMoreCard
                header="Dietetyka"
                photoSrc="\images\HSCdiettransparent.png"
                alt="Gabinet"
                info="Spersonalizowany plan żywieniowy stworzony przez naszego specjalistę od żywienia, pomoże Ci osiągnąć lepsze wyniki treningowe i poprawi Twoje samopoczucie. Odkryj, jak zdrowe odżywianie może dodać Ci energii i podnieść Twoją formę na wyższy poziom."
                link="/dietetyka"
            />
            <HSCMoreCard
                header="Fizjoterapia"
                photoSrc="\images\kadra\ŁukaszSzefner.png"
                alt="Łukasz Szefner"
                info="Odzyskaj sprawność i pozbądź się bólu, dzięki indywidualnie dopasowanej terapii prowadzonej przez naszych doświadczonych fizjoterapeutów. Skorzystaj z nowoczesnych metod, które przynoszą szybkie i trwałe efekty."
                link="/fizjoterapia"
            />
            <HSCMoreCard
                header="Hipnoterapia"
                photoSrc="\images\kadra\NataliaZieniewicz.png"
                alt="Natalia Zieniewicz"
                info="Zyskaj kontrolę nad swoim życiem, redukując stres i wzmacniając motywację dzięki hipnoterapii. Przekonaj się, jak skutecznie ta metoda może pomóc Ci w osiągnięciu Twoich celów oraz kształtowaniu pozytywnych cech osobowości."
                link="/hipnoterapia"
            />
        </div>
    </section>
</template>

<script setup>
import HSCMoreCard from "../OfferCards/HSCMoreCard.vue";
</script>

<style scoped>
@media (max-width: 640px) {
    section.hsc-more {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 3rem var(--space-200, 1rem);
        flex-direction: column;
        align-items: center;
        gap: 4.5rem;
    }
    .section-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
    }
    .section-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: -2rem;
        align-self: stretch;
    }
    .promo-text {
        align-self: stretch;
        color: var(--Text-Background-text, #f5f5f5);
        text-align: center;
        font-family: Montserrat;
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4rem; /* 100% */
        letter-spacing: 0.08rem;
        text-transform: uppercase;
    }
    .title {
        align-self: stretch;
        color: var(--Text-Primary, #181818);
        text-align: center;

        /* Headings/Mobile/S */
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem; /* 133.333% */
        letter-spacing: 0.0225rem;
        text-transform: uppercase;
    }
    .text {
        max-width: 50rem;

        align-self: stretch;
        color: var(--Text-Secondary, #484848);
        text-align: center;

        /* Body/L/Regular */
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem; /* 155.556% */
        letter-spacing: -0.00563rem;
    }
    .cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        align-self: stretch;
    }
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
        line-height: 1.75rem; /* 155.556% */
        letter-spacing: -0.00563rem;
    }
    .card-photo {
        width: 15rem;
        height: 15rem;
        border-radius: var(--radius-rounded, 62.5rem);
        background: #d9d9d9;
    }
    .card-info {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);
        text-align: center;

        /* Body/M/Regular */
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem; /* 150% */
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

        /* Action/Large/Bold */
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem; /* 133.333% */
        text-transform: uppercase;
        text-decoration: none;
    }
}

@media (min-width: 640px) and (max-width: 960px) {
    section.hsc-more {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 4.5rem var(--space-300, 1.5rem);
        flex-direction: column;
        align-items: center;
        gap: 4.5rem;
    }
    .section-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
    }
    .section-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: -2rem;
        align-self: stretch;
    }
    .promo-text {
        align-self: stretch;
        text-align: center;
        color: var(--Text-Background-text, #f5f5f5);
        text-align: center;
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
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }
    .text {
        max-width: 50rem;
        align-self: center;
        color: var(--Text-Secondary, #484848);
        text-align: center;

        /* Body/L/Regular */
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem; /* 155.556% */
        letter-spacing: -0.00563rem;
    }
    .cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        align-self: stretch;
    }
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
        border-radius: var(--radius-rounded, 62.5rem);
        background: #d9d9d9;
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
    section.hsc-more {
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
        align-items: center;
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
        align-self: stretch;
        text-align: center;
        color: var(--Text-Background-text, #f5f5f5);
        font-family: Montserrat;
        font-size: 10rem;
        font-style: normal;
        font-weight: 700;
        line-height: 10rem; /* 100% */
        letter-spacing: 0.2rem;
        text-transform: uppercase;
    }
    .title {
        align-self: stretch;
        color: var(--Text-Primary, #181818);
        text-align: center;

        /* Headings/Desktop/S */
        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem; /* 150% */
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }
    .text {
        max-width: 50rem;
        align-self: center;
        color: var(--Text-Secondary, #484848);
        text-align: center;

        /* Body/L/Regular */
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem; /* 155.556% */
        letter-spacing: -0.00563rem;
    }
    .cards {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 5.5rem;
        align-self: stretch;
    }
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
        border-radius: var(--radius-rounded, 62.5rem);
        background: #d9d9d9;
    }
    .card-info {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);
        text-align: center;
        min-height: 20vh;

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
</style>
