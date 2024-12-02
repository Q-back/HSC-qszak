<template>
    <nav>
        <RouterLink to="/" class="Logo">
            <LogoHSC />
        </RouterLink>
        <div class="Content">
            <div class="Menu">
                <button class="contact" @click="showModal">Kontakt</button>
                <Modal2
                    :isVisible="isModalVisible"
                    @close="closeModal"
                ></Modal2>
                <div class="menu-icon" @click="toggleMenu">
                    <div v-if="!isMenuOpen" class="hamburger">
                        <MenuIcon />
                    </div>
                </div>
                <div class="sidebar" :class="{ active: isMenuOpen }">
                    <div class="sidebar-items">
                        <div class="close-menu">
                            <p class="top">MENU</p>
                            <div class="close-icon-box" @click="closeMenu">
                                <CloseIcon class="close-icon" />
                            </div>
                        </div>

                        <ul>
                            <li>
                                <RouterLink
                                    to="/"
                                    class="nav-link"
                                    @click="closeMenu"
                                    >Strona Główna</RouterLink
                                >
                            </li>
                            <li>
                                <RouterLink
                                    to="/oferta"
                                    class="nav-link"
                                    @click="closeMenu"
                                    >Oferta</RouterLink
                                >
                            </li>
                            <li>
                                <RouterLink
                                    to="/kadra"
                                    class="nav-link"
                                    @click="closeMenu"
                                    >Kadra</RouterLink
                                >
                            </li>
                            <li>
                                <RouterLink
                                    to="/o-nas"
                                    class="nav-link"
                                    @click="closeMenu"
                                    >O nas</RouterLink
                                >
                            </li>
                            <li>
                                <button class="gabinet" @click="toggleDropdown">
                                    Gabinet
                                    <ChevronDown
                                        class="chevron-down"
                                        :class="{ rotated: isDropdownVisible }"
                                    />
                                </button>
                                <ul
                                    class="secondary-items__list"
                                    v-if="isDropdownVisible"
                                >
                                    <li>
                                        <RouterLink
                                            to="/fizjoterapia"
                                            class="sub-nav-link"
                                            @click="closeMenu"
                                            >Fizjoterapia</RouterLink
                                        >
                                    </li>
                                    <li>
                                        <RouterLink
                                            to="/dietetyka"
                                            class="sub-nav-link"
                                            @click="closeMenu"
                                            >Dietetyka</RouterLink
                                        >
                                    </li>
                                    <li>
                                        <RouterLink
                                            to="/hipnoterapia"
                                            class="sub-nav-link"
                                            @click="closeMenu"
                                            >Hipnoterapia</RouterLink
                                        >
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div class="icon-box">
                            <div class="Facebook"><FacebookIcon /></div>
                            <div class="Instagram"><InstagramIcon /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { ref } from "vue";
import LogoHSC from "@/components/icons/LogoHSC.vue";
import FacebookIcon from "@/components/icons/facebook.vue";
import InstagramIcon from "@/components/icons/instagram.vue";
import MenuIcon from "@/components/icons/menu.vue";
import CloseIcon from "@/components/icons/closeIcon.vue";
import { RouterLink } from "vue-router";
import ChevronDown from "../icons/ChevronDown.vue";
import Modal2 from "@/components/home/Modal2.vue";

export default {
    name: "NavigationMobile",
    components: {
        LogoHSC,
        FacebookIcon,
        InstagramIcon,
        MenuIcon,
        CloseIcon,
        RouterLink,
        ChevronDown,
        Modal2,
    },
    setup() {
        const isModalVisible = ref(false);
        const isMenuOpen = ref(false);
        const isDropdownVisible = ref(false);

        const showModal = () => {
            isModalVisible.value = true;
        };

        const closeModal = () => {
            isModalVisible.value = false;
        };

        const toggleMenu = () => {
            isMenuOpen.value = !isMenuOpen.value;
        };

        const closeMenu = () => {
            isMenuOpen.value = false;
            isDropdownVisible.value = false;
        };

        const toggleDropdown = () => {
            isDropdownVisible.value = !isDropdownVisible.value;
        };

        return {
            isModalVisible,
            isMenuOpen,
            isDropdownVisible,
            showModal,
            closeModal,
            toggleMenu,
            closeMenu,
            toggleDropdown,
        };
    },
};
</script>

<style scoped>
nav {
    display: flex;
    width: calc(100vw - var(--scrollbarWidth));
    padding: var(--space-150, 0.75rem) var(--space-300, 1.5rem);
    justify-content: space-between;
    align-items: center;
    background: var(--Surface-Inverse-primary, #181818);
}

.Logo {
    width: 3rem;
    height: 3rem;
    flex-shrink: 0;
}

.Menu {
    display: flex;
    width: 12.875rem;
    justify-content: flex-end;
    align-items: center;
    gap: var(--space-200, 1rem);

    flex-shrink: 0;
}

.menu-icon {
    cursor: pointer;
}

.hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.sidebar {
    position: absolute;
    top: 0;
    right: 0;
    width: 22.4375rem;
    height: 100vh;
    display: none;
    background-color: #181818;
    transition: 0.5s ease-in;
    z-index: 2;
    overflow: hidden;
    background: var(--Surface-Inverse-primary, #181818);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.04),
        0px 6px 12px 0px rgba(0, 0, 0, 0.08);
}

.sidebar-items {
    display: flex;
    width: 22.4375rem;
    height: 50.75rem;
    padding-left: var(--space-200, 1rem);
    flex-direction: column;
    align-items: flex-end;
    flex-shrink: 0;
}

.close-menu {
    display: flex;
    align-items: center;
    align-self: stretch;
}

p.top {
    flex: 1 0 0;
    color: #fff;
    font-family: Montserrat;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
    letter-spacing: 0.03rem;
    text-transform: uppercase;
}

.close-icon-box {
    display: flex;
    padding: var(--space-300, 1.5rem);
    align-items: center;
    gap: 0.625rem;
    cursor: pointer;
}
.close-icon {
    width: var(--space-300, 1.5rem);
    height: var(--space-300, 1.5rem);
}

.sidebar ul {
    display: flex;
    flex-direction: column;
    padding: var(--space-200, 1rem) 0rem;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;
    list-style: none;
}

.sidebar li {
    cursor: pointer;
}
.nav-link {
    text-decoration: none;
    color: var(--Text-Inverse-primary, #fff);
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: -0.005rem;
}

.sidebar.active {
    display: block;
}

.gabinet {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--space-050, 0.25rem);
    color: var(--Text-Inverse-primary, #fff);
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: -0.005rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.sub-nav-link {
    display: flex;
    padding-left: 1rem;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    flex: 1 0 0;
    color: var(--Text-Inverse-primary, #fff);
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: -0.005rem;
    text-decoration: none;
}

.icon-box {
    display: flex;
    padding: var(--space-300, 1.5rem) var(--space-200, 1rem);
    justify-content: center;
    align-items: center;
    gap: 2rem;
    align-self: stretch;
}

.chevron-down {
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    gap: var(--space-050, 0.25rem);
    flex: 1 0 0;
}

.chevron-down.rotated {
    transform: rotate(180deg);
}

button.contact {
    display: flex;
    padding: 0.75rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: var(--Surface-Brand, #e30613);
    color: var(--Text-Inverse-primary, #fff);
    text-align: center;
    font-family: Montserrat;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1rem;
    text-transform: uppercase;
    background-color: #e30613;
    border: none;
    cursor: pointer;
}
</style>
