<template>
    <div>
        <div
            class="offer-hero"
            :style="{ backgroundImage: `url(${trainingData.imgSrc0})` }"
        >
            <div class="offer-promo">
                <div class="subtitle">{{ trainingData.subtitle }}</div>
                <div class="service">{{ trainingData.service }}</div>
            </div>
        </div>
        <div class="wrapper">
            <div class="callendar">
                <div class="timetable-header">Terminarz zajęć</div>
                <div v-if="trainingData.timetable" class="timetable">
                    <TimetableBox
                        class="timetable-box"
                        v-for="(item, index) in trainingData.timetable"
                        :key="index"
                        :day="item.day"
                        :coach="item.coach"
                        :time="item.time"
                        :group-type="item.groupType"
                    />
                </div>
                <p
                    v-else
                    :class="['timetable', 'timetable-box', 'timetable-text']"
                >
                    Zapisy indywidualne
                </p>
            </div>
            <div class="class-description">
                <div class="description">
                    <div class="description-header">Opis zajęć</div>
                    <div class="description-text">
                        {{ trainingData.description }}
                    </div>
                </div>
                <img
                    class="img-description"
                    :src="trainingData.imgSrc2"
                    :alt="trainingData.imgAlt2"
                />
            </div>
            <div class="class-user">
                <div class="users">
                    <div class="users-header">Dla kogo</div>
                    <div class="users-text">{{ trainingData.users }}</div>
                </div>
                <img
                    :class="{
                        'img-users':
                            trainingData.imgSrc3 && trainingData.imgAlt3,
                    }"
                    v-if="trainingData.imgSrc3 && trainingData.imgAlt3"
                    :src="trainingData.imgSrc3"
                    :alt="trainingData.imgAlt3"
                />
            </div>
            <div class="class-coach">Prowadzący</div>
            <div class="team-slider">
                <CoachCards
                    v-for="item in coachCardData"
                    :key="item"
                    :coach-name="item.coachName"
                    :coach-position="item.coachPosition"
                    :img-src="item.imgSrc"
                />
            </div>
            <div class="team-slider-static">
                <CoachCards
                    v-for="item in coachCardData"
                    :key="item"
                    :coach-name="item.coachName"
                    :coach-position="item.coachPosition"
                    :img-src="item.imgSrc"
                />
            </div>
        </div>
        <div class="promo">
            <div class="video-container">
                <video
                    class="video-player"
                    src="/images/promo/HSCwww2.mp4"
                    autoplay
                    loop
                    muted
                    playsinline
                ></video>
                <div class="content">
                    <!-- <p class="text">Trenuj z nami</p> -->
                    <button class="primary" @click="showModal">
                        Zapisz się!
                    </button>
                    <Modal2
                        :isVisible="isModalVisible"
                        @close="closeModal"
                    ></Modal2>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import { computed, ref } from "vue";
import Modal2 from "../home/Modal2.vue";
import Footer from "../home/15Footer.vue";
import { offerData } from "@/data/offerData";
import TimetableBox from "./TimetableBox.vue";
import CoachCards from "../CoachCards/CoachCards.vue";
import { coachData } from "@/data/coachData";

