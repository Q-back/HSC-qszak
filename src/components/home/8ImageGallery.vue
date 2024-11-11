<template>
    <div class="gallery">
        <swiper
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="2"
            :pagination="true"
            :modules="modules"
            :loop="true"
            :spaceBetween="324"
            :initialSlide="1"
            :breakpoints="{
                1300: {
                    slidesPerView: 2,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: -30,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    },
                },
            }"
            class="swiper-dynamic"
        >
            <swiper-slide>
                <img :src="photo" alt="boys" />
            </swiper-slide>
            <swiper-slide>
                <img :src="photo" alt="boys" />
            </swiper-slide>
            <swiper-slide>
                <img :src="photo" alt="boys" />
            </swiper-slide>
            <swiper-slide>
                <img :src="photo" alt="boys" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import photo from "@/assets/gym-photo.jpg";

export default {
    name: "ImageGallery",
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            photo,
        };
    },
    setup() {
        return {
            modules: [EffectCoverflow, Pagination],
        };
    },
};
</script>

<style scoped>
.gallery {
    width: calc(100svw - var(--scrollbarWidth));
    display: flex;
    align-items: center;
    gap: var(--space-100, 0.5rem);
}
img {
    max-width: 80vw;
    max-height: 80vh;
    object-fit: contain;
}

.swiper-slide {
    align-self: flex-start;
    justify-self: flex-start;
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
