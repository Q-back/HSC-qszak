<template>
    <div class="contact-banner">
        <div class="claim">Holistyczne Centrum Sportu</div>
        <div class="contact-info">
            <div class="location">
                <Location />
                <a
                    href="https://maps.app.goo.gl/BH8SCxM5tmfjSJ1R8"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="address"
                >
                    <ul>
                        <li>Holistic Sport Center</li>
                        <li>ul. Krakowska 29C</li>
                        <li>50-424 Wrocław</li>
                    </ul>
                </a>
            </div>
            <div class="phone">
                <Phone />
                <p class="phone-number">+48 793 951 015</p>
            </div>
            <div class="mail">
                <Mail />
                <p class="email">holisticsportcenter@gmail.com</p>
            </div>
        </div>
    </div>
</template>

<script>
import Location from "@/components/icons/location.vue";
import Phone from "@/components/icons/phone.vue";
import Mail from "@/components/icons/mail.vue";

export default {
    name: "ContactBanner",
    components: {
        Location,
        Phone,
        Mail,
    },
};
</script>

<style scoped>
@media (max-width: 640px) {
    .contact-banner {
        display: flex;
        width: calc(100vw - var(--scrollbarWidth));
        padding: 3rem var(--space-200, 1rem);
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        background: var(--Surface-Inverse-primary, #181818);
    }
    .claim {
        align-self: stretch;
        text-align: center;
        color: var(--Text-Inverse-primary, #fff);
        font-family: Montserrat;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2rem;
        letter-spacing: 0.03rem;
        text-transform: uppercase;
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        padding: 0rem var(--space-300, 1.5rem);
        align-items: center;
        align-content: center;
        gap: var(--space-300, 1.5rem) 4.5rem;
        align-self: stretch;
        flex-wrap: wrap;
    }

    .location {
        display: flex;
        align-items: center;
        gap: var(--space-100, 0.5rem);
    }

    .address,
    .phone-number,
    .email {
        color: #fff;
        font-family: "Montserrat";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: 0.01rem;
        text-decoration: none;
    }

    .phone,
    .mail {
        display: flex;
        align-items: center;
        gap: var(--space-150, 0.75rem);
    }

    ul {
        list-style: none;
    }
}

/* wersja na tablet */
@media (min-width: 640px) and (max-width: 960px) {
    .contact-banner {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 4.5rem var(--space-200, 1rem);
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        background: var(--Surface-Inverse-primary, #181818);
    }
    .claim {
        align-self: stretch;
        text-align: center;
        color: var(--Text-Inverse-primary, #fff);
        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 4rem;
        letter-spacing: 0.06rem;
        text-transform: uppercase;
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        align-self: stretch;
        flex-wrap: wrap;
    }

    ul {
        list-style: none;
    }

    .location {
        display: flex;
        align-items: center;
        gap: var(--space-100, 0.5rem);
    }

    .address,
    .phone-number,
    .email {
        color: #fff;
        font-family: "Montserrat";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        letter-spacing: -0.005rem;
        text-decoration: none;
    }

    .phone,
    .mail {
        display: flex;
        align-items: center;
        gap: var(--space-150, 0.75rem);
    }
}

/* wersja na komputer */
@media (min-width: 960px) {
    .contact-banner {
        display: flex;
        width: calc(100svw - var(--scrollbarWidth));
        padding: 4.5rem;
        flex-direction: column;
        align-items: center;
        gap: 4.5rem;
        background: var(--Surface-Inverse-primary, #181818);
    }
    .claim {
        align-self: stretch;
        text-align: center;
        color: var(--Text-Inverse-primary, #fff);
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
        padding: 0rem var(--space-300, 1.5rem);
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 3rem 4.5rem;
        align-self: stretch;
        flex-wrap: wrap;
        flex-direction: column;
    }

    ul {
        list-style: none;
    }

    .location {
        display: flex;
        align-items: center;
        gap: var(--space-100, 0.5rem);
    }

    .address,
    .phone-number,
    .email {
        color: #fff;
        font-family: "Montserrat";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: 0.01rem;
        text-decoration: none;
    }

    .phone,
    .mail {
        display: flex;
        align-items: center;
        gap: var(--space-150, 0.75rem);
    }
}

@media (min-width: 1086px) {
    .contact-info {
        flex-direction: unset;
    }
}
</style>
