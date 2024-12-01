<template>
    <div class="video-container">
        <video
            class="video-asset"
            src="/images/promo/HSCwww1.mp4"
            autoplay
            loop
            muted
            playsinline
        ></video>
    </div>
</template>

<script>
export default {
    name: "VideoAsset",
};
</script>

<style scoped>
@media (max-width: 640px) {
    .video-container {
        position: relative;
        width: calc(100vw - var(--scrollbarWidth));
        height: 40vh;
        overflow: hidden;
    }
}
@media (min-width: 640px) and (max-width: 960px) {
    .video-container {
        position: relative;
        width: calc(100vw - var(--scrollbarWidth));
        height: 55vh;
        overflow: hidden;
    }
}
@media (min-width: 961px) {
    .video-container {
        position: relative;
        width: calc(100vw - var(--scrollbarWidth));
        height: 70vh;
        overflow: hidden;
    }
}

.video-asset {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; /* Wypełnia szerokość kontenera */
    height: 100%; /* Wypełnia wysokość kontenera */
    object-fit: cover; /* Dopasowanie do kontenera, przycięcie nadmiaru */
}
</style>
