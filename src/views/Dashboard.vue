<template>
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to our News Dashboard App!</p>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from "vue";
  
  onMounted(() => {
    console.log("About Us component mounted", import.meta.env.VITE_APP_KEY);
  });
  </script>
  