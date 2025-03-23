<template>
    <VaNavbar color="#282F69" class="h-24">
        <template #left>
            <VaNavbarItem class="logo"> VUE NEWS </VaNavbarItem>
        </template>
        <template #right>
            <VaNavbarItem class="hidden sm:block">
                <router-link to="/" class="link">Home</router-link>
            </VaNavbarItem>
            <VaNavbarItem class="hidden sm:block">
                <router-link to="/dashboard" class="link">Dashboard</router-link>
            </VaNavbarItem>
            <VaNavbarItem class="hidden sm:block">
                <router-link to="/sources" class="link">Sources</router-link>
            </VaNavbarItem>
            <VaNavbarItem class="hidden sm:block">
                <router-link to="/about" class="link">About</router-link>
            </VaNavbarItem>
            <VaNavbarItem class="hidden sm:block">
                <router-link to="/login" class="link">Login</router-link>
            </VaNavbarItem>
            <VaNavbarItem class="hidden sm:block">
                <router-link to="/register" class="link">Register</router-link>
            </VaNavbarItem>
            <VaNavbarItem class="mobile-only">
                <font-awesome-icon :icon="faBars" @click="toggleSidebar" />
            </VaNavbarItem>
        </template>
    </VaNavbar>
    <transition name="slide">
        <aside v-if="isSidebarOpen" class="sidebar">
            <div class="sidebar-item">
                <font-awesome-icon :icon="faTachometerAlt" class="icon" />
                <span class="sidebar-item-title">Vue News</span>
            </div>

            <div class="accordion">
                <div class="collapse">
                    <div class="collapse-header" @click="toggleCollapse">
                        <div class="sidebar-item">
                            <font-awesome-icon :icon="faEnvelope" class="icon" />
                            <span class="sidebar-item-title">Messages</span>
                            <font-awesome-icon
                                :icon="isCollapsed ? faChevronUp : faChevronDown"
                                class="icon"
                                style="margin-left: auto"
                            />
                        </div>
                    </div>
                    <div v-if="!isCollapsed" class="collapse-body">
                        <div class="sidebar-item">
                            <font-awesome-icon :icon="faPaperPlane" class="icon" />
                            <span class="sidebar-item-title">Send</span>
                        </div>
                        <div class="sidebar-item">
                            <font-awesome-icon :icon="faFileAlt" class="icon" />
                            <span class="sidebar-item-title">Drafts</span>
                        </div>
                    </div>
                </div>
            </div>

            <router-link to="/sources" class="sidebar-item active">
                <font-awesome-icon :icon="faAddressBook" class="icon" />
                <span class="sidebar-item-title">News</span>
            </router-link>

            <div class="spacer"></div>

            <router-link to="/" class="sidebar-item active">
                <font-awesome-icon :icon="faCog" class="icon" />
                <span class="sidebar-item-title">Home</span>
            </router-link>
        </aside>
    </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faBars,
    faTachometerAlt,
    faEnvelope,
    faChevronUp,
    faChevronDown,
    faPaperPlane,
    faFileAlt,
    faAddressBook,
    faCog,
} from "@fortawesome/free-solid-svg-icons";

const isSidebarOpen = ref(false);
const isCollapsed = ref(true);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value;
};

const closeOnClickOutside = (event) => {
    if (isSidebarOpen.value) {
        const sidebar = document.querySelector(".sidebar");
        const navbar = document.querySelector(".h-24");
        if (!sidebar.contains(event.target) && !navbar.contains(event.target)) {
            isSidebarOpen.value = false;
        }
    }
};

onMounted(() => {
    document.addEventListener("click", closeOnClickOutside);
});
</script>

<style scoped>
.logo {
    font-weight: 600;
    font-size: 1.5rem;
}

.link {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
}

.sidebar {
    background-color: #282f69 !important;
    color: #fff !important;
    padding: 1rem;
    height: 100vh;
    width: 50% !important;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.3s;
    z-index: 1000;
    display: none;
}

.sidebar .link {
    display: block;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
}

.sidebar .link:hover {
    background-color: #1f2351;
}

.sidebar .link {
        color: #fff;
        text-decoration: none;
}

.icon {
    color: #fff;
    margin-right: 0.5rem;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%); /* Match the initial off-screen position */
}

/* Add slide-enter-to to make sidebar fully visible */
.slide-enter-to,
.slide-leave-from {
    transform: translateX(0);
}

.mobile-only {
    font-size: 1.5rem;  
    display: none;
}

@media (max-width: 640px) {
    .hidden {
        display: none;
    }

    .block {
        display: block;
    }

    .mobile-only {
        display: block;
    }

    .sidebar {
        width: 100%;
        display: block;
    }
}

.sidebar-item {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    background-color: #AC1754;
    padding: 1rem;
    color: #fff !important;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
}

.sidebar-item-title {
    margin-left: 0.5rem;
}

.accordion {
    margin-top: 1rem;
}

.collapse-header {
    cursor: pointer;
}

.collapse-body {
    padding-left: 1rem;
}

.spacer {
    flex-grow: 1;
}
</style>
