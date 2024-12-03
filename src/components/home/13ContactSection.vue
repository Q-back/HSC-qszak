<template>
    <section class="contact">
        <div class="section-header">
            <div class="section-title">
                <div class="promo-text">Kontakt</div>
                <div class="title">Pozostańmy w kontakcie</div>
            </div>
        </div>
        <div class="contact-zone">
            <div class="contact">
                <div class="map1">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.09493335437787!2d17.059457537578407!3d51.09193416540685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc3d85c0e4885%3A0x6baab33d1e13584f!2sHSC%20-%20Holistic%20Sport%20Center!5e1!3m2!1spl!2spl!4v1725899137791!5m2!1spl!2spl"
                        width="400"
                        height="300"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div class="map1_1">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.09525044722716!2d17.059291103232322!3d51.09186160532498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc3d85c0e4885%3A0x6baab33d1e13584f!2sHSC%20-%20Holistic%20Sport%20Center!5e1!3m2!1spl!2spl!4v1726000828558!5m2!1spl!2spl"
                        width="550"
                        height="450"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div class="contact-text">
                    Jeśli masz jakieś pytania, zapraszamy serdecznie do kontaktu
                    telefonicznego lub mailowego. Czekamy na Was przy ul.
                    Krakowskiej!
                </div>
                <div class="contact-data">
                    <div class="contact-data-phone">
                        <div class="icon"><phoneRed /></div>
                        <div class="text">+48 793 951 015</div>
                    </div>
                    <div class="contact-data-mail">
                        <div class="icon"><mailRed /></div>
                        <div class="text">holisticsportcenter@gmail.com</div>
                    </div>
                    <div class="contact-data-address">
                        <div class="icon"><locationRed /></div>
                        <div class="text">
                            <ul>
                                <li>Holistic Sport Center</li>
                                <li>ul. Krakowska 29C</li>
                                <li>50-424 Wrocław</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button class="contact-us" @click="showModal">
                    Umów się na konsultacje
                </button>
                <Modal2
                    :isVisible="isModalVisible"
                    @close="closeModal"
                ></Modal2>
            </div>
            <div class="map2">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.09493335437787!2d17.059457537578407!3d51.09193416540685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc3d85c0e4885%3A0x6baab33d1e13584f!2sHSC%20-%20Holistic%20Sport%20Center!5e1!3m2!1spl!2spl!4v1725899137791!5m2!1spl!2spl"
                    width="600"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from "vue";
import locationRed from "../icons/locationRed.vue";
import mailRed from "../icons/mailRed.vue";
import phoneRed from "../icons/phoneRed.vue";
import Modal2 from "./Modal2.vue";

