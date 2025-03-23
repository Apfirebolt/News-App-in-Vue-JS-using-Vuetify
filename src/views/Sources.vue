<template>
  <div class="container">
    <h1>News Sources</h1>
    <p>Welcome to our News Dashboard App!</p>

    <Loader v-if="isLoading" />
    <div>
      <va-card
        v-for="source in sources"
        :key="source.id"
        :bordered=true
        class="cursor-pointer source-card"
        @click="() => $router.push(`/sources/${source.id}`)"
      >
        <va-card-content>
          <h3>
            {{ source.name }}
          </h3>
          <p>{{ source.description }}</p>
          <p><strong>Category:</strong> {{ source.category }}</p>
          <p><strong>Language:</strong> {{ source.language }}</p>
          <p><strong>Country:</strong> {{ source.country }}</p>
          <p>
            <strong>URL:</strong>
            <a :href="source.url" class="link" target="_blank">{{
              source.url
            }}</a>
          </p>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useNewsStore } from "../stores/news";
import Loader from "../components/Loader.vue";
import { VaCard, VaCardContent, VaCardTitle } from "vuestic-ui/web-components";

const newsStore = useNewsStore();
const sources = computed(() => newsStore.getSources);
const isLoading = computed(() => newsStore.isLoading);

onMounted(async () => {
  await newsStore.getSourcesAction();
});
</script>

<style scoped>
.source-card {
  transition: transform 0.2s;
  margin: 1rem auto;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.container {
  margin: 1rem auto;
  width: 80%;
}

.source-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.source-card p {
  margin-bottom: 0.5rem;
}

.source-card {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: white !important;
  background-color: #cd5c5c !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.source-card a {
  color: white;
  font-size: 1rem;
  text-decoration: none;
}

.source-card a:hover {
  text-decoration: underline;
  font-size: 1.1rem;
  transition: all 0.2s ease-in-out;
}
</style>
