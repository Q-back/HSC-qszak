<template>
    <div class="hero-offer">
        <div class="video-container">
            <video
                class="video-player"
                src="/images/promo/HSCwww1.mp4"
                autoplay
                loop
                muted
                playsinline
            ></video>
            <div class="text-box">
                <div class="text-box-top">Nasza</div>
                <div class="text-box-bottom">oferta</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeroOffer",
};
</script>

<style scoped>
.hero-offer {
    width: calc(100svw - var(--scrollbarWidth));
    background-color: rgba(0, 0, 0, 0.4);
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

.text-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
}

.text-box-top {
    color: var(--Text-Inverse-primary, #fff);
    text-align: center;
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: -0.00563rem;
    text-transform: uppercase;
}

.text-box-bottom {
    color: var(--Text-Inverse-primary, #fff);
    text-align: center;
    font-family: Montserrat;
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 6rem;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
}
</style>
