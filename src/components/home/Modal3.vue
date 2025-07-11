<template>
    <div v-if="isVisible" class="modal3">
        <div class="modal3-content">
            <button class="close-button" @click="closeModal">✕</button>
            <h2>Formularz Kontaktowy</h2>
            <form @submit.prevent="submitForm">
                <input
                    v-model="form.name"
                    type="text"
                    placeholder="Imię i nazwisko"
                    required
                />
                <input
                    v-model="form.email"
                    type="email"
                    placeholder="E-mail"
                    required
                />
                <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="Numer telefonu"
                    required
                />
                <textarea
                    v-model="form.message"
                    placeholder="Wiadomość"
                    required
                ></textarea>

                <!-- Google reCAPTCHA -->
                <div
                    ref="recaptchaDiv"
                    class="g-recaptcha"
                    data-sitekey="6LcHOnUrAAAAAFZAcEi8L6Xw9CAC6K5x2wJG6Mll"
                    data-callback="onCaptchaVerified"
                    data-expired-callback="onCaptchaExpired"
                ></div>

                <button type="submit">Wyślij</button>
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
.modal3 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal3-content {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    max-width: 400px;
    width: 100%;
    position: relative;
}
.close-button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    font-size: 1.2rem;
    background: transparent;
    border: none;
    cursor: pointer;
}
input,
textarea {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
}
button[type="submit"] {
    background-color: #007bff;
    color: white;
    padding: 0.7rem 1.2rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.status-message {
    margin-top: 1rem;
    color: green;
    font-weight: bold;
    text-align: center;
}
</style>
