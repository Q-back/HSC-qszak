<template>
    <div class="offer-hero">
        <div class="offer-promo">
            <div class="subtitle">Gabinet</div>
            <div class="service">Dietetyka</div>
        </div>
    </div>
    <div class="description-section">
        <div class="text-block">
            <p class="text-block-header">Dietetyka</p>
            <p class="text-block-text">
                Dział Dietetyki w Holistic Sport Center został stworzony z myślą
                o kompleksowym wsparciu osób, które pragną świadomie dbać o
                swoje zdrowie, kondycję oraz osiągać lepsze efekty treningowe.
                Nasze centrum oferuje indywidualne konsultacje dietetyczne
                prowadzone przez wykwalifikowanego specjalistę, który pomoże
                dobrać odpowiedni plan żywieniowy, dostosowany do indywidualnych
                celów, trybu życia oraz preferencji każdej osoby. Dietetyk
                dostępny w naszym gabinecie posiada szeroką wiedzę na temat
                zbilansowanej diety oraz jej wpływu na organizm, a także
                doświadczenie w pracy z osobami na różnych poziomach
                zaawansowania treningowego – od początkujących po zaawansowanych
                sportowców.<br />Podczas konsultacji możliwe jest omówienie
                aktualnych nawyków żywieniowych, identyfikacja obszarów
                wymagających poprawy oraz opracowanie planu, który wspomoże
                zarówno zdrowie fizyczne, jak i psychiczne.<br />Zapraszamy do
                korzystania z profesjonalnych usług dietetycznych, które
                wspierają osiąganie trwałych efektów oraz poprawiają jakość
                życia. W Holistic Sport Center stawiamy na holistyczne podejście
                do zdrowia – łączymy wiedzę o treningu z odpowiednią dietą, aby
                nasi klienci mogli cieszyć się pełnią sił i energii na co dzień.
            </p>
        </div>
        <div class="photo">
            <img src="/images/HSCdiettransparent.png" alt="" />
        </div>
    </div>
    <div class="service-section">
        <p class="service-section-header">Zakres usług</p>
        <div class="service-section-block">
            <ul class="service-section-block-column">
                <li class="service-section-block-column-text">
                    <span>Pierwsza konsultacja dietetyczna:</span>
                    Szczegółowy wywiad zdrowotny, obejmujący historię medyczną,
                    obecny stan zdrowia, aktywność fizyczną i preferencje
                    żywieniowe pacjenta. Analiza składu ciała za pomocą
                    specjalistycznego sprzętu, aby określić m.in. poziom tkanki
                    tłuszczowej, masę mięśniową i inne wskaźniki metaboliczne.
                    Omówienie celów pacjenta (utrata masy ciała, zwiększenie
                    masy mięśniowej, poprawa wyników sportowych, lepsze
                    samopoczucie).
                </li>
                <li class="service-section-block-column-text">
                    <span>Indywidualny plan żywieniowy:</span> Opracowanie
                    spersonalizowanej diety, dostosowanej do stylu życia i
                    preferencji pacjenta. Ustalenie harmonogramu posiłków, który
                    będzie realistyczny i łatwy do wdrożenia w codzienne życie.
                    Regularne monitorowanie postępów i dostosowywanie diety na
                    kolejnych wizytach.
                </li>
                <li class="service-section-block-column-text">
                    <span>Wizyty kontrolne:</span> Ocena postępów pacjenta i
                    wprowadzenie ewentualnych zmian w planie żywieniowym. Pomiar
                    składu ciała, aby śledzić zmiany w kompozycji masy ciała, a
                    nie tylko wagi. Konsultacje dotyczące wyzwań i trudności w
                    utrzymaniu diety, motywowanie pacjenta i udzielanie
                    wskazówek.
                </li>
                <li class="service-section-block-column-text">
                    <span>Diety terapeutyczne:</span> Tworzenie planów
                    żywieniowych wspierających terapię różnych schorzeń, takich
                    jak insulinooporność, nadciśnienie, cukrzyca, choroby
                    tarczycy czy choroby układu pokarmowego. Edukacja pacjenta w
                    zakresie stosowania zasad zdrowego odżywiania, które mogą
                    wspierać terapię i zapobiegać zaostrzeniu objawów
                    chorobowych.
                </li>
                <li class="service-section-block-column-text">
                    <span>Dieta i sport:</span> Konsultacje dla osób aktywnych
                    fizycznie i sportowców, w tym opracowanie diety wspierającej
                    regenerację i poprawę wyników sportowych. Wsparcie dla osób
                    uczęszczających na treningi (takie jak kickboxing czy BJJ w
                    naszym centrum), aby pomóc im optymalizować dietę pod kątem
                    wytrzymałości, siły i wydolności.
                </li>
                <li class="service-section-block-column-text">
                    <span>Psychodietetyka:</span> Podejście holistyczne do zmian
                    nawyków żywieniowych i wsparcie emocjonalne, aby pomóc
                    pacjentom w długotrwałym wprowadzaniu zmian. Współpraca z
                    naszym hipnoterapeutą i psychodietetykiem, Natalią, może
                    pomóc osobom, które zmagają się z trudnościami w zmianie
                    relacji z jedzeniem i wykształceniu zdrowych nawyków
                    żywieniowych.
                </li>
            </ul>
        </div>
    </div>
    <div class="contact-block">
        <div class="contact">
            <p class="contact-header">KONTAKT</p>
            <div class="contact-info">
                <div class="phone"><Phone />+ 48 793 951 015</div>
                <div class="mail"><Mail />holisticsportcenter@gmail.com</div>
            </div>
        </div>
        <div class="working-hours">
            <p class="working-hours-header">Godziny pracy</p>
            <div class="hours-box">
                <div class="hours">
                    <p class="day">Poniedziałek - Piątek</p>
                    <p class="time">7:00-21:00</p>
                </div>
            </div>
        </div>
    </div>
    <div class="promo">
        <div class="video-container">
            <video
                class="video-player"
                :src="VideoSrc"
                autoplay
                loop
                muted
                playsinline
            ></video>
            <div class="content">
                <p class="text">Trenuj z nami</p>
                <button class="primary" @click="showModal">Zapisz się!</button>
                <Modal :isVisible="isModalVisible" @close="closeModal"></Modal>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Footer from "../home/15Footer.vue";
