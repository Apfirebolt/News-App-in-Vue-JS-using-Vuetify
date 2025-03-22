<template>
    <VaNavbar
        color="#282F69"
        class="h-24"
    >
        <template #left>
            <VaNavbarItem class="logo">
                VUE NEWS
            </VaNavbarItem>
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
        </template>
    </VaNavbar>
</template>

<script setup>
import { VaNavbar, VaNavbarItem, VaIcon } from "vuestic-ui";
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
</style>