import map from "@/assets/mapka.jpg";
export default {
    name: "ContactSection",
    components: {
        locationRed,
        mailRed,
        phoneRed,
        Modal2,
    },
    data() {
        return {
            map,
        };
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
    section.contact {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 3rem var(--space-200, 1rem);
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    .section-header {
        display: flex;
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
        color: var(--Text-Primary, #181818);
        text-align: center;
        font-family: "Montserrat";
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4rem;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
        opacity: 0.08;
    }
    .title {
        align-self: stretch;
        color: #000;
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
    .contact-zone {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1.0625rem;
        align-self: stretch;
    }
    .contact {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2.75rem;
        align-self: stretch;
    }
    .contact-text {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);

        /* Body/L/Regular */
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem; /* 155.556% */
        letter-spacing: -0.00563rem;
    }
    .contact-data {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }
    .contact-data-phone,
    .contact-data-mail {
        display: flex;
        align-items: flex-start;
        gap: var(--space-150, 0.75rem);
    }
    .contact-data-address {
        display: flex;
        align-items: center;
        gap: var(--space-100, 0.5rem);
        align-self: stretch;
    }
    .icon {
        width: var(--space-300, 1.5rem);
        height: var(--space-300, 1.5rem);
    }
    .text {
        color: var(--Text-Primary, #181818);
        font-family: "Montserrat";
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }
    button.contact-us {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        align-self: stretch;
        background: var(--Surface-Brand, #e30613);
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        border-color: #e30613;
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        text-transform: uppercase;
        cursor: pointer;
        margin: 0 auto;
    }

    .map1 {
        align-self: center;
        justify-self: center;
        display: flex;
        max-width: 90vw;
    }

    .map1_1 {
        display: none;
    }
    .map2 {
        display: none;
    }

    ul {
        list-style: none;
    }
}

@media (min-width: 640px) and (max-width: 960px) {
    section.contact {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 4.5rem var(--space-300, 1.5rem);
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    .section-header {
        display: flex;
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
        color: var(--Text-Primary, #181818);
        text-align: center;
        font-family: "Montserrat";
        font-size: 4rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4rem;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
        opacity: 0.08;
    }
    .title {
        align-self: stretch;
        color: #000;

        font-family: "Montserrat";
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }
    .contact-zone {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.0625rem;
        align-self: stretch;
    }
    .contact {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2.75rem;
        align-self: stretch;
    }
    .contact-text {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);

        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }
    .contact-data {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }
    .contact-data-phone,
    .contact-data-mail {
        display: flex;
        align-items: flex-start;
        gap: var(--space-150, 0.75rem);
    }
    .contact-data-address {
        display: flex;
        align-items: flex-start;
        gap: var(--space-100, 0.5rem);
        align-self: stretch;
    }
    .icon {
        width: var(--space-300, 1.5rem);
        height: var(--space-300, 1.5rem);
    }
    .text {
        width: 12rem;
        color: var(--Text-Primary, #181818);
        font-family: "Montserrat";
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.5rem; /* 150% */
        letter-spacing: 0.01rem;
    }
    button.contact-us {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        background: var(--Surface-Brand, #e30613);
        color: #fff;
        text-align: center;
        font-family: "Montserrat";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        text-transform: uppercase;
        cursor: pointer;
        border-color: #e30613;
        margin: 0 auto;
    }

    .map1 {
        display: none;
    }

    .map1_1 {
        align-self: stretch;
        display: block;
        margin: 0 auto;
        max-width: 90vw;
    }
    .map2 {
        display: none;
    }

    ul {
        list-style: none;
    }
}

@media (min-width: 960px) {
    section.contact {
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
        justify-content: center;
        align-items: flex-start;
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
        color: var(--Text-Primary, #181818);
        font-family: "Montserrat";
        font-size: 10rem;
        font-style: normal;
        font-weight: 700;
        line-height: 10rem; /* 100% */
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        opacity: 0.08;
    }
    .title {
        align-self: stretch;
        color: #000;

        /* Headings/Desktop/S */
        font-family: "Montserrat";
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem; /* 150% */
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }
    .contact-zone {
        display: flex;
        align-items: center;
        gap: 1.0625rem;
        align-self: stretch;
    }
    .contact {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2.75rem;
        align-self: stretch;
    }
    .contact-text {
        align-self: stretch;
        color: var(--Text-Secondary, #484848);

        /* Body/L/Regular */
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem; /* 155.556% */
        letter-spacing: -0.00563rem;
    }
    .contact-data {
        display: flex;
        width: 32.5625rem;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
    }
    .contact-data-phone,
    .contact-data-mail {
        display: flex;
        align-items: flex-start;
        gap: var(--space-150, 0.75rem);
    }
    .contact-data-address {
        display: flex;
        align-items: flex-start;
        gap: var(--space-100, 0.5rem);
    }
    .icon {
        width: var(--space-300, 1.5rem);
        height: var(--space-300, 1.5rem);
    }
    .text {
        width: 12rem;
        color: var(--Text-Primary, #181818);
        font-family: "Montserrat";
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.5rem; /* 150% */
        letter-spacing: 0.01rem;
    }
    button.contact-us {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        background: var(--Surface-Brand, #e30613);
        color: #fff;
        border-color: #e30613;
        text-align: center;
        font-family: "Montserrat";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        text-transform: uppercase;
        cursor: pointer;
    }

    .map1 {
        display: none;
    }

    .map1_1 {
        display: block;
    }
    .map2 {
        display: none;
    }

    ul {
        list-style: none;
    }
}

@media (min-width: 1240px) {
    .map1_1 {
        display: none;
    }

    .map2 {
        display: block;
        align-self: stretch;
    }
}
</style>
