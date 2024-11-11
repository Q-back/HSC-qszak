<template>
    <nav>
        <RouterLink to="/" class="logo">
            <LogoHSC />
        </RouterLink>
        <div class="content">
            <div class="primary-items">
                <RouterLink to="/" class="nav-link">Strona Główna</RouterLink>
                <RouterLink to="/oferta" class="nav-link">Oferta</RouterLink>
                <RouterLink to="/kadra" class="nav-link">Kadra</RouterLink>
                <RouterLink to="/o-nas" class="nav-link">O nas</RouterLink>
            </div>
        </div>
        <div class="separator"></div>
        <div class="secondary-items">
            <button class="gabinet" @click="toggleDropdown">
                Gabinet
                <ChevronDown :class="{ rotated: isDropdownVisible }" />
            </button>
            <ul
                class="secondary-items__list"
                v-if="isDropdownVisible"
                ref="dropdownList"
            >
                <li>
                    <RouterLink
                        to="/fizjoterapia"
                        @click="toggleDropdown"
                        class="nav-link"
                        >Fizjoterapia</RouterLink
                    >
                </li>
                <li>
                    <RouterLink
                        to="/dietetyka"
                        @click="toggleDropdown"
                        class="nav-link"
                        >Dietetyka</RouterLink
                    >
                </li>
                <li>
                    <RouterLink
                        to="/hipnoterapia"
                        @click="toggleDropdown"
                        class="nav-link"
                        >Hipnoterapia</RouterLink
                    >
                </li>
            </ul>
        </div>
        <div class="separator"></div>
        <div class="facebook">
            <FacebookIcon />
        </div>
        <div class="instagram">
            <InstagramIcon />
        </div>

        <button class="contact" @click="showModal">Kontakt</button>
        <Modal :isVisible="isModalVisible" @close="closeModal"></Modal>
    </nav>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Modal from "./Modal.vue";
import LogoHSC from "@/components/icons/LogoHSC.vue";
import FacebookIcon from "@/components/icons/facebook.vue";
import InstagramIcon from "@/components/icons/instagram.vue";
import { RouterLink } from "vue-router";
import ChevronDown from "../icons/ChevronDown.vue";

export default {
    name: "Navigation",
    components: {
        LogoHSC,
        FacebookIcon,
        InstagramIcon,
        Modal,
        RouterLink,
        ChevronDown,
    },
    setup() {
        const isModalVisible = ref(false);
        const showModal = () => {
            isModalVisible.value = true;
        };

        const closeModal = () => {
            isModalVisible.value = false;
        };

        const isDropdownVisible = ref(false);
        const dropdownList = ref(null);

        const toggleDropdown = () => {
            isDropdownVisible.value = !isDropdownVisible.value;
        };

        const handleClickOutside = (event) => {
            // Sprawdzenie, czy kliknięto poza dropdown
            if (
                dropdownList.value &&
                !dropdownList.value.contains(event.target) &&
                !event.target.closest(".gabinet")
            ) {
                isDropdownVisible.value = false;
            }
        };

        onMounted(() => {
            document.addEventListener("click", handleClickOutside);
        });

        onBeforeUnmount(() => {
            document.removeEventListener("click", handleClickOutside);
        });

        return {
            isModalVisible,
            isDropdownVisible,
            showModal,
            closeModal,
            toggleDropdown,
            dropdownList,
        };
    },
};
</script>

<style scoped>
nav {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 0.75rem 4.5rem;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    background: #181818;
}

.logo {
    width: 3.5rem;
    height: 3.5rem;
    flex-shrink: 0;
}

.content {
    display: flex;
    padding: var(--space-100, 0.5rem);
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    flex: auto;
}

.primary-items,
.secondary-items,
.tertiary-items {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    position: relative;
}

.secondary-items__list {
    position: absolute;
    top: 180%;
    left: -32px;
    width: 180%;
    list-style: none;
    background: #181818;
    padding: 0.5rem 0;
    margin: 0;
    z-index: 10;
}

li {
    display: flex;
    padding: var(--space-200, 1rem) 0rem;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    align-self: stretch;
}

.nav-link {
    color: #fff;
    text-align: center;
    font-family: "Montserrat";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.00875rem;
    word-wrap: break-word;
    text-decoration: none;
}

.gabinet {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space-050, 0.25rem);
    color: #fff;
    text-align: center;
    font-family: "Montserrat";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.00875rem;
    word-wrap: break-word;
    text-decoration: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
}
.chevron-down {
    transition: transform 0.3s ease;
}

.rotated {
    transform: rotate(180deg);
}

.separator {
    width: 0.125rem;
    height: var(--space-300, 1.5rem);
    background-color: #fff;
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
