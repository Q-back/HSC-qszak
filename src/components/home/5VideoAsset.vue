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
.video-container {
    position: relative;
    width: calc(100vw - var(--scrollbarWidth));
    height: 60svh;
    padding: 10rem;
    flex-direction: column;
    align-items: center;
    gap: 1.4375rem;
    overflow: hidden;
}
.video-asset {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
