<template>
    <div>
        <div class="overlay" v-if="isVisible"></div>
        <!-- Overlay for blur -->
        <div class="modal" v-if="isVisible">
            <div class="header">
                <div class="close-box">
                    <CloseModal @click="closeModal" style="cursor: pointer" />
                </div>
                <!-- <div class="contact-form">Formularz kontaktowy</div> -->
                <p class="text-header">KONTAKT</p>
                <div class="text">
                    Jeśli są Państwo zainteresowani naszą ofertą, prosimy o
                    kontakt.
                </div>
            </div>
            <div class="info-bar">
                <div class="line">
                    <div class="icon"><PhoneRedmodal /></div>
                    <div class="data">+48 793 951 015</div>
                </div>
                <div class="line">
                    <div class="icon"><MailRedmodal /></div>
                    <div class="data">holisticsportcenter@gmail.com</div>
                </div>
                <div class="line">
                    <div class="icon"><LocationRedmodal /></div>
                    <ul>
                        <li>Holistic Sport Center</li>
                        <li>ul. Krakowska 29C</li>
                        <li>50-424 Wrocław</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CloseModal from "../icons/closeModal.vue";
import LocationRedmodal from "../icons/locationRedmodal.vue";
import MailRedmodal from "../icons/mailRedmodal.vue";
import PhoneRedmodal from "../icons/phoneRedmodal.vue";

export default {
    name: "Modal2",
    components: {
        CloseModal,
        PhoneRedmodal,
        MailRedmodal,
        LocationRedmodal,
    },
    props: {
        isVisible: {
            type: Boolean,
            required: true,
        },
    },
    watch: {
        isVisible(newValue) {
            if (newValue) {
                document.body.classList.add("no-scroll");
            } else {
                document.body.classList.remove("no-scroll");
            }
        },
    },
    methods: {
        closeModal() {
            this.$emit("close");
        },
    },
};
</script>

<style scoped>
.no-scroll {
    overflow: hidden;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 998;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.modal {
    position: fixed;
    z-index: 999;
    right: 0;
    top: 0;
    display: flex;
    width: 95%;
    height: 100vh;
    padding: 2rem var(--space-300, 1.5rem);
    flex-direction: column;
    align-items: flex-end;
    gap: 1.5rem;
    flex-shrink: 0;
    background: #fff;
    box-shadow: -12px 0px 24px 0px rgba(0, 0, 0, 0.32);
    overflow: hidden;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-100, 0.5rem);
    align-self: stretch;
}

.close-box {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: var(--space-200, 1rem);
    align-self: stretch;
}
.close-modal {
    width: var(--space-300, 1.5rem);
    height: var(--space-300, 1.5rem);
    background-color: grey;
}

.text {
    /* align-self: stretch; */
    color: var(--Text-Background-text-inverse, #181818);
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.005rem;
}
.text-header {
    color: #181818;
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    letter-spacing: -0.00563rem;
}
.info-bar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-300, 1.5rem);
    align-self: stretch;
    margin-top: 5vh;
}

ul {
    list-style: none;
}
.line {
    display: flex;
    align-items: center;

    gap: var(--space-150, 0.75rem);
}
.icon {
    width: 3rem;
    height: 3rem;
}

.data {
    color: var(--Text-Inverse-primary, #181818);
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: 0.01rem;
    text-decoration: none;
    word-break: break-all;
}

li {
    color: var(--Text-Inverse-primary, #181818);
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: 0.01rem;
    text-decoration: none;
}
</style>
