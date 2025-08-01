<template>
    <div>
        <div class="overlay" v-if="isVisible"></div>
        <div class="modal" v-if="isVisible">
            <div class="header">
                <div class="close-box">
                    <button class="close-modal" @click="closeModal">✕</button>
                </div>
                <div class="contact-form">Formularz kontaktowy</div>
                <div class="text">
                    Jeśli są Państwo zainteresowani naszą ofertą, prosimy o
                    wypełnienie poniższego formularza kontaktowego.
                </div>
            </div>
            <div class="form-box"></div>
            <form @submit.prevent="submitForm">
                <div class="input-box">
                    <input
                        v-model="form.name"
                        type="text"
                        placeholder="Imię i nazwisko"
                        required
                    />
                </div>
                <div class="input-box">
                    <input
                        v-model="form.email"
                        type="email"
                        placeholder="E-mail"
                        required
                    />
                </div>
                <div class="input-box">
                    <input
                        v-model="form.phone"
                        type="tel"
                        placeholder="Numer telefonu"
                        required
                    />
                </div>
                <div class="input-box2">
                    <textarea
                        v-model="form.message"
                        placeholder="Wiadomość"
                        style="height: 6rem"
                        required
                    ></textarea>
                </div>
                <div
                    ref="recaptchaDiv"
                    class="g-recaptcha"
                    data-sitekey="6LcHOnUrAAAAAFZAcEi8L6Xw9CAC6K5x2wJG6Mll"
                    data-callback="onCaptchaVerified"
                    data-expired-callback="onCaptchaExpired"
                ></div>
                <button class="send" type="submit">Wyślij wiadomość</button>
            </form>
            <p v-if="statusMessage" class="status-message">
                {{ statusMessage }}
            </p>
        </div>
    </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
    props: {
        isVisible: Boolean,
    },
    data() {
        return {
            form: {
                name: "",
                email: "",
                phone: "",
                message: "",
            },
            statusMessage: "",
            recaptchaToken: "",
            recaptchaWidgetId: null,
        };
    },
    mounted() {
        // Load Google reCAPTCHA script if not already loaded
        if (!window.grecaptcha) {
            const script = document.createElement("script");
            script.src = "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        } else {
            this.renderRecaptcha();
        }
        window.vueRecaptchaApiLoaded = this.renderRecaptcha;
        window.onCaptchaVerified = this.onCaptchaVerified;
        window.onCaptchaExpired = this.onCaptchaExpired;
    },
    methods: {
        renderRecaptcha() {
            if (this.recaptchaWidgetId !== null) return;
            if (!this.$refs.recaptchaDiv) return;
            this.recaptchaWidgetId = window.grecaptcha.render(
                this.$refs.recaptchaDiv,
                {
                    sitekey: "6LcHOnUrAAAAAFZAcEi8L6Xw9CAC6K5x2wJG6Mll",
                    callback: this.onCaptchaVerified,
                    "expired-callback": this.onCaptchaExpired,
                }
            );
        },
        closeModal() {
            this.$emit("close");
            this.resetForm();
        },
        onCaptchaVerified(token) {
            this.recaptchaToken = token;
        },
        onCaptchaExpired() {
            this.recaptchaToken = "";
        },
        submitForm() {
            if (!this.recaptchaToken) {
                this.statusMessage =
                    "Proszę potwierdzić, że nie jesteś robotem.";
                setTimeout(() => (this.statusMessage = ""), 4000);
                return;
            }

            if (
                !this.form.name.trim() ||
                !this.form.email.trim() ||
                !this.form.phone.trim() ||
                !this.form.message.trim()
            ) {
                this.statusMessage = "Proszę wypełnić wszystkie pola.";
                setTimeout(() => (this.statusMessage = ""), 4000);
                return;
            }

            const templateParams = {
                name: this.form.name,
                email: this.form.email,
                phone: this.form.phone,
                message: this.form.message,
                "g-recaptcha-response": this.recaptchaToken,
            };

            emailjs
                .send(
                    "service_3lkk4bc",
                    "template_9ke2oqi",
                    templateParams,
                    "8_zJ6rzBwwYM6iX1j"
                )
                .then(
                    () => {
                        this.statusMessage = "Wiadomość została wysłana.";
                        this.resetForm();
                        setTimeout(() => (this.statusMessage = ""), 4000);
                        this.closeModal();
                    },
                    (error) => {
                        this.statusMessage =
                            "Błąd podczas wysyłania wiadomości. Spróbuj ponownie.";
                        console.error("EmailJS error:", error);
                        setTimeout(() => (this.statusMessage = ""), 4000);
                    }
                );
        },
        resetForm() {
            this.form.name = "";
            this.form.email = "";
            this.form.phone = "";
            this.form.message = "";
            this.recaptchaToken = "";
            if (window.grecaptcha && this.recaptchaWidgetId !== null) {
                window.grecaptcha.reset(this.recaptchaWidgetId);
            }
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

@media (max-width: 1384px) {
    .modal {
        position: fixed;
        z-index: 999;
        right: 0;
        top: 0;
        display: flex;
        width: 23.4375rem;
        height: 100vh;
        padding: 2rem var(--space-300, 1.5rem);
        flex-direction: column;
        align-items: flex-end;
        gap: var(--space-300, 1.5rem);
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

    .contact-form {
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

    .close-modal {
        width: var(--space-300, 1.5rem);
        height: var(--space-300, 1.5rem);
        background: transparent;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }

    .text {
        align-self: stretch;
        color: var(--Text-Background-text-inverse, #313131);
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }

    .form-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        align-self: stretch;
    }

    .input-box {
        display: flex;
        height: 3.625rem;
        min-width: 20rem;
        padding: 1rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        align-self: stretch;
        border-bottom: 1px solid #545454;
        background: #fff;
    }

    .input-box2 {
        display: flex;
        height: 8rem;
        min-width: 20rem;
        padding: 1rem;
        align-items: flex-start;
        gap: 0.625rem;
        align-self: stretch;
        border-bottom: 1px solid #545454;
        background: #fff;
    }

    input,
    textarea {
        flex: 1 0 0;
        color: #545454;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
        border: none;
    }

    button.send {
        display: flex;
        padding: 1.25rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        align-self: stretch;
        background: var(--Surface-Brand, #e30613);
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        text-transform: uppercase;
    }
}

@media (min-width: 1385px) {
    .modal {
        position: fixed;
        z-index: 999;
        right: 0;
        top: 0;
        display: flex;
        width: 57.8125rem;
        height: 100vh;
        padding: 1.5rem 4.5rem;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-300, 1.5rem);
        flex-shrink: 0;
        background-color: #fff;
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
    .contact-form {
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

    .close-modal {
        width: var(--space-300, 1.5rem);
        height: var(--space-300, 1.5rem);
        background: transparent;
        border: none;
        font-size: 2rem;
        cursor: pointer;
    }

    .text {
        max-width: 40rem;
        align-self: stretch;
        color: var(--Text-Background-text-inverse, #313131);
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
    }

    .form-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
    }

    .input-box {
        display: flex;
        height: 3.625rem;
        min-width: 20rem;
        padding: 1.25rem;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        align-self: stretch;
        border-bottom: 1px solid #545454;
        background: #fff;
    }

    .input-box2 {
        display: flex;
        height: 8rem;
        min-width: 20rem;
        padding: 1.25rem;
        align-items: flex-start;
        gap: 0.5rem;
        align-self: stretch;
        border-bottom: 1px solid #545454;
        background: #fff;
    }

    input,
    textarea {
        flex: 1 0 0;
        color: #545454;
        font-family: Montserrat;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1rem;
        letter-spacing: -0.005rem;
        border: none;
    }

    button.send {
        display: flex;
        padding: 1rem 3rem;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        color: var(--Text-Inverse-primary, #fff);
        text-align: center;
        background: var(--Surface-Brand, #e30613);
        font-family: Montserrat;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem;
        text-transform: uppercase;
        border-color: #e30613;
        cursor: pointer;
    }
}
.status-message {
    margin-top: 1rem;
    color: green;
    font-weight: bold;
    text-align: center;
}
</style>
