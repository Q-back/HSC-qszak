<template>
    <HeroContent />
    <ContactBanner />
    <AboutUsSection />
    <VideoAsset />
    <OfferSection />
    <TeamSection />
    <ImageGallery />
    <SocialSection />
    <Cooperation />
    <HSCMoreSection />
    <ReviewsSection />
    <ContactSection />
    <VideoContent />
    <Footer />
    <Modal />
</template>

<script>
import HeroContent from "@/components/home/2HeroContent.vue";
import ContactBanner from "@/components/home/3ContactBanner.vue";
import AboutUsSection from "@/components/home/4AboutUsSection.vue";
import VideoAsset from "@/components/home/5VideoAsset.vue";
import OfferSection from "@/components/home/6OfferSection.vue";
import TeamSection from "@/components/home/7TeamSection.vue";
import ImageGallery from "@/components/home/8ImageGallery.vue";
import SocialSection from "@/components/home/9SocialSection.vue";
import Cooperation from "@/components/home/10Cooperation.vue";
import HSCMoreSection from "@/components/home/11HSCMoreSection.vue";
import ReviewsSection from "@/components/home/12ReviewsSection.vue";
import ContactSection from "@/components/home/13ContactSection.vue";
import VideoContent from "@/components/home/14VideoContent.vue";
import Footer from "@/components/home/15Footer.vue";
import Modal from "@/components/home/Modal.vue";

export default {
    name: "Home",
    components: {
        HeroContent,
        ContactBanner,
        AboutUsSection,
        VideoAsset,
        OfferSection,
        TeamSection,
        ImageGallery,
        SocialSection,
        Cooperation,
        HSCMoreSection,
        ReviewsSection,
        ContactSection,
        VideoContent,
        Footer,
        Modal,
    },
};
</script>
