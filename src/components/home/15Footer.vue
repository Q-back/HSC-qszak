<template>
    <footer>
        <div class="section">
            <RouterLink to="/" class="logo">
                <LogoHSC2 />
            </RouterLink>
            <div class="menu">
                <RouterLink to="/" class="item">Strona Główna</RouterLink>
                <RouterLink to="/o-nas" class="item">O nas</RouterLink>
                <RouterLink to="/oferta" class="item">Oferta</RouterLink>
                <RouterLink to="/kadra" class="item">Kadra</RouterLink>
                <RouterLink to="/fizjoterapia" class="item"
                    >Fizjoterapia</RouterLink
                >
                <RouterLink to="/dietetyka" class="item">Dietetyka</RouterLink>
                <RouterLink to="/hipnoterapia" class="item"
                    >Hipnoterapia</RouterLink
                >
                <button class="item" @click="showModal">Kontakt</button>
                <Modal :isVisible="isModalVisible" @close="closeModal"></Modal>
            </div>

            <div class="contact-data">
                <div class="info-bar">
                    <p class="text">Kontakt</p>
                    <div class="line">
                        <div class="icon"><PhoneRed /></div>
                        <div class="data">+48 793 951 015</div>
                    </div>
                    <div class="line">
                        <div class="icon"><MailRed /></div>
                        <div class="data">holisticsportcenter@gmail.com</div>
                    </div>
                </div>
                <div class="info-bar">
                    <p class="text">Adres</p>
                    <div class="line">
                        <div class="icon"><LocationRed /></div>
                        <a
                            href="https://maps.app.goo.gl/BH8SCxM5tmfjSJ1R8"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="data"
                        >
                            <ul>
                                <li>Holistic Sport Center</li>
                                <li>ul. Krakowska 29C</li>
                                <li>50-424 Wrocław</li>
                            </ul>
                        </a>
                    </div>
                    <div class="line">
                        <div class="icon"><ClockRed /></div>
                        <div class="data">
                            <ul>
                                <li>Godziny otwarcia</li>
                                <li>Pon - Pt: 6:00 - 22:00</li>
                                <li>Sob: 7:00 - 12:00</li>
                                <li>Nd: indywidualne zapisy</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="info-bar">
                    <p class="text">Media Społecznościowe</p>
                    <div class="line">
                        <div class="icon"><FacebookRed /></div>
                        <a
                            href="https://facebook.com/holisticsportcenter"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="data"
                        >
                            facebook.com/holisticsportcenter
                        </a>
                    </div>
                    <div class="line">
                        <div class="icon"><InstagramRed /></div>
                        <a
                            href="https://www.instagram.com/holisticsportcenter/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="data"
                        >
                            @holisticsportcenter</a
                        >
                    </div>
                </div>
            </div>
            <p class="copy">© 2024 Holistic Sport Center</p>
        </div>
    </footer>
</template>

<script>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import LogoHSC2 from "../icons/LogoHSC2.vue";
import ClockRed from "../icons/clockRed.vue";
import FacebookRed from "../icons/facebookRed.vue";
import InstagramRed from "../icons/instagramRed.vue";
import LocationRed from "../icons/locationRed.vue";
import MailRed from "../icons/mailRed.vue";
import PhoneRed from "../icons/phoneRed.vue";
import Modal from "./Modal.vue";

