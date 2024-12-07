<template>
    <section class="opinions">
        <div class="section-header">
            <div class="section-title">
                <div class="promo-text">Opinie</div>
                <div class="title">Tak mówią o nas nasi klienci</div>
            </div>
            <div class="text">
                Na naszej ścieżce trenerskiej pojawiło się wiele osób, które
                podjęły się współpracy z nami i kontynuują ją od nawet
                kilkunastu lat. Wiele osób nam zaufało, za co serdecznie
                dziękujemy, a do zapoznania się z ich opiniami zapraszamy
                poniżej!
            </div>
        </div>
        <div class="card-slider">
            <div class="card">
                <div class="card-photo">
                    <div class="card-photo-text">A</div>
                </div>
                <div class="card-name">Agata</div>
                <div class="card-text">
                    HSC to nowoczesne, czyste i ładne wnętrze. Profesjonalni,
                    kompetentni i zawsze uśmiechnięci trenerzy tworzą przyjemny
                    klimat tego miejsca, co skutkuje tym, że treningi stają się
                    czystą przyjemnością, a nie tylko smutnym obowiązkiem.
                    Polecam wszystkim z całego serca!
                </div>
            </div>
            <div class="card">
                <div class="card-photo">
                    <div class="card-photo-text">K</div>
                </div>
                <div class="card-name">Katarzyna</div>
                <div class="card-text">
                    Pierwsze i jedyne takie miejsce we Wrocławiu dla osób, które
                    chcą zadbać o swoje zdrowie i sylwetkę. Profesjonalna kadra,
                    która z należytą starannością zajmuje się Podopiecznymi.
                    Miejsce ze wspaniałą sportową atmosferą , dla każdego.
                    Polecam!.
                </div>
            </div>
            <div class="card">
                <div class="card-photo">
                    <div class="card-photo-text">G</div>
                </div>
                <div class="card-name">Gerard</div>
                <div class="card-text">
                    Super miejsce do treningu. Nowoczesne i przestronne wnętrze
                    pachnące nowością i świeżością, z osobną salą przeznaczoną
                    do treningów sztuk walki. Wykwalifikowana kadra trenerska.
                    Miejsce spełniające wszelkie niezbędne warunki do
                    „odhaczania” kolejnych celów treningowych. Polecam
                    serdecznie.
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ReviewsSection",
};
</script>

<style scoped>
@media (max-width: 640px) {
    section.opinions {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 3rem var(--space-200, 1rem);
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        background: var(--Surface-Inverse-primary, #181818);
    }
    .section-header {
        display: flex;
        max-width: 67.125rem;
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
    .title {
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
    .text {
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
    .card-slider {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }
    .card {
        display: flex;
        padding: var(--space-300, 1.5rem) var(--space-300, 1.5rem) 3rem
            var(--space-300, 1.5rem);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--space-200, 1rem);
        align-self: stretch;
        background: var(--Surface-Primary, #fff);
        box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.08);
    }
    .card-photo {
        display: flex;
        padding: var(--space-150, 0.75rem);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: var(--radius-rounded, 62.5rem);
        background: #fb8903;
    }
    .card-photo-text {
        display: flex;
        width: 2.5rem;
        height: 2.5rem;
        flex-direction: column;
        justify-content: center;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }
    .card-name {
        /* width: 80%; */
        color: var(--Text-Primary, #181818);
        text-align: center;
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }
    .card-text {
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
}

@media (min-width: 640px) and (max-width: 960px) {
    section.opinions {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 4.5rem var(--space-300, 1.5rem);
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        background: var(--Surface-Inverse-primary, #181818);
    }
    .section-header {
        display: flex;
        max-width: 67.125rem;
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
    .title {
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
    .text {
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
    .card-slider {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        overflow: hidden;
    }
    .card {
        display: flex;
        padding: var(--space-300, 1.5rem) var(--space-300, 1.5rem) 3rem
            var(--space-300, 1.5rem);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--space-200, 1rem);
        align-self: stretch;
        background: var(--Surface-Primary, #fff);
        box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.08);
        max-width: 90vw;
    }
    .card-photo {
        display: flex;
        padding: var(--space-150, 0.75rem);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: var(--radius-rounded, 62.5rem);
        background: #fb8903;
    }
    .card-photo-text {
        display: flex;
        width: 2.5rem;
        height: 2.5rem;
        flex-direction: column;
        justify-content: center;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;

        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }
    .card-name {
        width: 25.8125rem;
        color: var(--Text-Primary, #181818);
        text-align: center;
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }
    .card-text {
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
}

@media (min-width: 960px) {
    section.opinions {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 6rem 4.5rem;
        flex-direction: column;
        align-items: center;
        gap: 4.5rem;
        background: var(--Surface-Inverse-primary, #181818);
    }
    .section-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }
    .section-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: -5rem;
        align-self: stretch;
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
    .title {
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
    .text {
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
    .card-slider {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        overflow: hidden;
    }
    .card {
        display: flex;
        padding: var(--space-300, 1.5rem) var(--space-300, 1.5rem) 3rem
            var(--space-300, 1.5rem);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--space-200, 1rem);
        align-self: stretch;
        background: var(--Surface-Primary, #fff);
        box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.08);
        max-width: 80vw;
    }
    .card-photo {
        display: flex;
        padding: var(--space-150, 0.75rem);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: var(--radius-rounded, 62.5rem);
        background: #fb8903;
    }
    .card-photo-text {
        display: flex;
        width: 2.5rem;
        height: 2.5rem;
        flex-direction: column;
        justify-content: center;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;

        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }
    .card-name {
        width: 25.8125rem;
        color: var(--Text-Primary, #181818);
        text-align: center;

        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }
    .card-text {
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

    @media (min-width: 1250px) {
        .card-slider {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 2rem;
        }

        .card {
            display: flex;
            width: 30vw;
            padding: var(--space-300, 1.5rem) var(--space-300, 1.5rem) 3rem
                var(--space-300, 1.5rem);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: var(--space-200, 1rem);
        }
    }
}
</style>
