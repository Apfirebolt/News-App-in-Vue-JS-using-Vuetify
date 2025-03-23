<template>
  <div class="container">
    <h1>About Us</h1>
    <p>
      Welcome to our News App! This application is built using Vue.js and
      Vuetify. It provides the latest news articles from various sources.
    </p>
    <VaButton @click="showModal = !showModal"> Show Info </VaButton>

    <VaModal v-model="showModal" ok-text="Apply">
      <h3 class="va-h3">Technologies Used</h3>
      <p>
        This application is built using Vue.js, Vuestic, and the News API.
      </p>
    </VaModal>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);

</script>

<style scoped>
.container {
  width: 80%;
  margin: 1rem auto;
}
</style>