export default {
    name: "Footer",
    components: {
        LogoHSC2,
        ClockRed,
        FacebookRed,
        InstagramRed,
        LocationRed,
        MailRed,
        PhoneRed,
        RouterLink,
        Modal,
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
    footer {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 3rem var(--space-200, 1rem);
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        background: var(--Surface-Inverse-primary, #181818);
    }

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
    }

    .logo {
        width: 6.25rem;
        height: 6.25rem;
    }

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 0.5rem var(--space-100, 0.5rem);
        align-self: stretch;
        flex-wrap: wrap;
    }

    .item {
        display: flex;
        padding: var(--space-150, 0.75rem) var(--space-200, 1rem);
        justify-content: center;
        align-items: center;
        gap: var(--space-100, 0.5rem);
        border-radius: var(--radius-150, 0.75rem);
        color: var(--Text-Inverse-primary, #fff);

        font-family: Montserrat;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1rem;
        text-transform: uppercase;
        text-decoration: none;
    }

    button.item {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .contact-data {
        display: flex;
        padding: var(--space-300, 1.5rem) 0rem;
        flex-direction: column;
        align-items: center;
        gap: 4.5rem;
        align-self: stretch;
    }

    .info-bar {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }

    p.text {
        color: #fff;
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }

    li {
        list-style: none;
    }
    .line {
        display: flex;
        align-items: flex-start;
        gap: var(--space-150, 0.75rem);
    }
    .icon {
        width: var(--space-300, 1.5rem);
        height: var(--space-300, 1.5rem);
    }

    .data {
        color: var(--Text-Inverse-primary, #fff);
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
        text-decoration: none;
        word-break: break-all;
    }

    p.copy {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;

        font-family: Montserrat;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem;
        letter-spacing: -0.00375rem;
    }
}

@media (min-width: 640px) and (max-width: 1103px) {
    footer {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 3rem var(--space-300, 1.5rem);
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        background: var(--Surface-Inverse-primary, #181818);
    }

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
    }

    .logo {
        width: 6.25rem;
        height: 6.25rem;
    }

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 0.5rem var(--space-100, 0.5rem);
        align-self: stretch;
        flex-wrap: wrap;
    }

    .item {
        display: flex;
        padding: var(--space-150, 0.75rem) var(--space-200, 1rem);
        justify-content: center;
        align-items: center;
        gap: var(--space-100, 0.5rem);
        border-radius: var(--radius-150, 0.75rem);
        color: var(--Text-Inverse-primary, #fff);

        font-family: Montserrat;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1rem;
        text-transform: uppercase;
        text-decoration: none;
    }

    button.item {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .contact-data {
        display: flex;
        padding: var(--space-300, 1.5rem) 0rem;
        flex-direction: column;
        align-items: center;
        gap: 4.5rem;
        align-self: stretch;
    }

    .info-bar {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }

    p.text {
        color: #fff;
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }

    li {
        list-style: none;
    }
    .line {
        display: flex;
        align-items: flex-start;
        gap: var(--space-150, 0.75rem);
    }
    .icon {
        width: 1.125rem;
        height: 1.125rem;
        flex-shrink: 0;
    }

    .data {
        color: var(--Text-Inverse-primary, #fff);
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
        text-decoration: none;
    }

    p.copy {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem;
        letter-spacing: -0.00375rem;
    }
}

@media (min-width: 1103px) {
    footer {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 6rem 4.5rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 3rem;
        background: var(--Surface-Inverse-primary, #181818);
    }

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
    }

    .logo {
        width: 6.25rem;
        height: 6.25rem;
        flex-shrink: 0;
    }

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 0.5rem var(--space-100, 0.5rem);
        align-self: stretch;
        flex-wrap: wrap;
    }

    .item {
        display: flex;
        padding: var(--space-150, 0.75rem) var(--space-200, 1rem);
        justify-content: center;
        align-items: center;
        gap: var(--space-100, 0.5rem);
        border-radius: var(--radius-150, 0.75rem);
        color: var(--Text-Inverse-primary, #fff);
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem;
        letter-spacing: 0.01875rem;
        text-decoration: none;
    }
    button.item {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .contact-data {
        display: flex;
        padding: var(--space-300, 1.5rem) 0rem;
        justify-content: center;
        align-items: flex-start;
        gap: 4.5rem;
        align-self: stretch;
    }

    .info-bar {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        flex: 1 0 0;
    }

    p.text {
        color: #fff;
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.00563rem;
    }

    li {
        list-style: none;
    }
    .line {
        display: flex;
        align-items: flex-start;
        gap: var(--space-150, 0.75rem);
    }
    .icon {
        width: 1.125rem;
        height: 1.125rem;
        flex-shrink: 0;
    }

    .data {
        color: var(--Text-Inverse-primary, #fff);
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
        text-decoration: none;
    }

    p.copy {
        align-self: stretch;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem;
        letter-spacing: -0.00375rem;
    }
}
</style>
