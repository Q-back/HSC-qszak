<template>
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
            <button class="primary" @click="showModal">Zapisz się!</button>
            <Modal2 :isVisible="isModalVisible" @close="closeModal"></Modal2>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import Modal2 from "./Modal2.vue";

export default {
    name: "VideoContent",
    components: {
        Modal2,
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
    .video-container {
        position: relative;
        width: calc(99svw - var(--scrollbarWidth));
        height: 40svh;
        padding: 10rem var(--space-200, 1rem);
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        background: var(--Surface-Inverse-primary, #181818);
    }
    .video-player {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
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

        /* Headings/Desktop/S */
        font-family: Montserrat;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem; /* 150% */
        letter-spacing: 0.04rem;
        text-transform: uppercase;
    }

    button.primary {
        position: relative;
        top: 10vh;
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
        border-color: #e30613;
        cursor: pointer;
    }
}

@media (min-width: 640px) {
    .video-container {
        position: relative;
        width: calc(100svw - var(--scrollbarWidth));
        height: 60vh;
        padding: 10rem var(--space-200, 1rem);
        flex-direction: column;
        align-items: center;
        gap: var(--space-300, 1.5rem);
        background-color: #181818;
    }
    .video-player {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
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
        font-size: 4.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 5.4rem */
        letter-spacing: 0.09rem;
        text-transform: uppercase;
    }

    button.primary {
        position: relative;
        top: 25vh;
        padding: 1.25rem 3rem;
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
        border-color: #e30613;
        cursor: pointer;
    }
}
</style>