import VideoContent from "@/assets/VideoContent.mp4";
import Phone from "../icons/phone.vue";
import Mail from "../icons/mail.vue";

export default {
    name: "Diet",
    components: {
        Footer,
        Phone,
        Mail,
    },
    data() {
        return {
            VideoSrc: VideoContent,
        };
    },
};
</script>

<style scoped>
@media (max-width: 640px) {
    .offer-hero {
        width: 100%;
        height: 30rem;
        padding: 0rem var(--space-200, 1rem);
        display: flex;
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
            url(/public/images/promo/gabinet.jpg) lightgray 50% / cover
                no-repeat;
    }

    .offer-promo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        margin: auto 0;
    }

    .subtitle {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }

    .service {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3.375rem;
        letter-spacing: 0.05rem;
        text-transform: uppercase;
    }

    .description-section {
        display: flex;
        width: 90vw;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        margin: 5vh 2vw;
    }

    .text-block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-200, 1rem);
        align-self: stretch;
    }

    .text-block-header {
        align-self: stretch;
        color: #000;
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: 0.0225rem;
        text-transform: uppercase;
    }

    .text-block-text {
        align-self: stretch;
        color: var(--Text-Background-text-inverse, #313131);
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }
    .photo {
        height: 21.4375rem;
    }

    img {
        height: 343px;
        align-self: stretch;
    }

    .service-section {
        display: flex;
        width: 90vw;
        padding: 3rem var(--space-100, 0.5rem);
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        border-radius: var(--Corner-Small, 0.5rem);
        background: var(--Surface-Secondary, #f5f5f5);
        margin: 0 auto;
    }

    .service-section-header {
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

    .service-section-block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }

    .service-section-block-column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }

    .service-section-block-column-text {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }

    .service-section-block-column-text span {
        font-weight: 700;
    }

    .contact-block {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 3rem var(--space-200, 1rem);
        flex-direction: column;
        align-items: center;
        gap: 4.5rem;
        border-radius: var(--Corner-None, 0rem);
        background: var(--Surface-Inverse-primary, #181818);
        margin-top: 5vh;
    }

    .contact {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }

    .contact-header,
    .working-hours-header {
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

    .contact-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-200, 1rem);
        align-self: stretch;
    }

    .phone,
    .mail {
        display: flex;
        align-items: center;
        gap: var(--space-150, 0.75rem);
        color: #fff;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }

    .working-hours {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }

    .hours-box {
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        justify-content: center;
        gap: var(--space-300, 1.5rem) var(--space-200, 1rem);
        align-self: stretch;
        flex-wrap: wrap;
    }

    .hours {
        display: flex;
        min-width: 7.5rem;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-100, 0.5rem);
    }

    .day {
        align-self: stretch;
        color: var(--Text-Inverse-secondary, #e1e1e1);
        text-align: center;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }

    .time {
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

    .promo {
        width: calc(100svw - var(--scrollbarWidth));
        background: rgba(7, 7, 7, 0.5);
    }

    .video-container {
        position: relative;
        width: 100%;
        height: 50vh;
        padding: 0rem var(--space-200, 1rem);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .video-player {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    .content {
        position: relative;
        z-index: 1;
        text-align: center;
    }

    p.text {
        width: 100%;
        color: #fff;
        text-align: center;
        font-family: Montserrat;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3.5rem;
        letter-spacing: 0.09rem;
        text-transform: uppercase;
    }

    button.primary {
        margin-top: 2rem;
        padding: 1.25rem 3rem;
        justify-content: center;
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
        cursor: pointer;
        border-color: #e30613;
    }
}

@media (min-width: 640px) and (max-width: 960px) {
    .offer-hero {
        width: 100%;
        height: 30rem;
        padding: 0rem var(--space-200, 1rem);
        display: flex;
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
            url(/public/images/promo/gabinet.jpg) lightgray 50% / cover
                no-repeat;
    }

    .offer-promo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        margin: auto 0;
    }

    .subtitle {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }

    .service {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3.375rem;
        letter-spacing: 0.05rem;
        text-transform: uppercase;
    }

    .description-section {
        display: flex;
        width: 90vw;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        margin: 5vh 2vw;
    }

    .text-block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-200, 1rem);
    }

    .text-block-header {
        color: #000;
        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }

    .text-block-text {
        align-self: stretch;
        color: var(--Text-Background-text-inverse, #313131);
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }
    .photo {
        max-width: 521px;
        max-height: 521px;
    }

    img {
        max-width: 521px;
        max-height: 521px;
    }

    .service-section {
        display: flex;
        width: 90vw;
        padding: 3rem 2rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        border-radius: var(--Corner-Small, 0.5rem);
        background: var(--Surface-Secondary, #f5f5f5);
        margin: 0 auto;
    }

    .service-section-header {
        width: 100%;
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

    .service-section-block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }

    .service-section-block-column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }

    .service-section-block-column-text {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }

    .service-section-block-column-text span {
        font-weight: 700;
    }

    .contact-block {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 3rem var(--space-300, 1.5rem);
        flex-direction: column;
        align-items: center;
        gap: 4.5rem;
        border-radius: var(--Corner-None, 0rem);
        background: var(--Surface-Inverse-primary, #181818);
        margin-top: 5vh;
    }

    .contact {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }

    .contact-header,
    .working-hours-header {
        width: 100%;
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

    .contact-info {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 4.5rem;
        align-self: stretch;
    }

    .phone,
    .mail {
        display: flex;
        align-items: center;
        gap: var(--space-150, 0.75rem);
        color: #fff;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }

    .working-hours {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }

    .hours-box {
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        gap: 2rem;
        align-self: stretch;
        flex-wrap: wrap;
    }

    .hours {
        display: flex;
        min-width: 12.5rem;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-100, 0.5rem);
        flex: 1 0 0;
    }

    .day {
        align-self: stretch;
        color: var(--Text-Inverse-secondary, #e1e1e1);
        text-align: center;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }

    .time {
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

    .promo {
        width: calc(100svw - var(--scrollbarWidth));
        background: rgba(7, 7, 7, 0.5);
    }

    .video-container {
        position: relative;
        width: 100%;
        height: 50vh;
        padding: 0rem var(--space-200, 1rem);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .video-player {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    .content {
        position: relative;
        z-index: 1;
        text-align: center;
    }

    p.text {
        width: 100%;
        color: #fff;
        text-align: center;
        font-family: Montserrat;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3.5rem;
        letter-spacing: 0.09rem;
        text-transform: uppercase;
    }

    button.primary {
        margin-top: 2rem;
        padding: 1.25rem 3rem;
        justify-content: center;
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
        cursor: pointer;
        border-color: #e30613;
    }
}

@media (min-width: 960px) {
    .offer-hero {
        width: 100%;
        height: 30rem;
        padding: 0rem var(--space-200, 1rem);
        display: flex;
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
            url(/public/images/promo/gabinet.jpg) lightgray 50% / cover
                no-repeat;
    }

    .offer-promo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        margin: auto 0;
    }

    .subtitle {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }

    .service {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3.375rem;
        letter-spacing: 0.05rem;
        text-transform: uppercase;
    }

    .description-section {
        display: flex;
        width: 90vw;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        gap: 2rem;
        margin: 5vh 2vw;
    }

    .text-block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-200, 1rem);
    }

    .text-block-header {
        color: #000;
        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }

    .text-block-text {
        align-self: stretch;
        color: var(--Text-Background-text-inverse, #313131);
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }
    .photo {
        width: 32.5625rem;
        height: 32.5625rem;
    }

    img {
        max-width: 521px;
        max-height: 521px;
    }

    .service-section {
        display: flex;
        width: 90vw;
        padding: 3rem 2rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        border-radius: var(--Corner-Small, 0.5rem);
        background: var(--Surface-Secondary, #f5f5f5);
        margin: 0 auto;
    }

    .service-section-header {
        width: 100%;
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

    .service-section-block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }

    .service-section-block-column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }

    .service-section-block-column-text {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }

    .service-section-block-column-text span {
        font-weight: 700;
    }

    .contact-block {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 3rem var(--space-300, 1.5rem);
        flex-direction: column;
        align-items: center;
        gap: 4.5rem;
        border-radius: var(--Corner-None, 0rem);
        background: var(--Surface-Inverse-primary, #181818);
        margin-top: 5vh;
    }

    .contact {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }

    .contact-header,
    .working-hours-header {
        width: 100%;
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

    .contact-info {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 4.5rem;
        align-self: stretch;
    }

    .phone,
    .mail {
        display: flex;
        align-items: center;
        gap: var(--space-150, 0.75rem);
        color: #fff;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }

    .working-hours {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }

    .hours-box {
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        gap: 2rem;
        align-self: stretch;
        flex-wrap: wrap;
    }

    .hours {
        display: flex;
        min-width: 12.5rem;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-100, 0.5rem);
        flex: 1 0 0;
    }

    .day {
        align-self: stretch;
        color: var(--Text-Inverse-secondary, #e1e1e1);
        text-align: center;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }

    .time {
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

    .promo {
        width: calc(100svw - var(--scrollbarWidth));
        background: rgba(7, 7, 7, 0.5);
    }

    .video-container {
        position: relative;
        width: 100%;
        height: 50vh;
        padding: 0rem var(--space-200, 1rem);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .video-player {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    .content {
        position: relative;
        z-index: 1;
        text-align: center;
    }

    p.text {
        width: 100%;
        color: #fff;
        text-align: center;
        font-family: Montserrat;
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3.5rem;
        letter-spacing: 0.09rem;
        text-transform: uppercase;
    }

    button.primary {
        margin-top: 2rem;
        padding: 1.25rem 3rem;
        justify-content: center;
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
        cursor: pointer;
        border-color: #e30613;
    }
}
</style>
