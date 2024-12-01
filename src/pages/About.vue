<template>
    <Hero-Content />
    <Section />
    <Promo />
    <VideoContent />
    <Footer />
</template>

<script>
import HeroContent from "@/components/about/1Hero-Content.vue";
import Section from "@/components/about/2Section.vue";
import Promo from "@/components/about/3Promo.vue";
import VideoContent from "@/components/home/14VideoContent.vue";
import Footer from "@/components/home/15Footer.vue";

export default {
    name: "About",
    components: {
        HeroContent,
        Section,
        Promo,
        VideoContent,
        Footer,
    },
};
</script>
