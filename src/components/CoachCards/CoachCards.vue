<template>
    <RouterLink
        class="link"
        :to="{ name: 'Karta-Trenera', params: { coachName: coachName } }"
    >
        <div
            class="coach-card"
            @mouseover="isHovered = true"
            @mouseleave="isHovered = false"
        >
            <div class="gallery-image">
                <div class="ratio-image">
                    <img
                        :src="imgSrc"
                        :alt="imgAlt"
                        :style="{
                            filter:
                                isLargeScreen && !isHovered
                                    ? 'grayscale(100%)'
                                    : 'grayscale(0%)',
                            transition: 'filter 0.3s ease',
                        }"
                    />
                </div>
            </div>
            <div class="coach-info">
                <div class="coach-name">{{ coachName }}</div>
                <div class="coach-position">{{ coachPosition }}</div>
            </div>
        </div>
    </RouterLink>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";

export default {
    name: "CoachCards",
    components: {
        RouterLink,
    },
    props: {
        coachName: {
            type: String,
        },
        coachPosition: {
            type: String,
        },
        imgSrc: {
            type: String,
        },
        imgAlt: {
            type: String,
        },
    },
    setup() {
        const isHovered = ref(false);
        const isLargeScreen = ref(window.innerWidth > 960);

        // Handler to update `isLargeScreen` on resize
        const handleResize = () => {
            isLargeScreen.value = window.innerWidth > 960;
        };

        onMounted(() => {
            // Listen for resize events
            window.addEventListener("resize", handleResize);
        });

        onBeforeUnmount(() => {
            // Cleanup listener
            window.removeEventListener("resize", handleResize);
        });

        return {
            isHovered,
            isLargeScreen,
        };
    },
};
</script>

<style scoped>
.link {
    text-decoration: none;
}
.coach-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--Surface-Secondary, #f5f5f5);
    cursor: pointer;
}

.gallery-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
}
.ratio-image {
    display: flex;
    max-width: 43.75rem;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
}
img {
    max-width: 301px;
    max-height: 300px;
    display: block;
}
.coach-info {
    display: flex;
    padding: var(--space-300, 1.5rem) 0rem;
    flex-direction: column;
    align-items: center;
    gap: var(--space-050, 0.25rem);
    align-self: stretch;
}
.coach-name {
    width: 18.75rem;
    color: var(--Text-Primary, #181818);
    text-align: center;
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    letter-spacing: -0.00563rem;
}
.coach-position {
    width: 18.75rem;
    color: var(--Text-Tertiary, #747474);
    text-align: center;
    font-family: Montserrat;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: -0.00438rem;
}
</style>
