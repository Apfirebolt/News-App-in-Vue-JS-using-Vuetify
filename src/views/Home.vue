<template>
  <div class="container">
    <h1>About Us</h1>
    <p>Welcome to our News App!</p>
    <CountryList />
    <CategoryList />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import CategoryList from "../components/CategoryList.vue";
import CountryList from "../components/CountryList.vue";

onMounted(() => {
  console.log("About Us component mounted", import.meta.env.VITE_APP_KEY);
});
</script>

<style scoped>
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.container {
  margin: 1rem auto;
  width: 80%;
}
</style>