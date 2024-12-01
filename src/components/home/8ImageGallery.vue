<template>
    <div class="gallery">
        <swiper
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="1"
            :pagination="true"
            :modules="modules"
            :loop="true"
            :spaceBetween="auto"
            :initialSlide="0"
            class="swiper-dynamic"
        >
            <swiper-slide>
                <img src="\images\galeria\gallery1.png" alt="Zdjęcie siłowni" />
            </swiper-slide>
            <swiper-slide>
                <img src="\images\galeria\gallery2.png" alt="Zdjęcie siłowni" />
            </swiper-slide>
            <swiper-slide>
                <img src="\images\galeria\gallery3.png" alt="Zdjęcie siłowni" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default {
    name: "ImageGallery",
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>

<style scoped>
.gallery {
    width: calc(100svw - var(--scrollbarWidth));
    display: flex;
    align-items: center;
    gap: var(--space-100, 2rem);
}
img {
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
}

.swiper-slide {
    display: flex;
    align-self: flex-start;
    justify-self: flex-start;
    text-align: center;

    justify-content: center;
    align-items: center;
}
</style>
