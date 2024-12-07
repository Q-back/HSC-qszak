<template>
    <div class="offer-hero">
        <div class="offer-promo">
            <div class="subtitle">Gabinet</div>
            <div class="service">Hipnoterapia</div>
        </div>
    </div>
    <div class="description-section">
        <div class="text-block">
            <p class="text-block-header">
                Hipnoterapeutka<br />
                Natalia Zieniewicz
            </p>
            <p class="text-block-text">
                Dział Hipnoterapii w Holistic Sport Center to wyjątkowe miejsce,
                które oferuje wsparcie dla osób pragnących pracować nad swoimi
                celami i wyzwaniami mentalnymi za pomocą sprawdzonych metod
                terapeutycznych.<br />Sesje hipnoterapii prowadzi Natalia –
                doświadczona hipnoterapeutka oraz psychodietetyk, która z
                empatią i profesjonalizmem wspiera klientów w zmianie nawyków,
                wzmocnieniu motywacji oraz radzeniu sobie z trudnościami
                emocjonalnymi. W naszym gabinecie stawiamy na indywidualne
                podejście, dlatego Natalia dostosowuje sesje hipnoterapii do
                unikalnych potrzeb każdej osoby, pomagając odkrywać i usuwać
                blokady, które mogą stać na drodze do zdrowszego i bardziej
                satysfakcjonującego życia.<br />Hipnoterapia, prowadzona przez
                wykwalifikowanego specjalistę, może wspomóc między innymi w
                zakresie kontroli stresu, rozwijania zdrowych nawyków, pracy nad
                samoakceptacją oraz wzmocnienia motywacji do osiągania celów.<br />
                Zapraszamy do skorzystania z profesjonalnych usług hipnoterapii
                w Holistic Sport Center – miejsca, gdzie dbamy o równowagę ciała
                i umysłu, łącząc zdrowy styl życia z narzędziami, które
                wspomagają pełen rozwój osobisty.
            </p>
        </div>
        <div class="photo">
            <img
                src="/images//kadra/NataliaZieniewicz.png"
                alt="Natalia Zieniewicz"
            />
        </div>
    </div>
    <div class="service-section">
        <p class="service-section-header">Zakres usług</p>
        <div class="service-section-block">
            <ul class="service-section-block-column">
                <li class="service-section-block-column-text">
                    <span>Hipnoza regresyjna:</span> Pozwala dotrzeć do źródła
                    głęboko ukrytych blokad i traum z przeszłości, wpływających
                    na obecne życie. Poprzez cofnięcie się do wydarzeń i
                    sytuacji, które zapoczątkowały problem, daje zrozumienie i
                    pozwala wyeliminować przeszkody stojące na drodze do
                    spokoju, równowagi i pełni szczęścia. To głęboko
                    transformująca metoda, która trwale zmienia sposób myślenia
                    i podejście do przepracowywanego tematu. Hipnoza regresyjna
                    jest polecana do pracy z ograniczającymi przekonaniami,
                    zaburzeniami lękowymi, zaburzeniami odżywiania, chorobami
                    psychosomatycznymi, nałogami, relacjami interpersonalnymi i
                    stresem.
                </li>
                <li class="service-section-block-column-text">
                    <span>Past Life Regression:</span> Umożliwia podróż do
                    poprzednich wcieleń, aby odkryć wzorce i doświadczenia
                    mogące wpływać na obecne życie. Ta wyjątkowa sesja oferuje
                    przestrzeń do głębokiej refleksji i uwolnienia się od
                    nieuświadomionych obciążeń. Polecana jest osobom, które
                    poszukują głębszego sensu życiowych wyzwań, lub chcą poznać
                    i zrozumieć siebie bardziej.
                </li>
                <li class="service-section-block-column-text">
                    <span>Hipnoza relaksacyjna i rozwojowa</span> Doskonale
                    sprawdza się, gdy potrzeba głębokiego relaksu, większej
                    pewności siebie, lub motywacji do działania. Pomaga w
                    regeneracji oraz odkrywaniu zasobów wewnętrznych, które
                    można wykorzystać w codziennym życiu. Pozytywnie programuje
                    na przyszłość, dając poczucie wewnętrznego spokoju,
                    sprawczości i niwelując nieadaptacyjny stres. Ten rodzaj
                    sesji polecany jest szczególnie przed ważnymi, stresującymi
                    wydarzeniami, takimi jak zawody sportowe, wystąpienia
                    publiczne, egzaminy, uroczystości.
                </li>
                <li class="service-section-block-column-text">
                    <span>Konsultacja psychodietetyczna:</span> Łączy
                    psychologię i dietetykę, by pomóc zrozumieć emocje leżące u
                    podstaw nawyków żywieniowych. Tworzy spersonalizowaną
                    strategię wspierającą budowanie zdrowej relacji z jedzeniem
                    i osiąganie indywidualnych celów zdrowotnych.
                </li>
            </ul>
        </div>
    </div>
    <div class="contact-block">
        <div class="contact">
            <p class="contact-header">KONTAKT</p>
            <div class="contact-info">
                <div class="phone"><Phone />+ 48 728 833 388</div>
                <div class="mail"><Mail />hipnoza@nataliazieniewicz.pl</div>
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
                src="\images\promo\HSCwww4.mp4"
                autoplay
                loop
                muted
                playsinline
            ></video>
            <div class="content">
                <!-- <p class="text">Trenuj z nami</p> -->
                <button class="primary" @click="showModal">Zapisz się!</button>
                <Modal2
                    :isVisible="isModalVisible"
                    @close="closeModal"
                ></Modal2>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import { ref } from "vue";
import Footer from "../home/15Footer.vue";
import Phone from "../icons/phone.vue";
import Mail from "../icons/mail.vue";
import Modal2 from "../home/Modal2.vue";

export default {
    name: "Hypno",
    components: {
        Modal2,
        Footer,
        Phone,
        Mail,
    },
    setup() {
        const isModalVisible = ref(false);
        const showModal = () => {
            isModalVisible.value = true;
        };

        const closeModal = () => {
            isModalVisible.value = false;
        };

        const isDropdownVisible = ref(false);
        const dropdownList = ref(null);

        const toggleDropdown = () => {
            isDropdownVisible.value = !isDropdownVisible.value;
        };

        return {
            isModalVisible,
            isDropdownVisible,
            showModal,
            closeModal,
            toggleDropdown,
            dropdownList,
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
        list-style: none;
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
        margin-top: 12rem;
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
        list-style: none;
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
        margin-top: 16rem;
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
        list-style: none;
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
        margin-top: 16rem;
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