export default {
    name: "OfferPage",
    components: {
        Modal2,
        Footer,
        TimetableBox,
        CoachCards,
    },
    props: {
        service: {
            type: String,
        },
        subtitle: {
            type: String,
        },
    },
    setup(props) {
        const isModalVisible = ref(false);
        const showModal = () => {
            isModalVisible.value = true;
        };

        const closeModal = () => {
            isModalVisible.value = false;
        };

        const trainingData = computed(() => {
            return offerData.find(
                (item) =>
                    item.service === props.service &&
                    item.subtitle === props.subtitle
            );
        });

        const coachCardData = computed(() => {
            return trainingData.value?.coachIds?.map((id) => {
                const coach = coachData.find((item) => item.id === id);
                return coach
                    ? {
                          id: coach.id,
                          coachName: coach.name,
                          coachPosition: coach.position,
                          imgSrc: coach.imgSrc,
                          imgAlt: coach.imgAlt,
                      }
                    : null;
            });
        });

        return {
            isModalVisible,
            showModal,
            closeModal,
            trainingData,
            coachCardData,
        };
    },
};
</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 2rem;
    margin-top: 10vh;
}

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
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;
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

    .callendar {
        display: flex;
        width: 21.4375rem;
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        margin: 0 auto;
    }

    .timetable-header {
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

    .timetable {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-200, 1rem);
        align-self: stretch;
        margin-bottom: 10vh;
    }

    .timetable-box {
        display: flex;
        padding: var(--space-200, 1rem);
        flex-direction: column;
        align-items: center;
        gap: var(--space-200, 1rem);
        align-self: stretch;
        border-radius: var(--radius-200, 1rem);
        background: var(--Surface-Secondary, #f5f5f5);
    }

    .timetable-text {
        color: var(--Text-Primary, #181818);
        font-family: Montserrat;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem;
        letter-spacing: -0.00438rem;
    }

    .class-description {
        display: flex;
        width: 21.4375rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        margin: 0 auto;
    }

    .description,
    .users {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-200, 1rem);
        align-self: stretch;
    }

    .description-header,
    .users-header {
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

    .description-text,
    .users-text {
        align-self: stretch;
        color: var(--Text-Background-text-inverse, #313131);
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }

    .img-description {
        height: 12rem;
        align-self: stretch;
        background: lightgray 50% / cover no-repeat;
        margin-bottom: 10vh;
    }

    .class-user {
        display: flex;
        width: 21.4375rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        margin: 0 auto;
    }

    .img-users {
        height: 12rem;
        align-self: stretch;
        /* background: lightgray 50% / cover no-repeat; */
    }

    .class-coach {
        width: 90%;
        color: #000;
        font-family: "Montserrat";
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
        margin-bottom: 5rem;
        margin-top: 10vh;
    }
    .team-slider {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-start;
        gap: 2rem;
        flex-wrap: wrap;
        overflow: hidden;
        margin-bottom: 10vh;
    }

    .team-slider-static {
        display: none;
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
        margin-top: 14rem;
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
        display: flex;
        height: 23.75rem;
        padding: 0rem var(--space-200, 1rem);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4.5rem;
        flex-shrink: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .offer-promo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
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
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 6rem;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
    }

    .callendar {
        display: flex;
        width: 90%;
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        margin: 0 auto;
    }

    .timetable-header {
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

    .timetable {
        display: flex;
        align-items: center;
        align-content: center;
        gap: 1rem var(--space-200, 1rem);
        /* align-self: stretch; */
        flex-wrap: wrap;
        margin-bottom: 10vh;
    }

    .timetable-box {
        display: flex;
        padding: var(--space-200, 3rem);
        flex-direction: column;
        align-items: center;
        gap: var(--space-200, 1rem);
        flex: 1 0 0;
        border-radius: var(--radius-200, 1rem);
        background: var(--Surface-Secondary, #f5f5f5);
    }
    .timetable-text {
        color: var(--Text-Primary, #181818);
        font-family: Montserrat;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem;
        letter-spacing: -0.00438rem;
    }

    .class-description {
        display: flex;
        width: 90%;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        margin: 0 auto;
        margin-bottom: 10vh;
    }

    .description,
    .users {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-200, 1rem);
        align-self: stretch;
    }

    .description-header,
    .users-header {
        align-self: stretch;
        color: #000;
        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }

    .description-text,
    .users-text {
        color: var(--Text-Background-text-inverse, #313131);
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }

    .img-description {
        height: 27.75rem;
        align-self: stretch;
        background: lightgray 50% / cover no-repeat;
    }

    .class-user {
        display: flex;
        width: 90%;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        margin: 0 auto;
        margin-bottom: 10vh;
    }

    .img-users {
        height: 27.75rem;
        align-self: stretch;
        /* background: lightgray 50% / cover no-repeat; */
    }

    .class-coach {
        width: 90%;
        color: #000;
        font-family: "Montserrat";
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
        margin-bottom: 5rem;
    }
    .team-slider {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-start;
        gap: 2rem;
        flex-wrap: wrap;
        overflow: hidden;
        margin-bottom: 10vh;
    }

    .team-slider-static {
        display: none;
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
        display: flex;
        height: 23.75rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4.5rem;
        flex-shrink: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .offer-promo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: center;
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
        font-size: 3rem;
        font-style: normal;
        font-weight: 700;
        line-height: 6rem;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
    }

    .callendar {
        display: flex;
        width: 90%;
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        margin: 0 auto;
    }

    .timetable-header {
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

    .timetable {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 1rem var(--space-200, 1rem);
        /* align-self: stretch; */
        flex-wrap: wrap;
        margin-bottom: 10vh;
    }

    .timetable-box {
        display: flex;
        padding: var(--space-200, 2rem);
        flex-direction: column;
        align-items: center;
        gap: var(--space-200, 1rem);
        flex: 1 0 0;
        border-radius: var(--radius-200, 1rem);
        background: var(--Surface-Secondary, #f5f5f5);
    }
    .timetable-text {
        color: var(--Text-Primary, #181818);
        font-family: Montserrat;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.25rem;
        letter-spacing: -0.00438rem;
    }

    .class-description {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: flex-start;
        gap: var(--space-200, 1rem);
        margin-bottom: 10vh;
    }

    .description,
    .users {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-200, 1rem);
    }

    .description-header,
    .users-header {
        align-self: stretch;
        color: #000;
        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }

    .description-text,
    .users-text {
        color: var(--Text-Background-text-inverse, #313131);
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }

    .img-description {
        height: 27.75rem;
        align-self: stretch;
        background: lightgray 50% / cover no-repeat;
    }

    .class-user {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
        align-items: flex-start;
        gap: var(--space-200, 1rem);
        margin-bottom: 10vh;
    }

    .img-users {
        height: 27.75rem;
        align-self: stretch;
        /* background: lightgray 50% / cover no-repeat; */
    }
    .class-coach {
        width: 90%;
        color: #000;
        font-family: "Montserrat";
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
        margin-bottom: 5rem;
    }

    .team-slider {
        display: none;
    }

    .team-slider-static {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
        flex-wrap: wrap;
        margin-bottom: 10vh;
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
        margin-top: 18rem;
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

@media (min-width: 1440px) {
    .team-slider-static {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
        flex-wrap: wrap;
        margin-bottom: 10vh;
    }
}
</style>
