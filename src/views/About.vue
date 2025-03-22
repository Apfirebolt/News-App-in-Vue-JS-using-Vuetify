<template>
  <div>
    <h1>About Us</h1>
    <p>
      Welcome to our News App! This application is built using Vue.js and
      Vuetify. It provides the latest news articles from various sources.
    </p>
    <VaButton @click="showModal = !showModal"> Show modal </VaButton>

    <VaModal v-model="showModal" ok-text="Apply">
      <h3 class="va-h3">Title</h3>
      <p>
        Classic modal overlay which represents a dialog box or other interactive
        component, such as a dismissible alert, sub-window, etc.
      </p>
    </VaModal>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
</script>
